import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

const reasons = [
  {
    title: "Industry-Oriented Learning",
    desc: "Curriculum designed by experts to match current industry demands and avoid outdated theory.",
    gradient: "linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(2, 6, 23, 0) 100%)",
  },
  {
    title: "Hands-On Practical Training",
    desc: "Focus on building real projects, solving problems, and writing code that actually works in production.",
    gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(2, 6, 23, 0) 100%)",
  },
  {
    title: "Mentorship & Career Guidance",
    desc: "Get personalized feedback, resume reviews, and mock interviews to prepare for placement drives.",
    gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(2, 6, 23, 0) 100%)",
  },
];

export default function WhyChooseSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020B2D" }}>
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
          Why Students Choose THAKSA.AI
        </Typography>

        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  background: reason.gradient,
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "24px",
                  height: "100%",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                  <Typography variant="h5" sx={{ color: "#F8FAFC", fontWeight: 700, mb: 2 }}>
                    {reason.title}
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: "1rem", lineHeight: 1.6 }}>
                    {reason.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
