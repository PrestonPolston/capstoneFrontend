import { Card, CardContent, Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const welcomeImages = [
  {
    label: "Slit Shear Machine",
    imgPath: "/slitShear.JPG",
  },
  {
    label: "Rollformer Machine",
    imgPath: "/rollFormer.JPG",
  },
  {
    label: "Barndominium",
    imgPath: "/barndo.JPG",
  },
];

const LandingPage = () => {
  return (
    <div>
      <Box sx={{ pt: "1%" }}>
        <Card>
          <CardContent>
            <Typography variant="h3" align="center">
              Welcome to MetalSite!
            </Typography>
          </CardContent>
        </Card>

        <div style={{ paddingTop: "1%" }}>
          <Card>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div style={{ width: "80%", margin: "0 auto" }}>
                <Carousel>
                  {welcomeImages.map((image) => (
                    <img
                      key={image.id}
                      src={image.imgPath}
                      alt={image.label}
                      style={{
                        height: "400px",
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  ))}
                </Carousel>
              </div>
            </CardContent>
          </Card>
        </div>

        <div style={{ paddingTop: "1%" }}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                About Us
              </Typography>
              <Typography>
                Metalsite is a project I developed as my capstone. The concept
                was to create a fully functional e-commerce website backed by a
                well-structured database, capable of supporting a variety of
                products. The frontend is built using JavaScript with React and
                Material UI (MUI), while the backend is powered by Node.js with
                Express, using Prisma for database management. The application
                is deployed on Render, ensuring accessibility and performance.
                Please be patient on loading this page due to this backend being
                hosted free there can be a delay on calls.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Box>
    </div>
  );
};

export default LandingPage;
