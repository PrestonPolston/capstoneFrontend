import { CardContent, Card, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccountInfo = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          position: "relative",
          width: "80%",
          height: "60%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            gap: "5%",
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/userInfo")}
          >
            User Information
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/updateLogin")}
          >
            Change Login
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/editpreferences")}
          >
            User Preferences
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/getUserReview")}
          >
            User Reviews
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/getUserOrders")}
          >
            User Orders
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountInfo;
