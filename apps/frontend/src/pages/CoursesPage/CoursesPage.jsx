import { Box } from "@mui/material";
import { useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import ProgramCategoriesSection from "./sections/ProgramCategoriesSection";
import LearningExperienceSection from "./sections/LearningExperienceSection";
import FeaturedProgramsSection from "./sections/FeaturedProgramsSection";
import BatchesSection from "./sections/BatchesSection";
import WhatStudentsBuildSection from "./sections/WhatStudentsBuildSection";
import SkillsOutcomeMatrixSection from "./sections/SkillsOutcomeMatrixSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import LearnerSuccessShowcaseSection from "./sections/LearnerSuccessShowcaseSection";
import VisualLearningGallerySection from "./sections/VisualLearningGallerySection";
import FinalTrustSection from "./sections/FinalTrustSection";

export default function CoursesPage() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#020617" }}>
      <HeroSection />
      <ProgramCategoriesSection />
      <LearningExperienceSection />
      <FeaturedProgramsSection />
      <BatchesSection />
      <WhatStudentsBuildSection />
      <SkillsOutcomeMatrixSection />
      <WhyChooseSection />
      <LearnerSuccessShowcaseSection />
      <VisualLearningGallerySection />
      <FinalTrustSection />
    </Box>
  );
}
