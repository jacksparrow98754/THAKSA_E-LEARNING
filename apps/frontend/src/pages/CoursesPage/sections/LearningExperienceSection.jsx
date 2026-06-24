import { Box, Container, Stack, Typography } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";

const steps = [
  { icon: SchoolRoundedIcon, title: "Learn", desc: "Live expert sessions" },
  { icon: CodeRoundedIcon, title: "Practice", desc: "Hands-on coding labs" },
  { icon: BuildRoundedIcon, title: "Build", desc: "Real-world projects" },
  { icon: EmojiObjectsRoundedIcon, title: "Mentorship", desc: "1:1 guidance" },
  { icon: TrendingUpRoundedIcon, title: "Career Prep", desc: "Resume & interviews" },
  { icon: WorkspacePremiumRoundedIcon, title: "Certification", desc: "Industry recognized" },
];

export default function LearningExperienceSection() {
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
          How Learning Happens
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 4, md: 2 },
            "&::before": {
              content: '""',
              position: "absolute",
              top: { xs: "0%", md: "50%" },
              left: { xs: "28px", md: "5%" },
              width: { xs: "2px", md: "90%" },
              height: { xs: "100%", md: "2px" },
              bgcolor: "rgba(255, 255, 255, 0.1)",
              zIndex: 0,
              transform: { xs: "none", md: "translateY(-50%)" },
            },
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Stack
                key={index}
                alignItems={{ xs: "flex-start", md: "center" }}
                direction={{ xs: "row", md: "column" }}
                spacing={{ xs: 3, md: 2 }}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: { xs: "100%", md: "auto" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 56, md: 64 },
                    height: { xs: 56, md: 64 },
                    borderRadius: "50%",
                    bgcolor: "#020B2D",
                    border: "2px solid rgba(79, 70, 229, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(79, 70, 229, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      borderColor: "#4F46E5",
                      boxShadow: "0 0 30px rgba(79, 70, 229, 0.4)",
                    },
                  }}
                >
                  <Icon sx={{ color: "#818CF8", fontSize: { xs: 24, md: 28 } }} />
                </Box>
                <Box sx={{ pt: { xs: 1, md: 0 }, textAlign: { xs: "left", md: "center" } }}>
                  <Typography sx={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
                    {step.title}
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.875rem" }}>
                    {step.desc}
                  </Typography>
                </Box>
              </Stack>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
