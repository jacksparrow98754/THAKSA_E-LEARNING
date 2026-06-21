import { Box, Container, Typography, Stack, Grid } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";

const METRICS = [
  { value: "1000+", label: "Students Trained", icon: <PeopleAltRoundedIcon fontSize="small" /> },
  { value: "50+", label: "Career Programs", icon: <MenuBookRoundedIcon fontSize="small" /> },
  { value: "40+", label: "Workshops Conducted", icon: <EventAvailableRoundedIcon fontSize="small" /> },
  { value: "500+", label: "Mentorship Sessions", icon: <LightbulbRoundedIcon fontSize="small" /> },
];

export default function LearningHubSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#020617", // Deep Navy
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial gradient background */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          background: "radial-gradient(circle, rgba(30, 58, 138, 0.15) 0%, rgba(2, 6, 23, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Content Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#94a3b8",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                    display: "block",
                    mb: 2,
                  }}
                >
                  HYDERABAD LEARNING HUB
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "#f8fafc",
                    mb: 3,
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Building Career-Ready Talent Through Practical Learning
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#94a3b8",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  }}
                >
                  Located in Hyderabad's technology corridor, THAKSA.AI connects students with industry mentors, practical workshops, CRT programs, and career readiness pathways designed to prepare learners for modern industry expectations.
                </Typography>
              </Box>

              {/* Trust Metrics */}
              <Grid container spacing={2}>
                {METRICS.map((metric, index) => (
                  <Grid size={{ xs: 6 }} key={index}>
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: "16px",
                        bgcolor: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: "8px",
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#94a3b8",
                        }}
                      >
                        {metric.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{ color: "#f8fafc", fontWeight: 700, mb: 0.5, fontSize: "1.25rem" }}
                        >
                          {metric.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#64748b", fontWeight: 500 }}
                        >
                          {metric.label}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          {/* Right Location Card Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: "24px",
                bgcolor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle top-right glow for the card */}
              <Box
                sx={{
                  position: "absolute",
                  top: "-20%",
                  right: "-20%",
                  width: "60%",
                  height: "60%",
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <Stack spacing={4} sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f8fafc",
                  }}
                >
                  <LocationOnRoundedIcon />
                </Box>

                <Box>
                  <Typography variant="h5" sx={{ color: "#f8fafc", fontWeight: 600, mb: 1 }}>
                    Hyderabad, Telangana
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#94a3b8" }}>
                    Gachibowli Technology District
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#94a3b8" }}>
                    Near Gachibowli Flyover
                  </Typography>
                </Box>

                <Box
                  sx={{
                    pt: 3,
                    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontWeight: 500,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "#10b981", // Subtle green dot for "active" presence
                      }}
                    />
                    Professional Learning Environment
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
