import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StorytellingComponent from "./StorytellingComponent";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: { xs: 10, sm: 12, md: 15 },
        pb: { xs: 8, md: 15 },
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/VID-20260619-WA0002.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability (target ~15-20% video visibility) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 23, 42, 0.85)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Radial Gradient Overlay for focus */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.8) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>

        {/* ── Top row: text content + logo ── */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ mb: { xs: 8, md: 10 } }}>
          {/* TEXT COLUMN */}
          <Grid size={{ xs: 12, lg: 7 }} sx={{ position: "relative", zIndex: 2, textAlign: { xs: "center", lg: "left" } }}>
            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                px: 2,
                py: 0.75,
                mb: 3,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-12px)",
                transition: "all 0.5s ease",
                backdropFilter: "blur(12px)",
              }}
            >
              <AutoAwesomeRoundedIcon sx={{ fontSize: 14, color: "#a5b4fc" }} />
              <Typography sx={{ fontSize: "14px", color: "#cbd5e1", letterSpacing: "0.02em" }}>
                Trusted Learning Ecosystem
              </Typography>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                color: "#ffffff",
                mb: 3,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.1s",
                fontWeight: 800,
                fontSize: { xs: "34px", sm: "38px", md: "48px", lg: "64px" },
                lineHeight: 1.05,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              Learn Industry Skills.{" "}
              <Box component="span" sx={{ color: "#a5b4fc" }}>
                Build Real Projects.
              </Box>{" "}
              Launch Your Career.
            </Typography>

            {/* Sub-headline / Description */}
            <Typography
              sx={{
                color: "#94a3b8",
                maxWidth: "650px",
                mx: { xs: "auto", lg: 0 },
                lineHeight: 1.7,
                mb: { xs: 4, md: 6 },
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.2s",
                fontSize: { xs: "16px", lg: "18px" },
              }}
            >
              Industry-led workshops, Campus Recruitment Training (CRT), mentorship, and project-based learning designed to help students become job-ready with confidence.
            </Typography>

            {/* CTAs */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              sx={{
                mb: { xs: 6, md: 8 },
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.3s",
              }}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/workshops")}
                aria-label="Explore Workshops"
                sx={{
                  height: "52px",
                  borderRadius: "14px",
                  bgcolor: "#6366F1",
                  color: "#fff",
                  fontWeight: 600,
                  px: 4,
                  width: { xs: "100%", sm: "auto" },
                  textTransform: "none",
                  fontSize: "16px",
                  "&:hover": {
                    bgcolor: "#4f46e5",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(99, 102, 241, 0.4)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Explore Workshops
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate("/contact")}
                aria-label="Contact Us"
                sx={{
                  height: "52px",
                  borderRadius: "14px",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  fontWeight: 600,
                  px: 4,
                  width: { xs: "100%", sm: "auto" },
                  textTransform: "none",
                  fontSize: "16px",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    borderColor: "#fff",
                    background: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Contact Us
              </Button>
            </Stack>

            {/* Mobile Storytelling Placement */}
            <Box sx={{ display: { xs: 'block', lg: 'none' }, mt: 2, textAlign: 'left', width: "100%", maxWidth: "400px", mx: "auto" }}>
              <StorytellingComponent />
            </Box>
          </Grid>

          {/* VISUAL COLUMN / STORYTELLING */}
          <Grid size={{ xs: 12, lg: 5 }} sx={{ display: { xs: 'none', lg: 'block' }, position: "relative", zIndex: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', ml: { lg: 4 } }}>
              <Box sx={{ width: '100%', maxWidth: 380 }}>
                <StorytellingComponent />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
