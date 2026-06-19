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
        borderRadius: 3,
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
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
          background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
          filter: "blur(100px)",
          opacity: 0.05,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ p: { xs: 2, sm: 2.5 }, position: "relative", zIndex: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <AutoAwesomeRoundedIcon sx={{ color: "#a5b4fc", fontSize: 14 }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "#a5b4fc",
            }}
          >
            Career Readiness Journey
          </Typography>
        </Stack>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
            fontWeight: 600,
            color: "#e2e8f0",
            mb: 2,
            lineHeight: 1.3,
          }}
        >
          From aspiring learner to industry professional.
        </Typography>

        {/* Journey Timeline */}
        <Box sx={{ position: "relative", mb: 2 }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 10,
              width: 1,
              background: "rgba(255, 255, 255, 0.08)",
              zIndex: 0,
            }}
          />
          <Stack spacing={1}>
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isPast = index <= activeStep;
              return (
                <Stack direction="row" alignItems="center" spacing={1.5} key={index} sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isPast
                        ? "rgba(255, 255, 255, 0.9)"
                        : "rgba(255,255,255,0.05)",
                      color: isPast ? "#0f172a" : "#64748b",
                      transition: "all 0.5s ease",
                      border: isPast ? "none" : "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <Icon sx={{ fontSize: 10 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: isPast ? 500 : 400,
                      color: isPast ? "#f8fafc" : "#64748b",
                      fontSize: "0.8rem",
                      transition: "all 0.5s ease",
                      transform: isActive ? "translateX(2px)" : "translateX(0)",
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
        <Box sx={{ pt: 1.5, borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <Grid container spacing={2}>
            {metrics.map((metric, index) => (
              <Grid item xs={6} key={index}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#e2e8f0",
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "0.6rem",
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
