import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

const programs = [
  { icon: "☁️", title: "AWS Cloud", desc: "Master cloud architecture", duration: "12 Weeks", level: "Beginner to Pro", relevance: "High" },
  { icon: "⚙️", title: "DevOps", desc: "Automate and deploy", duration: "10 Weeks", level: "Intermediate", relevance: "Very High" },
  { icon: "🤖", title: "Artificial Intelligence", desc: "Build AI models", duration: "16 Weeks", level: "Advanced", relevance: "Very High" },
  { icon: "📊", title: "Machine Learning", desc: "Data to insights", duration: "14 Weeks", level: "Intermediate", relevance: "High" },
  { icon: "🧠", title: "Prompt Engineering", desc: "Master LLMs", duration: "4 Weeks", level: "All Levels", relevance: "High" },
  { icon: "💻", title: "Full Stack Development", desc: "End-to-end web apps", duration: "24 Weeks", level: "Beginner to Pro", relevance: "Very High" },
  { icon: "📱", title: "Frontend Development", desc: "Modern UIs with React", duration: "12 Weeks", level: "Beginner", relevance: "High" },
  { icon: "🔒", title: "Cyber Security", desc: "Protect digital assets", duration: "16 Weeks", level: "Intermediate", relevance: "High" },
  { icon: "📡", title: "IoT & Embedded Systems", desc: "Connected devices", duration: "14 Weeks", level: "Intermediate", relevance: "Medium" },
  { icon: "⚡", title: "VLSI & Electronics", desc: "Chip design basics", duration: "12 Weeks", level: "Advanced", relevance: "Medium" },
];

export default function ProgramCategoriesSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020B2D" }} id="programs">
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
          Choose Your Learning Path
        </Typography>

        <Grid container spacing={3}>
          {programs.map((prog, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: "flex" }}>
              <Card
                sx={{
                  width: "100%",
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-5px) scale(1.02)",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(79, 70, 229, 0.5)",
                    boxShadow: "0 10px 30px -10px rgba(79, 70, 229, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ fontSize: "2.5rem", mb: 2 }}>{prog.icon}</Box>
                  <Typography variant="h6" sx={{ color: "#F8FAFC", fontWeight: 700, mb: 1, fontSize: "20px" }}>
                    {prog.title}
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem", mb: 2, flexGrow: 1 }}>
                    {prog.desc}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
                    <Box sx={{ bgcolor: "rgba(255,255,255,0.05)", px: 1.5, py: 0.5, borderRadius: "6px", fontSize: "0.75rem", color: "#CBD5E1" }}>
                      {prog.duration}
                    </Box>
                    <Box sx={{ bgcolor: "rgba(255,255,255,0.05)", px: 1.5, py: 0.5, borderRadius: "6px", fontSize: "0.75rem", color: "#CBD5E1" }}>
                      {prog.level}
                    </Box>
                    <Box sx={{ bgcolor: "rgba(79, 70, 229, 0.1)", px: 1.5, py: 0.5, borderRadius: "6px", fontSize: "0.75rem", color: "#818CF8" }}>
                      Relevance: {prog.relevance}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
