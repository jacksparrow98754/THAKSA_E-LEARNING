import { Box, Container } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
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
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 3 } }}>
        <FeaturesSection />
        <FounderSection />
        <LeadershipTeamSection />
        <TestimonialsSection />
      </Container>
    </Box>
  );
}
