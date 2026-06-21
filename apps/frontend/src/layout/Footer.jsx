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

function ContactCard({ icon, primary, secondary, tertiary, href }) {
  const content = (
    <Box
      sx={{
        background: "white",
        border: "1px solid #E2E8F0",
        borderRadius: "18px",
        p: 2,
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0px 10px 25px rgba(15, 23, 42, 0.05)",
          transform: "translateY(-2px)",
          borderColor: "#cbd5e1",
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: "12px",
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
          color: "#6366F1",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography sx={{ fontSize: "15px", fontWeight: 600, color: "#0F172A", lineHeight: 1.2 }}>
          {primary}
        </Typography>
        {secondary && (
          <Typography sx={{ fontSize: "14px", color: "#64748B", lineHeight: 1.4 }}>
            {secondary}
          </Typography>
        )}
        {tertiary && (
          <Typography sx={{ fontSize: "14px", color: "#64748B", lineHeight: 1.4 }}>
            {tertiary}
          </Typography>
        )}
      </Box>
    </Box>
  );

  return href ? (
    <MuiLink href={href} underline="none" sx={{ display: "block" }}>
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
          height: { xs: "120px", md: "160px" }, mt: 0,
          background: "linear-gradient(180deg, #020617 0%, #0F172A 30%, #F8FAFC 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          bgcolor: "#F8FAFC",
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
          background: "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.6), transparent 70%)",
          pointerEvents: "none",
        }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: { xs: 2, md: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 4 }}>
            {/* Column 1: Brand Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={4}>
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

                  {/* Micro Brand Positioning */}
                  <Box sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 12px",
                    background: "rgba(99, 102, 241, 0.04)",
                    border: "1px solid rgba(99, 102, 241, 0.15)",
                    borderRadius: "20px",
                    mb: 3
                  }}>
                    <Typography sx={{ fontSize: "13px", fontWeight: 500, color: "#475569" }}>
                      Powered by Industry Mentorship & Practical Learning
                    </Typography>
                  </Box>

                  <Typography sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#64748B",
                    maxWidth: "320px"
                  }}>
                    Empowering students through Campus Recruitment Training, industry workshops, career development programs, and placement readiness initiatives.
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2}>
                  {[
                    { Icon: LinkedInIcon, href: "#" },
                    { Icon: TwitterIcon, href: "#" },
                    { Icon: InstagramIcon, href: "#" }
                  ].map((item, idx) => (
                    <IconButton
                      key={idx}
                      component="a"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
                          borderColor: "#A855F7",
                          boxShadow: "0 0 12px rgba(168, 85, 247, 0.2)",
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
                <Stack spacing={2}>
                  <ContactCard
                    icon={<EmailRoundedIcon />}
                    primary="thaksaai@gmail.com"
                    href="mailto:thaksaai@gmail.com"
                  />
                  <ContactCard
                    icon={<PhoneRoundedIcon />}
                    primary="+91 94948 08669"
                    href="tel:+919494808669"
                  />
                  <ContactCard
                    icon={<LocationOnRoundedIcon />}
                    primary="Hyderabad, Telangana"
                    secondary="Gachibowli Technology District"
                    tertiary="Near Gachibowli Flyover"
                    href="https://maps.google.com/?q=Gachibowli+Flyover,+Hyderabad"
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              mt: { xs: 8, md: 10 },
              pt: 4,
              borderTop: "1px solid rgba(15,23,42,0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 0 },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
              alignItems="center"
            >
              <Typography sx={{ color: "#64748B", fontSize: "14px", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                © 2026 THAKSA.AI
              </Typography>
              <Box sx={{ display: { xs: "none", md: "block" }, width: "4px", height: "4px", borderRadius: "50%", bgcolor: "#CBD5E1" }} />
              <Typography sx={{ color: "#64748B", fontSize: "14px", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                Built for Career Transformation
              </Typography>
            </Stack>

            <Stack direction="row" spacing={4} alignItems="center">
              <MuiLink href="#" underline="none" sx={{
                color: "#64748B",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s ease",
                "&:hover": { color: "#0F172A" }
              }}>
                Privacy Policy
              </MuiLink>
              <MuiLink href="#" underline="none" sx={{
                color: "#64748B",
                fontSize: "14px",
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
