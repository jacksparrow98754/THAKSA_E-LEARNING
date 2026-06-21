import { Box, Container, Grid, Link as MuiLink, Stack, Typography, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Workshops", to: "/workshops" },
  { label: "CRT Training", to: "/training" },
  { label: "Contact", to: "/contact" },
];

const programs = [
  { label: "Courses", to: "/courses" },
  { label: "Batches", to: "/batches" },
];

function FooterLink({ label, to }) {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      underline="none"
      sx={{
        color: "#475569",
        fontSize: "16px",
        fontWeight: 500,
        transition: "all 0.3s ease",
        display: "inline-block",
        "&:hover": {
          color: "#A855F7",
          transform: "translateX(4px)"
        },
      }}
    >
      {label}
    </MuiLink>
  );
}

function ContactRow({ icon, primary, secondary, href }) {
  const content = (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.5,
        transition: "all 0.2s ease",
        "&:hover": {
          transform: href ? "translateX(4px)" : "none",
        }
      }}
    >
      <Box sx={{ color: "#64748B", mt: "2px" }}>
        {icon}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "#475569", transition: "color 0.2s ease" }}>
          {primary}
        </Typography>
        {secondary && (
          <Typography sx={{ fontSize: "13px", color: "#94A3B8", mt: 0.5 }}>
            {secondary}
          </Typography>
        )}
      </Box>
    </Box>
  );

  return href ? (
    <MuiLink href={href} underline="none" sx={{ display: "block", "&:hover .MuiTypography-root": { color: "#0F172A" } }}>
      {content}
    </MuiLink>
  ) : (
    content
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Dark-to-Light Gradient Bridge */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "100px", md: "120px" },
          background: "linear-gradient(180deg, #020617 0%, #475569 50%, #F8FAFC 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          bgcolor: "#F8FAFC",
          overflow: "hidden",
          pb: { xs: 2, md: 4 },
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
          background: "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.6), transparent 70%)",
          pointerEvents: "none",
        }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: { xs: 2, md: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 4 }}>
            {/* Column 1: Brand Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={4} sx={{ maxWidth: "420px" }}>
                <Box>
                  <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 2,
                      textDecoration: "none",
                      mb: 2
                    }}
                  >
                    <Box
                      component="img"
                      loading="lazy"
                      src="/new-logo.png"
                      alt="THAKSA.AI Logo"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "14px",
                        objectFit: "cover",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                      }}
                    />
                    <Stack spacing={0.5}>
                      <Typography sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 800,
                        color: "#0F172A",
                        lineHeight: 1,
                        fontSize: { xs: "28px", md: "34px" }
                      }}>
                        THAKSA.AI
                      </Typography>
                      <Typography sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#64748B",
                        lineHeight: 1
                      }}>
                        Career Planet
                      </Typography>
                    </Stack>
                  </Box>

                  <Typography sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#64748B",
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
                        width: 44,
                        height: 44,
                        bgcolor: "white",
                        border: "1px solid #E2E8F0",
                        color: "#475569",
                        boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "white",
                          color: "#A855F7",
                          borderColor: "rgba(99,102,241,0.3)",
                          background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(59,130,246,0.06), rgba(16,185,129,0.04))",
                          boxShadow: "0 4px 12px rgba(168, 85, 247, 0.15)",
                          transform: "translateY(-3px)"
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
                  color: "#0F172A"
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
                  color: "#0F172A"
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
                  color: "#0F172A"
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
              pt: 4,
              borderTop: "1px solid rgba(15,23,42,0.08)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#94A3B8",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
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
              gap: 2,
            }}
          >
            <Stack
              direction="column"
              spacing={0.5}
              alignItems="center"
            >
              <Typography sx={{ color: "#0F172A", fontSize: "14px", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                © 2026 THAKSA.AI
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "14px", fontWeight: 400, fontFamily: "'Inter', sans-serif" }}>
                Built for Career Transformation
              </Typography>
            </Stack>

            <Stack direction="row" spacing={3} alignItems="center">
              <MuiLink href="#" underline="none" sx={{
                color: "#94A3B8",
                fontSize: "13px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s ease",
                "&:hover": { color: "#0F172A" }
              }}>
                Privacy Policy
              </MuiLink>
              <MuiLink href="#" underline="none" sx={{
                color: "#94A3B8",
                fontSize: "13px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s ease",
                "&:hover": { color: "#0F172A" }
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
