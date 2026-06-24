import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

const skills = [
  { icon: "💻", title: "Technical Skills", desc: "Core programming & architecture." },
  { icon: "🗣️", title: "Communication", desc: "Articulate ideas clearly." },
  { icon: "🧩", title: "Problem Solving", desc: "Analytical and logical thinking." },
  { icon: "🛠️", title: "Industry Tools", desc: "Git, Jira, Docker, AWS." },
  { icon: "🤖", title: "AI Productivity", desc: "Leverage AI for efficiency." },
  { icon: "🤝", title: "Team Collaboration", desc: "Agile methodologies." },
  { icon: "🚀", title: "Project Execution", desc: "End-to-end delivery." },
  { icon: "🎯", title: "Interview Readiness", desc: "Mock interviews & DSA." },
];

export default function SkillsOutcomeMatrixSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020617" }}>
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
          Skills You'll Develop
        </Typography>

        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Box sx={{ fontSize: "2.5rem", mb: 2 }}>{skill.icon}</Box>
                  <Typography sx={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", mb: 1 }}>
                    {skill.title}
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.85rem" }}>
                    {skill.desc}
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
