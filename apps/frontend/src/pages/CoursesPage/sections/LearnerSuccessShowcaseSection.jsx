import { Box, Container, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 1500, label: "Projects Built", suffix: "+" },
  { value: 45, label: "Skills Acquired", suffix: "+" },
  { value: 2000, label: "Certifications Earned", suffix: "+" },
  { value: 92, label: "Placement Rate", suffix: "%" },
];

export default function LearnerSuccessShowcaseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020617" }} ref={ref}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "30px", md: "42px" },
            fontWeight: 800,
            color: "#FFFFFF",
            mb: { xs: 6, md: 8 },
          }}
        >
          Student Achievement Wall
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #4F46E5 0%, #06B6D4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1,
                  }}
                >
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} separator="," />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </Typography>
                <Typography sx={{ color: "#94A3B8", fontSize: { xs: "0.85rem", md: "1rem" }, fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
