import { Box, Card, Stack, Typography, Grid } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { useEffect, useState } from "react";

const journeySteps = [
  { label: "Learn Skills", icon: SchoolRoundedIcon },
  { label: "Build Projects", icon: TerminalRoundedIcon },
  { label: "Receive Mentorship", icon: GroupsRoundedIcon },
  { label: "Interview Prep", icon: AssignmentTurnedInRoundedIcon },
  { label: "Placement Support", icon: BusinessCenterRoundedIcon },
  { label: "Career Success", icon: TrendingUpRoundedIcon },
];

const metrics = [
  { value: "1000+", label: "Students Trained" },
  { value: "40+", label: "Workshops Conducted" },
  { value: "50+", label: "CRT conducted" },
  { value: "500+", label: "Online Mentorship Sessions" },
];

export default function StorytellingComponent() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 2000);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, []);

  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        borderRadius: 4,
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 24px 48px rgba(15, 23, 42, 0.08)",
        overflow: "hidden",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease 0.3s",
      }}
    >
      {/* Decorative Gradient Background */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
          filter: "blur(80px)",
          opacity: 0.15,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ p: { xs: 3, sm: 4 }, position: "relative", zIndex: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
          <AutoAwesomeRoundedIcon sx={{ color: "#a855f7", fontSize: 20 }} />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#a855f7",
            }}
          >
            Your Transformation Journey
          </Typography>
        </Stack>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            fontWeight: 800,
            color: "#0f172a",
            mb: 4,
            lineHeight: 1.3,
          }}
        >
          From aspiring learner to industry professional.
        </Typography>

        {/* Journey Timeline */}
        <Box sx={{ position: "relative", mb: 5 }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 20,
              width: 2,
              background: "rgba(99, 102, 241, 0.15)",
              zIndex: 0,
            }}
          />
          <Stack spacing={3}>
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isPast = index <= activeStep;
              return (
                <Stack direction="row" alignItems="center" spacing={3} key={index} sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isPast
                        ? "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
                        : "#f1f5f9",
                      boxShadow: isActive ? "0 0 15px rgba(168, 85, 247, 0.4)" : "none",
                      color: isPast ? "#fff" : "#94a3b8",
                      transition: "all 0.5s ease",
                      border: isPast ? "none" : "1px solid #cbd5e1",
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: isPast ? 700 : 500,
                      color: isPast ? "#0f172a" : "#64748b",
                      fontSize: "1rem",
                      transition: "all 0.5s ease",
                      transform: isActive ? "translateX(4px)" : "translateX(0)",
                    }}
                  >
                    {step.label}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Box>

        {/* Impact Metrics */}
        <Box sx={{ pt: 3, borderTop: "1px dashed rgba(15, 23, 42, 0.1)" }}>
          <Grid container spacing={2}>
            {metrics.map((metric, index) => (
              <Grid item xs={6} key={index}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.25rem",
                      color: "#6366f1",
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {metric.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}
