import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useCreateOrderMutation } from "../../../api/metalApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Success from "./success";
import { emptyCart } from "../../../slice/cartSlice";
import { Fragment } from "react";

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [createOrder] = useCreateOrderMutation();
  const [orderNumber, setOrderNumber] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart);

  function generateOrderNumber() {
    const min = 100000;
    const max = 999999;
    const orderNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return orderNumber;
  }

  const handleNext = async () => {
    try {
      if (activeStep === steps.length - 2) {
        const userId = localStorage.getItem("userId");
        const orderData = {
          user: userId ? userId : null,
          products: cartData.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
          })),
          quantities: cartData.map((item) => item.quantity),
          totalPrice: cartData.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
          ),
          orderNumber: generateOrderNumber().toString(),
        };

        console.log(orderData);

        const response = await createOrder({ input: orderData }).unwrap();
        console.log("Order created successfully:", response);

        setOrderNumber(response.orderNumber);
        dispatch(emptyCart());

        console.log("Navigating to the Success step...");
        setActiveStep(activeStep + 1);
      } else {
        setActiveStep(activeStep + 1);
      }
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = [
    "Shipping address",
    "Payment details",
    "Review your order",
    "Success",
  ];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review cartData={cartData} />;
      case 3:
        return (
          <Success
            orderNumber={orderNumber}
            onReturnHome={() => navigate("/")}
          />
        );

      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
        <Paper sx={{ my: 4, p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ my: 2 }}>{getStepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{ mt: 3, ml: 1 }}
              >
                Return Home
              </Button>
            ) : activeStep === 2 ? (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                Place Order
              </Button>
            ) : (
              <>
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Next
                </Button>
              </>
            )}
          </Box>
        </Paper>
      </Container>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="metalsite.netlify.app">
            MetalSite
          </Link>
          {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Fragment>
  );
}

export default Checkout;
