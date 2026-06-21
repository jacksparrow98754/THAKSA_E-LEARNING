import { Box, Container, Typography, Stack, IconButton, Link as MuiLink } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
];

const programs = [
  { label: "CRT Training", to: "/crt" },
  { label: "Workshops", to: "/workshops" },
];

function FooterLink({ label, to }) {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      underline="none"
      sx={{
        color: "#94A3B8",
        fontSize: "14px",
        fontWeight: 500,
        transition: "all 0.2s ease",
        display: "inline-block",
        "&:hover": {
          color: "#F8FAFC",
          transform: "translateX(2px)"
        },
      }}
    >
      {label}
    </MuiLink>
  );
}

function ContactRow({ icon, primary, secondary, href }) {
  const content = (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Box sx={{
        color: "#94A3B8",
        mt: 0.5
      }}>
        {icon}
      </Box>
      <Box>
        <Typography sx={{
          color: "#F8FAFC",
          fontSize: "14px",
          fontWeight: 600,
          fontFamily: "'Inter', sans-serif"
        }}>
          {primary}
        </Typography>
        {secondary && (
          <Typography sx={{
            color: "#94A3B8",
            fontSize: "13px",
            fontFamily: "'Inter', sans-serif",
            mt: 0.25
          }}>
            {secondary}
          </Typography>
        )}
      </Box>
    </Stack>
  );

  if (href) {
    return (
      <Box
        component="a"
        href={href}
        sx={{
          textDecoration: "none",
          display: "block",
          p: 2,
          bgcolor: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: "rgba(99,102,241,0.3)",
            bgcolor: "rgba(255,255,255,0.04)",
            boxShadow: "0 4px 12px rgba(168, 85, 247, 0.08)",
            transform: "translateY(-2px)"
          }
        }}
      >
        {content}
      </Box>
    );
  }

  return (
    <Box sx={{
      p: 2,
      bgcolor: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "18px"
    }}>
      {content}
    </Box>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Dark-to-Light Gradient Bridge -> Changed to Darker Gradient */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "100px", md: "120px" },
          background: "linear-gradient(180deg, #020617 0%, #0F172A 30%, #1E293B 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          bgcolor: "#1E293B",
          overflow: "hidden",
          pb: { xs: 4, md: 6 },
        }}
      >
        {/* Subtle radial gradients & light glass highlights */}
        <Box sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1000px",
          height: "500px",
          background: "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.05), transparent 70%)",
          pointerEvents: "none",
        }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: { xs: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 4, md: 3 }}>
            {/* Column 1: Brand Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3} sx={{ maxWidth: "420px" }}>
                <Box>
                  <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1.5,
                      textDecoration: "none",
                      mb: 1.5
                    }}
                  >
                    <Box
                      component="img"
                      loading="lazy"
                      src="/new-logo.png"
                      alt="THAKSA.AI Logo"
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "10px",
                        objectFit: "cover",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      }}
                    />
                    <Stack spacing={0.25}>
                      <Typography sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 800,
                        color: "#F8FAFC",
                        lineHeight: 1,
                        fontSize: { xs: "22px", md: "26px" }
                      }}>
                        THAKSA.AI
                      </Typography>
                      <Typography sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#94A3B8",
                        lineHeight: 1
                      }}>
                        Career Planet
                      </Typography>
                    </Stack>
                  </Box>

                  <Typography sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#94A3B8",
                  }}>
                    Industry-led workshops, CRT programs, and career readiness experiences for engineering students.
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2}>
                  {[
                    { Icon: LinkedInIcon, href: "#" },
                    { Icon: InstagramIcon, href: "#" },
                    { Icon: EmailRoundedIcon, href: "mailto:thaksaai@gmail.com" }
                  ].map((item, idx) => (
                    <IconButton
                      key={idx}
                      component="a"
                      href={item.href}
                      target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                      rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#94A3B8",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "#F8FAFC",
                          borderColor: "rgba(99,102,241,0.5)",
                          background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(59,130,246,0.08), rgba(16,185,129,0.04))",
                          boxShadow: "0 4px 12px rgba(168, 85, 247, 0.15)",
                          transform: "translateY(-2px)"
                        }
                      }}
                    >
                      <item.Icon fontSize="small" />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Column 2: Platform Links */}
            <Grid size={{ xs: 6, md: 2 }}>
              <Stack spacing={3}>
                <Typography sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#F8FAFC"
                }}>
                  Platform
                </Typography>
                <Stack spacing={2}>
                  {quickLinks.map((link) => (
                    <FooterLink key={link.to} {...link} />
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Column 3: Programs Links */}
            <Grid size={{ xs: 6, md: 2 }}>
              <Stack spacing={3}>
                <Typography sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#F8FAFC"
                }}>
                  Programs
                </Typography>
                <Stack spacing={2}>
                  {programs.map((link) => (
                    <FooterLink key={link.to} {...link} />
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Column 4: Contact Information */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3}>
                <Typography sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#F8FAFC"
                }}>
                  Get in Touch
                </Typography>
                <Stack spacing={2.5}>
                  <ContactRow
                    icon={<EmailRoundedIcon fontSize="small" />}
                    primary="thaksaai@gmail.com"
                    href="mailto:thaksaai@gmail.com"
                  />
                  <ContactRow
                    icon={<PhoneRoundedIcon fontSize="small" />}
                    primary="+91 94948 08669"
                    href="tel:+919494808669"
                  />
                  <ContactRow
                    icon={<LocationOnRoundedIcon fontSize="small" />}
                    primary="Gachibowli, Hyderabad"
                    secondary="Gachibowli Technology District"
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          {/* Credibility Bar */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              pt: 3,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              color: "#94A3B8",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              textAlign: "center"
            }}>
              Industry Workshops • CRT Programs • Career Readiness
            </Typography>
          </Box>

          {/* Bottom Bar */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <Stack
              direction="column"
              spacing={0.5}
              alignItems="center"
            >
              <Typography sx={{ color: "#F8FAFC", fontSize: "14px", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                © 2026 THAKSA.AI
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "14px", fontWeight: 400, fontFamily: "'Inter', sans-serif" }}>
                Built for Career Transformation
              </Typography>
            </Stack>

            <Stack direction="row" spacing={3} alignItems="center" mt={1}>
              <MuiLink href="#" underline="none" sx={{
                color: "#94A3B8",
                fontSize: "13px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s ease",
                "&:hover": { color: "#F8FAFC" }
              }}>
                Privacy Policy
              </MuiLink>
              <MuiLink href="#" underline="none" sx={{
                color: "#94A3B8",
                fontSize: "13px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s ease",
                "&:hover": { color: "#F8FAFC" }
              }}>
                Terms of Service
              </MuiLink>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
