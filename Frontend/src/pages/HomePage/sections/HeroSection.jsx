import { Box, Card, Chip, Container, Grid, Stack, Typography, Button } from "@mui/material";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import StorytellingComponent from "./StorytellingComponent";

const modules = [
  {
    id: "workshops",
    icon: BuildRoundedIcon,
    title: "Workshops",
    subtitle: "Hands-On Industry Learning",
    benefits: [
      "Expert Sessions",
      "Real-world Exposure",
      "Collaborative Learning"
    ],
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
    bgGlow: "rgba(99,102,241,0.12)",
    borderColor: "rgba(99,102,241,0.25)",
    route: "/workshops",
    tag: "Offline Mode",
    tagColor: "#6366f1",
    tagBg: "rgba(99,102,241,0.1)",
  },
  {
    id: "training",
    icon: WorkspacePremiumRoundedIcon,
    title: "CRT Training",
    subtitle: "Career Launch Program",
    benefits: [
      "Aptitude & Technical Tracks",
      "Soft-skills Modules",
      "Placement Support"
    ],
    color: "#0f766e",
    gradient: "linear-gradient(135deg, #0f766e 0%, #0891b2 100%)",
    bgGlow: "rgba(15,118,110,0.12)",
    borderColor: "rgba(15,118,110,0.25)",
    route: "/training",
    tag: "Placement Assured",
    tagColor: "#0f766e",
    tagBg: "rgba(15,118,110,0.1)",
  },
  {
    id: "fyp",
    icon: RocketLaunchRoundedIcon,
    title: "Final Year Projects",
    subtitle: "Build Real-World Solutions",
    benefits: [
      "Guided Project Execution",
      "IEEE-standard Reporting",
      "Live Demos"
    ],
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706 0%, #ea580c 100%)",
    bgGlow: "rgba(217,119,6,0.12)",
    borderColor: "rgba(217,119,6,0.25)",
    route: "/final-year-projects",
    tag: "Industry Grade",
    tagColor: "#d97706",
    tagBg: "rgba(217,119,6,0.1)",
  },
];

function AnimatedCard({ module, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const Icon = module.icon;

  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      ref={ref}
      sx={{
        scrollSnapAlign: "start",
      }}
    >
      <Card
        onClick={() => navigate(module.route)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        elevation={0}
        sx={{
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          border: `1px solid rgba(255, 255, 255, 0.15)`,
          background: "linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: hovered
            ? `0 24px 48px rgba(0, 0, 0, 0.2), 0 0 0 1px ${module.color}`
            : "0 4px 16px rgba(0, 0, 0, 0.1)",
          transform: visible
            ? hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)"
            : "translateY(40px) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: `all 0.55s cubic-bezier(0.34,1.56,0.64,1) ${index * 120}ms`,
          position: "relative",
          overflow: "hidden",
          p: { xs: 3, md: 4 },
        }}
      >
        {/* Glow blob */}
        <Box
          sx={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: module.gradient,
            opacity: hovered ? 0.3 : 0.1,
            filter: "blur(40px)",
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}
        />

        {/* Header Section */}
        <Box sx={{ mb: 3 }}>
          {/* Icon */}
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 3,
              background: module.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              boxShadow: `0 8px 24px ${module.bgGlow}`,
              transform: hovered ? "scale(1.05) translateY(-4px)" : "scale(1) translateY(0)",
              transition: "transform 0.4s ease",
            }}
          >
            <Icon sx={{ color: "#fff", fontSize: 34 }} />
          </Box>

          <Chip
            label={module.tag}
            size="small"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: "0.75rem",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              border: `1px solid rgba(255, 255, 255, 0.2)`,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: "#ffffff",
              fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
              mb: 1,
              lineHeight: 1.2,
            }}
          >
            {module.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#cbd5e1",
              mb: 0,
            }}
          >
            {module.subtitle}
          </Typography>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ flexGrow: 1, mb: 4 }}>
          <Stack spacing={1.5}>
            {module.benefits.map((benefit, i) => (
              <Stack key={i} direction="row" alignItems="center" spacing={1.5}>
                <CheckCircleRoundedIcon sx={{ fontSize: 18, color: module.color, opacity: 0.9 }} />
                <Typography sx={{ color: "#e2e8f0", fontSize: "0.95rem", fontWeight: 500 }}>
                  {benefit}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* CTA */}
        <Box sx={{ mt: "auto" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              color: "#ffffff",
              opacity: hovered ? 1 : 0.8,
              transition: "opacity 0.3s ease",
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "0.95rem" }}>Learn More</Typography>
            <ArrowForwardRoundedIcon
              sx={{
                fontSize: 20,
                transform: hovered ? "translateX(6px)" : "translateX(0)",
                transition: "transform 0.3s ease",
                color: module.color
              }}
            />
          </Stack>
        </Box>
      </Card>
    </Grid>
  );
}

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
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, sm: 8, md: 12 },
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

      {/* Dark overlay for readability (target ~20% video visibility) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.82) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", pt: { xs: 12, md: 16 } }}>

        {/* ── Top row: text content + logo ── */}
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" sx={{ mb: { xs: 8, md: 10 } }}>
          {/* TEXT COLUMN */}
          <Grid size={{ xs: 12, lg: 7 }} sx={{ position: "relative", zIndex: 2, textAlign: { xs: "center", lg: "left" } }}>
            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                px: 2.5,
                py: 1,
                mb: 3,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-12px)",
                transition: "all 0.5s ease",
                backdropFilter: "blur(12px)",
              }}
            >
              <AutoAwesomeRoundedIcon sx={{ fontSize: 18, color: "#818cf8" }} />
              <Typography sx={{ fontWeight: 600, fontSize: "0.8rem", color: "#e2e8f0", letterSpacing: "0.03em" }}>
                THAKSAai Career Planet — From Campus to Career
              </Typography>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                mb: 3,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.1s",
              }}
            >
              Build Skills Companies <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #818cf8 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "8%",
                    left: 0,
                    right: 0,
                    height: "12%",
                    background: "rgba(99,102,241,0.15)",
                    borderRadius: "4px",
                    zIndex: -1,
                  }
                }}
              >
                Actually Hire For
              </Box>
            </Typography>

            {/* Sub-headline / Description */}
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem", lg: "1.25rem" },
                color: "#cbd5e1",
                maxWidth: 580, mx: { xs: "auto", lg: 0 },
                lineHeight: 1.6,
                mb: 5,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.2s",
                fontWeight: 400,
              }}
            >
              Transform your career trajectory with our industry-led Campus Recruitment Training (CRT), hands-on workshops, and premium placement support.
            </Typography>

            {/* Mobile Storytelling Placement */}
            <Box sx={{ display: { xs: 'block', lg: 'none' }, mb: 4, textAlign: 'left' }}>
              <StorytellingComponent />
            </Box>

            {/* CTAs */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              sx={{
                mb: 6,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.3s",
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/workshops")}
                aria-label="Explore Workshops"
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  bgcolor: "#ffffff",
                  color: "#0f172a",
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "0 8px 20px rgba(255,255,255,0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#f8fafc",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 28px rgba(255,255,255,0.25)",
                  },
                }}
              >
                Explore Workshops
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/contact")}
                aria-label="Contact Us"
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  borderColor: "rgba(255,255,255,0.4)",
                  color: "#ffffff",
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  bgcolor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  "&:hover": {
                    borderColor: "#ffffff",
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>

            {/* Trust Indicators */}
            <Box
              sx={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.4s",
              }}
            >
              <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#94a3b8", mb: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Core Pillars
              </Typography>
              <Grid container spacing={2} justifyContent={{ xs: "center", lg: "flex-start" }}>
                {[
                  { text: "Campus Recruitment Training", icon: <AutoAwesomeRoundedIcon sx={{ fontSize: 18 }} /> },
                  { text: "Industry Workshops", icon: <GroupsRoundedIcon sx={{ fontSize: 18 }} /> },
                  { text: "Interview Preparation", icon: <HandshakeRoundedIcon sx={{ fontSize: 18 }} /> },
                  { text: "Career Readiness", icon: <BusinessCenterRoundedIcon sx={{ fontSize: 18 }} /> }
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx} sx={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "#e2e8f0" }}>
                      <Box sx={{ display: "flex", color: "#818cf8" }}>{item.icon}</Box>
                      <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.2 }}>{item.text}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
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

        {/* Module Cards */}
        <Box
          sx={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 0.4s",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "0.78rem",
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              mb: 2.5,
            }}
          >
            ⚡ Explore Our Programmes
          </Typography>
          <Grid
            container
            spacing={3}
            wrap="wrap"
            sx={{
              pb: 1,
            }}
          >
            {modules.map((mod, i) => (
              <AnimatedCard key={mod.id} module={mod} index={i} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
