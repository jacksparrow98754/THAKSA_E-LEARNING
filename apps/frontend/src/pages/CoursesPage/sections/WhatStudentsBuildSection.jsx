import { Box, Card, CardContent, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import FolderSpecialRoundedIcon from "@mui/icons-material/FolderSpecialRounded";

const projects = [
  {
    title: "AI Resume Analyzer",
    type: "Full Stack + ML",
    skills: ["React", "Python", "NLP", "FastAPI"],
    outcome: "Automated candidate screening system deployed on AWS.",
  },
  {
    title: "AWS Cloud Deployment",
    type: "Cloud Architecture",
    skills: ["EC2", "S3", "Docker", "Nginx"],
    outcome: "Scalable microservices architecture with auto-scaling.",
  },
  {
    title: "DevOps CI/CD Pipeline",
    type: "Infrastructure",
    skills: ["Jenkins", "Kubernetes", "Git", "Terraform"],
    outcome: "Zero-downtime deployment pipeline for enterprise apps.",
  },
  {
    title: "IoT Smart Monitoring System",
    type: "Hardware + Cloud",
    skills: ["ESP32", "MQTT", "AWS IoT", "C++"],
    outcome: "Real-time sensor data dashboard with anomaly alerts.",
  },
];

export default function WhatStudentsBuildSection() {
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
          Build Real Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "24px",
                  height: "100%",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(139, 92, 246, 0.5)",
                    boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.2)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        bgcolor: "rgba(139, 92, 246, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <FolderSpecialRoundedIcon sx={{ color: "#A78BFA" }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: "#F8FAFC", fontWeight: 700, mb: 0.5 }}>
                        {project.title}
                      </Typography>
                      <Typography sx={{ color: "#818CF8", fontSize: "0.85rem", fontWeight: 600 }}>
                        {project.type}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem", mb: 3, minHeight: "44px" }}>
                    {project.outcome}
                  </Typography>

                  <Box sx={{ pt: 3, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <Typography sx={{ color: "#64748B", fontSize: "0.8rem", mb: 1.5, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                      Skills & Tools Used
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {project.skills.map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          size="small"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.05)",
                            color: "#CBD5E1",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            border: "1px solid rgba(255,255,255,0.05)"
                          }}
                        />
                      ))}
                    </Stack>
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
