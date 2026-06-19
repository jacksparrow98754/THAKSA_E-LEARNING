import { Box, Card, Chip, Container, Grid, Stack, Typography, Button } from "@mui/material";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import StorytellingComponent from "./StorytellingComponent";

const modules = [
  {
    id: "workshops",
    icon: BuildRoundedIcon,
    title: "Workshops",
    subtitle: "Hands-On Learning",
    description:
      "Industry-led offline workshops designed to give students real-world exposure through live projects, expert sessions, and collaborative problem-solving.",
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
    title: "Training",
    subtitle: "Career Launch Program",
    description:
      "Structured training tracks with aptitude, technical, and soft-skill modules, followed by dedicated placement support with top hiring companies.",
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
    description:
      "Guided project execution with domain experts, documentation support, IEEE-standard reporting, and live demos that stand out in interviews.",
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706 0%, #ea580c 100%)",
    bgGlow: "rgba(217,119,6,0.12)",
    borderColor: "rgba(217,119,6,0.25)",
    route: "/final-year-projects",
    tag: "Industry Grade",
    tagColor: "#d97706",
    tagBg: "rgba(217,119,6,0.1)",
  },
  {
    id: "placements",
    icon: WorkspacePremiumRoundedIcon,
    title: "Placements",
    subtitle: "Career Opportunities",
    description:
      "Get dedicated placement guidance with resume support, interview preparation, and hiring connections to launch your career with confidence.",
    color: "#0b4f8c",
    gradient: "linear-gradient(135deg, #0b4f8c 0%, #2563eb 100%)",
    bgGlow: "rgba(37,99,235,0.14)",
    borderColor: "rgba(37,99,235,0.28)",
    route: "/placements",
    tag: "Hiring Support",
    tagColor: "#1d4ed8",
    tagBg: "rgba(37,99,235,0.1)",
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
      ref={ref}
      sx={{
        minWidth: { xs: "86vw", sm: "46vw", md: "32vw", lg: "24vw" },
        maxWidth: { xs: "86vw", sm: "46vw", md: "32vw", lg: "24vw" },
        scrollSnapAlign: "start",
        flexShrink: 0,
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
          borderRadius: 4,
          border: `1.5px solid ${module.borderColor}`,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: hovered
            ? `0 24px 48px ${module.bgGlow}, 0 8px 24px rgba(15,23,42,0.08)`
            : "0 4px 16px rgba(15,23,42,0.05)",
          transform: visible
            ? hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)"
            : "translateY(40px) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: `all 0.55s cubic-bezier(0.34,1.56,0.64,1) ${index * 120}ms`,
          position: "relative",
          overflow: "hidden",
          p: { xs: 2.6, sm: 3, md: 3.2 },
        }}
      >
        {/* Glow blob */}
        <Box
          sx={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: module.gradient,
            opacity: hovered ? 0.15 : 0.07,
            filter: "blur(30px)",
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}
        />

        {/* Icon */}
        <Box
          sx={{
            width: 58,
            height: 58,
            borderRadius: 3,
            background: module.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2.5,
            boxShadow: `0 8px 20px ${module.bgGlow}`,
          }}
        >
          <Icon sx={{ color: "#fff", fontSize: 30 }} />
        </Box>

        <Chip
          label={module.tag}
          size="small"
          sx={{
            mb: 1.5,
            fontWeight: 700,
            fontSize: "0.72rem",
            bgcolor: module.tagBg,
            color: module.tagColor,
            border: `1px solid ${module.borderColor}`,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            color: "#0f172a",
            fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
            mb: 0.5,
            lineHeight: 1.2,
          }}
        >
          {module.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.82rem",
            fontWeight: 700,
            color: module.color,
            mb: 1.5,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {module.subtitle}
        </Typography>
        <Typography sx={{ color: "#475569", fontSize: { xs: "0.9rem", md: "0.92rem" }, lineHeight: 1.6, mb: 2.5 }}>
          {module.description}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: module.color }}>
          <Typography sx={{ fontWeight: 700, fontSize: "0.88rem" }}>Learn More</Typography>
          <ArrowForwardRoundedIcon
            sx={{
              fontSize: 18,
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          />
        </Stack>
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
          background: "linear-gradient(180deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.78) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>

        {/* ── Top row: text content + logo ── */}
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
          {/* TEXT COLUMN */}
          <Grid size={{ xs: 12, lg: 7 }} sx={{ position: "relative", zIndex: 2, textAlign: { xs: "center", lg: "left" } }}>
            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 12,
                px: 2.5,
                py: 1,
                mb: 3,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-12px)",
                transition: "all 0.5s ease",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              <AutoAwesomeRoundedIcon sx={{ fontSize: 20, color: "#818cf8" }} />
              <Typography sx={{ fontWeight: 700, fontSize: "0.85rem", color: "#f8fafc", letterSpacing: "0.02em" }}>
                THAKSAai Career Planet — From Campus to Career
              </Typography>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3.25rem" },
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                mb: 2,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.1s",
                textShadow: "0 4px 20px rgba(0,0,0,0.4)"
              }}
            >
              Build Skills Companies <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #93c5fd 0%, #c4b5fd 50%, #f9a8d4 100%)",
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
                    background: "rgba(99,102,241,0.2)",
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
                fontSize: { xs: "1rem", md: "1.125rem" },
                color: "#f8fafc",
                maxWidth: 520, mx: { xs: "auto", lg: 0 },
                lineHeight: 1.6,
                mb: 4,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.2s",
                fontWeight: 500,
                textShadow: "0 2px 8px rgba(0,0,0,0.6)"
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
              spacing={2.5}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              sx={{
                mb: 4,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.3s",
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/workshops")}
                sx={{
                  bgcolor: "#3b82f6",
                  color: "#ffffff",
                  px: 3.5,
                  py: 1.2,
                  borderRadius: 3,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "0 8px 20px rgba(59,130,246,0.35)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#2563eb",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 28px rgba(59,130,246,0.45)",
                  },
                }}
              >
                Explore Workshops
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#ffffff",
                  px: 3.5,
                  py: 1.2,
                  borderRadius: 3,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  bgcolor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  "&:hover": {
                    borderColor: "#ffffff",
                    bgcolor: "rgba(255,255,255,0.15)",
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
            wrap="nowrap"
            sx={{
              gap: { xs: 2, md: 2.5 },
              overflowX: "auto",
              overflowY: "hidden",
              pb: 1,
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                display: { xs: "none", md: "block" },
                height: 8,
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(15,23,42,0.06)",
                borderRadius: 999,
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(99,102,241,0.45)",
                borderRadius: 999,
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "rgba(99,102,241,0.6)",
              },
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
