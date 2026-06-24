import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: 16, md: 24 },
        pb: { xs: 10, md: 16 },
        overflow: "hidden",
        bgcolor: "#020617",
      }}
    >
      {/* Background gradients */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60%",
          height: "80%",
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(2, 6, 23, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "60%",
          height: "80%",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(2, 6, 23, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Stack spacing={4} sx={{ textAlign: { xs: "center", lg: "left" } }}>
              <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    borderRadius: "100px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <AutoAwesomeRoundedIcon sx={{ fontSize: 18, color: "#8B5CF6" }} />
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#F8FAFC",
                      letterSpacing: "0.02em",
                    }}
                  >
                    🚀 Industry-Aligned Learning Programs
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "clamp(2.5rem, 5vw, 3rem)", md: "clamp(3.5rem, 5vw, 4rem)" },
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Build Skills That <br />
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Actually Matter.
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.125rem", md: "1.25rem" },
                  color: "#94A3B8",
                  lineHeight: 1.6,
                  maxWidth: "600px",
                  mx: { xs: "auto", lg: 0 },
                }}
              >
                Industry-focused programs designed to help engineering students develop practical skills, gain confidence, and become career-ready.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent={{ xs: "center", lg: "flex-start" }}
              >
                <Button
                  component={RouterLink}
                  to="#programs"
                  variant="contained"
                  sx={{
                    bgcolor: "#4F46E5",
                    color: "#FFFFFF",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: "14px",
                    textTransform: "none",
                    boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)",
                    "&:hover": {
                      bgcolor: "#4338CA",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 25px rgba(79, 70, 229, 0.6)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  Browse Programs
                </Button>
                <Button
                  component={RouterLink}
                  to="#batches"
                  variant="outlined"
                  sx={{
                    color: "#FFFFFF",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: "14px",
                    textTransform: "none",
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      borderColor: "rgba(255, 255, 255, 0.4)",
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                  startIcon={<PlayCircleFilledRoundedIcon />}
                >
                  View Upcoming Batches
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", sm: "400px", lg: "500px" },
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)",
                },
              }}
            >
              {/* Premium Dashboard Mockup Placeholder */}
              <Box sx={{ p: 4, width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography sx={{ color: "#F8FAFC", fontWeight: 600, fontSize: "1.1rem" }}>
                    Learning Progress
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#EF4444" }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#F59E0B" }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#10B981" }} />
                  </Box>
                </Box>

                {/* Content */}
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                  {/* Left Column */}
                  <Grid item xs={7}>
                    <Stack spacing={2} sx={{ height: "100%" }}>
                      <Box sx={{ flexGrow: 1, bgcolor: "rgba(255, 255, 255, 0.05)", borderRadius: "16px", p: 2 }}>
                        <Typography sx={{ color: "#94A3B8", fontSize: "0.8rem", mb: 1 }}>Skill Development</Typography>
                        {/* Bar chart skeleton */}
                        <Box sx={{ display: "flex", alignItems: "flex-end", height: "80%", gap: 1, pb: 1 }}>
                          {[40, 70, 45, 90, 60, 85].map((h, i) => (
                            <Box key={i} sx={{ flex: 1, height: `${h}%`, bgcolor: i === 3 ? "#4F46E5" : "rgba(79, 70, 229, 0.3)", borderRadius: "4px" }} />
                          ))}
                        </Box>
                      </Box>
                      <Box sx={{ height: "35%", bgcolor: "rgba(255, 255, 255, 0.05)", borderRadius: "16px", p: 2 }}>
                         <Typography sx={{ color: "#94A3B8", fontSize: "0.8rem" }}>Batch Timeline</Typography>
                         <Box sx={{ mt: 1.5, height: 6, bgcolor: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                            <Box sx={{ width: "65%", height: "100%", bgcolor: "#06B6D4", borderRadius: 3 }} />
                         </Box>
                      </Box>
                    </Stack>
                  </Grid>
                  {/* Right Column */}
                  <Grid item xs={5}>
                    <Stack spacing={2} sx={{ height: "100%" }}>
                      <Box sx={{ height: "45%", bgcolor: "rgba(255, 255, 255, 0.05)", borderRadius: "16px", p: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#94A3B8", fontSize: "0.8rem", mb: 1 }}>Career Readiness</Typography>
                        <Typography sx={{ color: "#10B981", fontSize: "2rem", fontWeight: 700 }}>92<Typography component="span" sx={{ fontSize: "1rem" }}>/100</Typography></Typography>
                      </Box>
                      <Box sx={{ flexGrow: 1, bgcolor: "rgba(255, 255, 255, 0.05)", borderRadius: "16px", p: 2 }}>
                        <Typography sx={{ color: "#94A3B8", fontSize: "0.8rem", mb: 1 }}>Certification Status</Typography>
                        <Stack spacing={1}>
                          <Box sx={{ height: 24, bgcolor: "rgba(16, 185, 129, 0.2)", borderRadius: 1, display: "flex", alignItems: "center", px: 1 }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#10B981", mr: 1 }} />
                            <Box sx={{ height: 6, width: "60%", bgcolor: "rgba(255,255,255,0.5)", borderRadius: 1 }} />
                          </Box>
                           <Box sx={{ height: 24, bgcolor: "rgba(245, 158, 11, 0.2)", borderRadius: 1, display: "flex", alignItems: "center", px: 1 }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#F59E0B", mr: 1 }} />
                            <Box sx={{ height: 6, width: "40%", bgcolor: "rgba(255,255,255,0.5)", borderRadius: 1 }} />
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
