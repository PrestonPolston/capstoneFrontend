import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AllOrders from "./AllOrders";
import AllProducts from "./AllProducts";
import AllUsers from "./AllUsers";
import LowStock from "./LowStock";

export default function AdminLanding() {
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
        width: "80%",
        height: "100%",
      }}
    >
      <Box
        component="main"
        sx={{
          height: "100vh",
          flexGrow: 1,
          width: "100%",
          overflow: "auto",
          pb: 1,
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} width={"50%"}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 200,
                }}
              >
                <AllOrders />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} width={"50%"}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 200,
                }}
              >
                <LowStock />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <AllProducts />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <AllUsers />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
