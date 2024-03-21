import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decodeBase64Image } from "../../app/encode_decode";
import { addToCart } from "../../slice/cartSlice";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
  Toolbar,
  Container,
  Grid,
} from "@mui/material";

const GetProductsByClass = () => {
  const navigate = useNavigate();
  const { classItem } = useParams();
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productList);

  const matchingProducts = products.filter(
    (product) => product.class === classItem
  );

  const handleAddToCart = (product, quantity) => {
    try {
      dispatch(addToCart({ product, quantity }));
      console.log(`${quantity}, ${product.name} added to cart successfully!`);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleMoreDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const updateQuantity = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
          <Grid container spacing={1}>
            {matchingProducts && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {matchingProducts.map((product) => (
                  <Card
                    key={product.id}
                    style={{
                      width: "20%",
                      margin: "1%",
                      minWidth: "250px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, .8)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="40%"
                      image={decodeBase64Image(product.image)}
                      alt={product.name}
                    />
                    <CardContent
                      style={{
                        textAlign: "center",
                        height: "calc(100% - 60px)",
                        minWidth: "calc(100% - 60px)",
                      }}
                    >
                      <Typography variant="h6" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Price: ${product.price}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Select
                          value={quantities[product.id] || 1}
                          onChange={(e) =>
                            updateQuantity(product.id, e.target.value)
                          }
                          style={{
                            margin: "10px 0",
                            width: "75px",
                            height: "30px",
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: { maxHeight: 160, width: "auto" },
                            },
                          }}
                        >
                          {[...Array(product.quantity).keys()].map((value) => (
                            <MenuItem key={value + 1} value={value + 1}>
                              {value + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          handleAddToCart(product, quantities[product.id] || 1)
                        }
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleMoreDetails(product.id)}
                      >
                        More Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default GetProductsByClass;
