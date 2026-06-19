import { Box, Container } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FounderSection from "./sections/FounderSection";

export default function HomePage() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #eef6ff 0%, #f8fbff 32%, #ffffff 58%, #f6fffb 100%)",
      }}
    >
      <HeroSection />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <FeaturesSection />
        <FounderSection />
        <TestimonialsSection />
      </Container>
    </Box>
  );
}
