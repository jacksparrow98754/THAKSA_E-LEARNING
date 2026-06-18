import { Box, Container, Grid, Link as MuiLink, Stack, Typography, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "/new-logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Workshops", to: "/workshops" },
  { label: "Training", to: "/training" },
  { label: "Contact", to: "/contact" },
];

const programs = [
  { label: "Courses", to: "/courses" },
  { label: "Batches", to: "/batches" },
  { label: "Projects", to: "/final-year-projects" },
  { label: "Placements", to: "/placements" },
];

function FooterLink({ label, to }) {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      underline="none"
      sx={{
        color: "#64748b",
        fontSize: "0.95rem",
        fontWeight: 500,
        transition: "all 0.2s ease",
        display: "inline-block",
        "&:hover": {
          color: "#0f172a",
          transform: "translateX(4px)"
        },
      }}
    >
      {label}
    </MuiLink>
  );
}

function ContactItem({ icon, text, href }) {
  const content = (
    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: "#64748b" }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(15,23,42,0.03)',
        p: 1,
        borderRadius: 2
      }}>
        {icon}
      </Box>
      <Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>{text}</Typography>
    </Stack>
  );

  return href ? (
    <MuiLink href={href} underline="none" sx={{
      transition: "color 0.2s ease",
      "&:hover": { color: "#0f172a", "& .MuiBox-root": { bgcolor: "rgba(15,23,42,0.06)" } }
    }}>
      {content}
    </MuiLink>
  ) : content;
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        position: "relative",
        borderTop: "1px solid rgba(15, 23, 42, 0.06)",
        bgcolor: "#f8fafc",
        overflow: "hidden"
      }}
    >
      {/* Subtle background glow effect */}
      <Box sx={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "800px",
        height: "400px",
        background: "radial-gradient(ellipse at top, rgba(15, 23, 42, 0.03), transparent 70%)",
        pointerEvents: "none",
      }} />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  textDecoration: "none",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="ThaksaAi Logo"
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "12px",
                    objectFit: "cover",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.35rem",
                    letterSpacing: "-0.03em",
                    fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                    color: "#0f172a",
                  }}
                >
                  ThaksaAi
                </Typography>
              </Box>
              <Typography sx={{ color: "#475569", lineHeight: 1.7, fontSize: "1rem", maxWidth: 320 }}>
                A premium, mentor-led AI ecosystem designed to accelerate your career and help you build industry-relevant skills with confidence.
              </Typography>

              <Stack direction="row" spacing={1.5}>
                {[LinkedInIcon, TwitterIcon, InstagramIcon].map((Icon, idx) => (
                  <IconButton
                    key={idx}
                    sx={{
                      bgcolor: "white",
                      border: "1px solid rgba(15,23,42,0.08)",
                      color: "#475569",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: "#0f172a",
                        color: "white",
                        borderColor: "#0f172a",
                        transform: "translateY(-2px)"
                      }
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2.5 }}>
            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
              <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: "1.05rem" }}>Platform</Typography>
              <Stack spacing={1.5}>
                {quickLinks.map((link) => (
                  <FooterLink key={link.to} {...link} />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2.5 }}>
            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
              <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: "1.05rem" }}>Programs</Typography>
              <Stack spacing={1.5}>
                {programs.map((link) => (
                  <FooterLink key={link.to} {...link} />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
              <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: "1.05rem" }}>Get in Touch</Typography>
              <Stack spacing={2}>
                <ContactItem
                  icon={<EmailRoundedIcon fontSize="small" />}
                  text="thaksaai@gmail.com"
                  href="mailto:thaksaai@gmail.com"
                />
                <ContactItem
                  icon={<PhoneRoundedIcon fontSize="small" />}
                  text="+91 94948 08669"
                  href="tel:+919494808669"
                />
                <ContactItem
                  icon={<LocationOnRoundedIcon fontSize="small" />}
                  text="Hyderabad, Telangana, India"
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3,
            borderTop: "1px solid rgba(15,23,42,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography sx={{ color: "#64748b", fontSize: "0.9rem", fontWeight: 500 }}>
            © {new Date().getFullYear()} ThaksaAi. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <MuiLink href="#" underline="none" sx={{ color: "#94a3b8", fontSize: "0.85rem", "&:hover": { color: "#0f172a" } }}>
              Privacy Policy
            </MuiLink>
            <MuiLink href="#" underline="none" sx={{ color: "#94a3b8", fontSize: "0.85rem", "&:hover": { color: "#0f172a" } }}>
              Terms of Service
            </MuiLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
