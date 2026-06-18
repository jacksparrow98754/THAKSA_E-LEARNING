import { Box, Card, Chip, Container, Grid, Stack, Typography, useMediaQuery, useTheme, Button } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 7, sm: 9, md: 14 },
        pb: { xs: 6, sm: 8, md: 12 },
        borderBottom: "1px solid rgba(15,23,42,0.08)",
      }}
    >
      {/* Background radial glows */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 10% 15%, rgba(99,102,241,0.18) 0%, transparent 45%), radial-gradient(circle at 90% 80%, rgba(15,118,110,0.16) 0%, transparent 45%), radial-gradient(circle at 55% 50%, rgba(217,119,6,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* ── Top row: text content + logo ── */}
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" sx={{ mb: { xs: 8, md: 10 } }}>
          {/* TEXT COLUMN */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ position: "relative", zIndex: 2 }}>
            {/* Mobile logo & text intro */}
            {isMobile && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 4,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "scale(1)" : "scale(0.85)",
                  transition: "all 0.6s ease",
                }}
              >
                <Box
                  component="img"
                  src="/logo.png"
                  alt="Thaksa Ai Career Planet Logo"
                  sx={{
                    width: 140,
                    height: 140,
                    objectFit: "contain",
                    borderRadius: 5,
                    boxShadow: "0 12px 40px rgba(99,102,241,0.18), 0 4px 16px rgba(15,23,42,0.08)",
                    border: "2px solid rgba(99,102,241,0.15)",
                    background: "#fff",
                  }}
                />
              </Box>
            )}

            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.25)",
                borderRadius: 12,
                px: 2.5,
                py: 1,
                mb: 3,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-12px)",
                transition: "all 0.5s ease",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 12px rgba(99,102,241,0.1)",
              }}
            >
              <AutoAwesomeRoundedIcon sx={{ fontSize: 20, color: "#6366f1" }} />
              <Typography sx={{ fontWeight: 700, fontSize: "0.85rem", color: "#6366f1", letterSpacing: "0.02em" }}>
                ThaksaAi — The Premier AI Career Ecosystem
              </Typography>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.25rem", sm: "3.5rem", md: "4.5rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                color: "#0f172a",
                fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                mb: 2,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.1s",
              }}
            >
              Accelerate Your <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
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
                Career Growth
              </Box>
            </Typography>

            {/* Sub-headline / Description */}
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#475569",
                maxWidth: 600,
                lineHeight: 1.7,
                mb: 4,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.2s",
                fontWeight: 500,
              }}
            >
              Join the elite ecosystem designed for future leaders. We bridge academia and industry with immersive AI-driven training, expert mentorship, and premium placement support.
            </Typography>

            {/* CTAs */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                mb: 5,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.3s",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#0f172a",
                  color: "#fff",
                  px: 4,
                  py: 1.8,
                  borderRadius: 3,
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "0 8px 20px rgba(15,23,42,0.25)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#1e293b",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 28px rgba(15,23,42,0.35)",
                  },
                }}
              >
                Explore Programs
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(15,23,42,0.2)",
                  color: "#0f172a",
                  px: 4,
                  py: 1.8,
                  borderRadius: 3,
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  bgcolor: "rgba(255,255,255,0.5)",
                  backdropFilter: "blur(4px)",
                  "&:hover": {
                    borderColor: "#0f172a",
                    bgcolor: "rgba(15,23,42,0.04)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Book Free Consultation
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
              <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", mb: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Core Pillars
              </Typography>
              <Grid container spacing={2}>
                {[
                  { text: "AI-Powered Learning", icon: <AutoAwesomeRoundedIcon sx={{ fontSize: 18 }} /> },
                  { text: "Industry Mentorship", icon: <GroupsRoundedIcon sx={{ fontSize: 18 }} /> },
                  { text: "Career Guidance", icon: <HandshakeRoundedIcon sx={{ fontSize: 18 }} /> },
                  { text: "Placement Support", icon: <BusinessCenterRoundedIcon sx={{ fontSize: 18 }} /> }
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "#334155" }}>
                      <Box sx={{ display: "flex", color: "#6366f1" }}>{item.icon}</Box>
                      <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.2 }}>{item.text}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* VISUAL / VIDEO COLUMN */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 500,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "scale(1) translateY(0)" : "scale(0.95) translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.2s",
                perspective: "1000px",
              }}
            >
              {/* Decorative glow behind video */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -30,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 40%, transparent 70%)",
                  filter: "blur(30px)",
                  pointerEvents: "none",
                  zIndex: 0,
                  animation: "pulse 4s infinite alternate",
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)", opacity: 0.8 },
                    "100%": { transform: "scale(1.05)", opacity: 1 },
                  }
                }}
              />

              {/* Video Container */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: 6,
                  overflow: "hidden",
                  boxShadow: "0 24px 64px rgba(15,23,42,0.15), 0 0 0 1px rgba(255,255,255,0.5) inset",
                  bgcolor: "#0f172a",
                  aspectRatio: "4/5",
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-5deg) rotateX(2deg)",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "rotateY(0deg) rotateX(0deg)",
                  }
                }}
              >
                {/* Fallback pattern if video is missing */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    zIndex: 0,
                  }}
                />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "relative",
                    zIndex: 1,
                    opacity: 0.85,
                  }}
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-on-her-laptop-in-a-creative-office-40019-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Floating overlay gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 40%)",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                />
              </Box>

              {/* Floating Social Proof Card */}
              <Card
                sx={{
                  position: "absolute",
                  bottom: -20,
                  left: -30,
                  zIndex: 3,
                  p: 2,
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 12px 32px rgba(15,23,42,0.15)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  display: { xs: "none", sm: "block" },
                  animation: "float 6s infinite ease-in-out",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                  }
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircleRoundedIcon sx={{ color: "#6366f1", fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: "1.2rem", color: "#0f172a", lineHeight: 1 }}>10K+</Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Students Trained</Typography>
                  </Box>
                </Stack>
              </Card>

              {/* Floating Metrics */}
              <Box
                sx={{
                  position: "absolute",
                  top: 40,
                  right: -20,
                  zIndex: 3,
                  display: { xs: "none", sm: "flex" },
                  flexDirection: "column",
                  gap: 1.5,
                  animation: "float-delayed 7s infinite ease-in-out",
                  "@keyframes float-delayed": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-12px)" },
                  }
                }}
              >
                <Chip
                  icon={<WorkspacePremiumRoundedIcon sx={{ color: "#d97706 !important" }} />}
                  label="500+ Workshops"
                  sx={{ bgcolor: "#fff", boxShadow: "0 8px 24px rgba(15,23,42,0.1)", fontWeight: 700, borderRadius: 2 }}
                />
                <Chip
                  icon={<RocketLaunchRoundedIcon sx={{ color: "#ec4899 !important" }} />}
                  label="1000+ Projects"
                  sx={{ bgcolor: "#fff", boxShadow: "0 8px 24px rgba(15,23,42,0.1)", fontWeight: 700, borderRadius: 2 }}
                />
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
