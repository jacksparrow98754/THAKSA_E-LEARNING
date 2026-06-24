import { Box, Container, Stack, Typography } from "@mui/material";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";

export default function FinalTrustSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020617" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 4, md: 6 },
            bgcolor: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "32px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)",
            }
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 800,
              color: "#FFFFFF",
              mb: 4,
            }}
          >
            Learning Designed for Real Careers
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            spacing={{ xs: 2, md: 4 }}
            sx={{ mb: 6 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
              <VerifiedUserRoundedIcon sx={{ color: "#10B981" }} />
              <Typography sx={{ color: "#F8FAFC", fontWeight: 600 }}>Industry Relevant</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
              <WorkRoundedIcon sx={{ color: "#06B6D4" }} />
              <Typography sx={{ color: "#F8FAFC", fontWeight: 600 }}>Project Based</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
              <StarsRoundedIcon sx={{ color: "#8B5CF6" }} />
              <Typography sx={{ color: "#F8FAFC", fontWeight: 600 }}>Career Focused</Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              px: { xs: 2, md: 4 },
              py: 3,
              bgcolor: "rgba(255, 255, 255, 0.03)",
              borderRadius: "16px",
              display: "inline-block"
            }}
          >
            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: "1.1rem",
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              "Practical learning experiences built to prepare students <br sx={{ display: { xs: "none", md: "block" } }}/> for modern industry expectations."
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
