import { Box, Container } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import VisualProofSection from "./sections/VisualProofSection";
import FounderSection from "./sections/FounderSection";
import LeadershipTeamSection from "./sections/LeadershipTeamSection";
import LearnerOutcomesSection from "./sections/LearnerOutcomesSection";
import CtaSection from "./sections/CtaSection";

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
      <LearnerOutcomesSection />
      <CtaSection />
    </Box>
  );
}
