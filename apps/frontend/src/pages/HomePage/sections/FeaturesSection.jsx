import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";

const features = [
  {
    title: "Industry-Led Workshops",
    description: "Learn cutting-edge skills directly from top industry professionals.",
    icon: WorkspacePremiumRoundedIcon,
    gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
  },
  {
    title: "Campus Recruitment Training",
    description: "Master the skills needed to ace placements and secure your dream job.",
    icon: SchoolRoundedIcon,
    gradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    title: "Career Readiness Programs",
    description: "End-to-end preparation for the modern, demanding tech workforce.",
    icon: BusinessCenterRoundedIcon,
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  },
  {
    title: "Mentorship & Career Guidance",
    description: "Get personalized 1-on-1 advice to navigate your professional journey.",
    icon: PsychologyRoundedIcon,
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
];

export default function FeaturesSection() {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 5, md: 7 }}>
          <Typography
            variant="h2"
            sx={{


              mb: 3,
            }}
          >
            Why Students Choose ThaksaAi
          </Typography>
          <Typography
            sx={{


              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            A premium learning experience designed for career transformation.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "24px",
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 4px 20px rgba(15, 23, 42, 0.1)",
                      background: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "24px",
                      background: feature.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                    }}
                  >
                    <Icon sx={{ color: "#fff", fontSize: 28 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{

                      color: "#1e293b",
                      mb: 1.5,
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
