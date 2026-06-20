import { Box, Container } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import VisualProofSection from "./sections/VisualProofSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FounderSection from "./sections/FounderSection";
import LeadershipTeamSection from "./sections/LeadershipTeamSection";

export default function HomePage() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #eef6ff 0%, #f8fbff 32%, #ffffff 58%, #f6fffb 100%)",
      }}
    >
      <HeroSection />
      <VisualProofSection />
      <FounderSection />
      <LeadershipTeamSection />
      <TestimonialsSection />
    </Box>
  );
}
