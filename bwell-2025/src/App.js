// ... existing code ...
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  // Navbar menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState("");

  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setMenu(menuName);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenu("");
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Navbar */}
      <AppBar position="sticky" color="primary" elevation={2}>
        <Container maxWidth="lg">
          <Toolbar>
            <img
              src="/images/logo_small.jpg"
              alt="BWell Logo"
              style={{ height: 48, marginRight: 16, borderRadius: 8 }}
            />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              bWell Clinic, Malahide
            </Typography>
            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button
                color="inherit"
                onClick={(e) => handleMenuOpen(e, "about")}
              >
                About bWell
              </Button>
              <Button
                color="inherit"
                onClick={(e) => handleMenuOpen(e, "services")}
              >
                bWell Services
              </Button>
              <Button
                color="inherit"
                onClick={(e) => handleMenuOpen(e, "media")}
              >
                Media
              </Button>
              <Button color="inherit" href="#gallery">
                Gallery
              </Button>
              <Button color="inherit" href="#contact">
                Contact
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                href="#"
                sx={{ ml: 2, borderColor: "white" }}
              >
                Home
              </Button>
            </Box>
            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                onClick={(e) => handleMenuOpen(e, "mobile")}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            {/* Dropdown Menus */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menu === "about"}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Our Philosophy</MenuItem>
              <MenuItem onClick={handleMenuClose}>Therapists</MenuItem>
              <MenuItem onClick={handleMenuClose}>Location</MenuItem>
              <MenuItem onClick={handleMenuClose}>Testimonials</MenuItem>
              <MenuItem onClick={handleMenuClose}>FAQ and Prices</MenuItem>
            </Menu>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menu === "services"}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Overview of Therapy</MenuItem>
              <MenuItem onClick={handleMenuClose}>List of Services</MenuItem>
              <MenuItem onClick={handleMenuClose}>bWell Corporate</MenuItem>
              <MenuItem onClick={handleMenuClose}>Workshops</MenuItem>
            </Menu>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menu === "media"}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Social</MenuItem>
              <MenuItem onClick={handleMenuClose}>TV</MenuItem>
              <MenuItem onClick={handleMenuClose}>Radio</MenuItem>
              <MenuItem onClick={handleMenuClose}>Print</MenuItem>
            </Menu>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menu === "mobile"}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>About bWell</MenuItem>
              <MenuItem onClick={handleMenuClose}>bWell Services</MenuItem>
              <MenuItem onClick={handleMenuClose}>Media</MenuItem>
              <MenuItem onClick={handleMenuClose}>Gallery</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 400, md: 500 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(rgba(76,105,114,0.6),rgba(76,105,114,0.6)), url(/images/outside_clinic.jpg) center/cover no-repeat`,
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                bWell Clinic
              </Typography>
              <Typography variant="h5" sx={{ mb: 3 }}>
                The bWell Clinic Team use a winning combination of Positive Psychology Strategies that gives you the tools and know-how to improve and take control of your life.
              </Typography>
              <Button
                variant="contained"
                color="warning"
                size="large"
                sx={{ mr: 2 }}
                href="#contact"
              >
                Contact
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                href="#aboutbwell"
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
              <Card
                sx={{
                  display: "inline-block",
                  bgcolor: "rgba(255,255,255,0.9)",
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  maxWidth: 300,
                }}
              >
                <CardMedia
                  component="img"
                  image="/images/secret lives book launch.jpeg"
                  alt="Secret Lives Book"
                  sx={{ borderRadius: 2, height: 200, objectFit: "cover" }}
                />
                <CardContent>
                  <Button
                    variant="contained"
                    color="warning"
                    fullWidth
                    href="https://www.gillbooks.ie/mind-body-spirit/mind-body-spirit/the-secret-lives-of-adults"
                    target="_blank"
                  >
                    Click Here to Buy!
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          bWell Clinic Testimonials
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              quote: "The best therapy I have ever encountered",
              author: "Anxiety Client",
            },
            {
              quote:
                "Thank you so much I have my life back. I am now in control and can change how I feel. I am so looking forward to the future.",
              author: "Panic Attack Client",
            },
            {
              quote:
                "I feel very much in control now of the fear of a panic attack and know that I have strategies I can use to help me.",
              author: "Panic Attack Client",
            },
          ].map((t, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  "{t.quote}"
                </Typography>
                <Typography variant="subtitle2" align="right" sx={{ mt: 2 }}>
                  — {t.author}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: "#e3f2fd", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            About Us <Typography variant="subtitle1" component="span">Our Team</Typography>
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Allison */}
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2 }}>
                <CardMedia
                  component="img"
                  image="/images/allison.jpg"
                  alt="Allison Keating"
                  sx={{ width: "100%", height: 260, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6">Allison Keating</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Chartered Psychologist PSI
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Registered Psychologist, Columnist, Media Contributor. Allison is a well known and respected Registered Psychologist in Ireland. The bWell Clinic opened in September 2004. In conjunction with her busy practice she has been a regular Psychological Media contributor which has lead to being published in some of Ireland's most popular publications and also given rise to a high profile media career.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Marie */}
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2 }}>
                <CardMedia
                  component="img"
                  image="/images/Marie.png"
                  alt="Marie Power"
                  sx={{ width: "100%", height: 260, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6">Marie Power</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Registered Psychologist
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Marie holds a Masters in Work and Organisational Psychology from UCD, as well as a BA in Psychology, BA in Counselling and Psychotherapy, and a Professional Certificate in CBT. She is also a Life and Business Coach and follows the PSI's Professional Code of Ethics.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Geraldine */}
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2 }}>
                <CardMedia
                  component="img"
                  image="/images/Geraldine+Griffin3.png"
                  alt="Geraldine Griffin"
                  sx={{ width: "100%", height: 260, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6">Geraldine Griffin</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Accredited and Registered Psychotherapist
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Geraldine has over sixteen years experience working as an adult psychotherapist as well as twenty years experience of working therapeutically with children. Her therapeutic approach is under-pinned by mindfulness principles.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "#444", color: "white", py: 4, mt: 8 }}>
        <Container maxWidth="lg">
          <Typography align="center" variant="body2">
            Copyright &copy; 2025 bWell Clinic.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
// ... existing code ...