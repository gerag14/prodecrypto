import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Image from "next/image";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Container>
      <Box
        component="footer"
        sx={{
          mt: "auto",
          color: "white",
          background: "transparent",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Grid container spacing={4} maxWidth="md">
          {/* Sección del Logo y Redes Sociales */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <Image
                src="/images/logos/btc_logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <Typography variant="h6" sx={{ ml: 2 }}>
                CryptoProde
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <IconButton
                aria-label="Facebook"
                href="https://www.facebook.com"
                target="_blank"
                sx={{ color: "white" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href="https://www.instagram.com"
                target="_blank"
                sx={{ color: "white" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href="https://www.twitter.com"
                target="_blank"
                sx={{ color: "white" }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>

          {/* Sección de Contacto */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Contacto</Typography>
            <Typography variant="body2">
              <Link href="mailto:contacto@tusitio.com" color="inherit">
                contacto@cryptoprode.com
              </Link>
            </Typography>
          </Grid>

          {/* Sección de Reglas */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Reglas</Typography>
            <Typography variant="body2">
              <Link href="/terminos" color="inherit">
                Términos y Condiciones
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/privacidad" color="inherit">
                Política de Privacidad
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          py: 4,
          pt: 0,
          mt: "auto",
          color: "white",
          background: "transparent",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Grid item xs={12} md={12}>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mt: 4, textAlign: "center", color: "white" }}
          >
            {"© "}
            {new Date().getFullYear()}
            {" Tu Sitio. Todos los derechos reservados."}
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
