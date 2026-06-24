import { Box } from "@mui/material";
import { useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import WhyCrtSection from "./sections/WhyCrtSection";
import RoadmapSection from "./sections/RoadmapSection";
import BentoCurriculumSection from "./sections/BentoCurriculumSection";
import AiAdvantageSection from "./sections/AiAdvantageSection";
import OutcomesSection from "./sections/OutcomesSection";
import SuccessSnapshotSection from "./sections/SuccessSnapshotSection";
import CollegeCrtSection from "./sections/CollegeCrtSection";
import VisualProofSection from "./sections/VisualProofSection";
import FinalTrustSection from "./sections/FinalTrustSection";

export default function TrainingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#020617" }}>
            <HeroSection />
            <WhyCrtSection />
            <RoadmapSection />
            <BentoCurriculumSection />
            <AiAdvantageSection />
            <OutcomesSection />
            <SuccessSnapshotSection />
            <CollegeCrtSection />
            <VisualProofSection />
            <FinalTrustSection />
        </Box>
    );
}
