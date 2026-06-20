import { Box, Grid, Paper, Typography } from "@mui/material";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import CastForEducationRoundedIcon from "@mui/icons-material/CastForEducationRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

const steps = [
  {
    step: "01",
    title: "Choose a Path",
    text: "Pick a track based on your goal and current skill level.",
    icon: ExploreRoundedIcon,
    color: "#6366f1",
    bgColor: "rgba(99, 102, 241, 0.12)",
  },
  {
    step: "02",
    title: "Join Live Batches",
    text: "Attend mentor-led sessions and complete guided practical tasks.",
    icon: CastForEducationRoundedIcon,
    color: "#f97316",
    bgColor: "rgba(249, 115, 22, 0.12)",
  },
  {
    step: "03",
    title: "Ship Portfolio Work",
    text: "Build real projects and showcase outcomes with confidence.",
    icon: RocketLaunchRoundedIcon,
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.12)",
  },
];

export default function ProcessSection() {
  return (
    <Box sx={{ mb: { xs: 6, md: 10 } }}>
      <Typography
        variant="h2"
        sx={{


          mb: 3,
        }}
      >
        How Learning Works
      </Typography>

      <Grid container spacing={2.2}>
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <Grid key={item.step} size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "24px",
                  border: "1px solid rgba(15, 23, 42, 0.04)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.6) 100%)",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "24px",
                    bgcolor: item.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Icon sx={{ color: item.color, fontSize: 32 }} />
                </Box>
                <Typography variant="h6" sx={{   mb: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#475569" }}>{item.text}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
