import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import PropTypes from "prop-types";

const PotCard = ({ amount_btc, amount_uxd, buttonApostar }) => {
  return (
    <Link href="/apuestas" passHref justifyContent="center">
      <Card
        sx={{
          backgroundImage: "linear-gradient(135deg, #8d5531 30%, #e29d3c 90%)",
          background:
            "radial-gradient(ellipse at center, #e29d3c, rgba(45, 23, 252, 0))",
          boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.3)",
          borderRadius: 6,
          maxWidth: 600,
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              variant="h3"
              component="div"
              className="pozo-text"
              sx={{
                animation: "blink 1.5s infinite",
                "@keyframes blink": {
                  "0%": { opacity: 1 },
                  "50%": { opacity: 0 },
                  "100%": { opacity: 1 },
                },
                mr: 1,
              }}
            >
              ¡¡¡
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{ textAlign: "center" }}
              className="pozo-text"
            >
              Pozo Acumulado
            </Typography>
            <Typography
              variant="h3"
              component="div"
              className="pozo-text"
              sx={{
                animation: "blink 1.5s infinite",
                "@keyframes blink": {
                  "0%": { opacity: 1 },
                  "50%": { opacity: 0 },
                  "100%": { opacity: 1 },
                },
                ml: 1,
              }}
            >
              !!!
            </Typography>
          </Box>
          <Box display="inline-flex" alignItems="center">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/images/logos/btc_prode_image_bg.png"
              alt="Next.js Logo"
              width={200}
              height={37}
              style={{
                borderRadius: "50%",
                maskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              }}
            />
            <Box align="right">
              <Typography variant="h3" component="div" className="btc-text">
                ${amount_btc} BTC
              </Typography>
              <Typography variant="h3" component="div" className="uxd-text">
                ${amount_uxd} UXD
              </Typography>
            </Box>
          </Box>
          {buttonApostar ? (
            <Box align="center">
              <Button className="bt-juga">
                <Typography
                  variant="h5"
                  sx={{
                    animation: "blink 1.5s infinite",
                    "@keyframes blink": {
                      "0%": { opacity: 1 },
                      "50%": { opacity: 0 },
                      "100%": { opacity: 1 },
                    },
                  }}
                >
                  ¡¡ JUGA AHORA !!
                </Typography>
              </Button>
            </Box>
          ) : null}
        </CardContent>
      </Card>
    </Link>
  );
};

PotCard.propTypes = {
  amount_btc: PropTypes.string.isRequired,
  amount_uxd: PropTypes.string.isRequired,
  buttonApostar: PropTypes.bool,
};

PotCard.defaultProps = {
  buttonApostar: true,
};

export default PotCard;
