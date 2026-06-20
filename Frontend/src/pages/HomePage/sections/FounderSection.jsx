import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Icons
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";

import img1 from "./cofounder.jpeg";
import img2 from "./IMG-20260619-WA0036.jpg";

const ceoImages = [img1, img2];

const FloatingCard = ({ icon, text, top, left, right, bottom, delay }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.8 }}
      whileHover={{ y: -5, scale: 1.05 }}
      sx={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        bgcolor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(12px)",
        borderRadius: "24px",
        px: 2,
        py: 1.5,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
        zIndex: 5,
        border: "1px solid rgba(255,255,255,0.5)",
      }}
    >
      <Box
        sx={{
          bgcolor: "rgba(99, 102, 241, 0.1)",
          color: "#6366f1",
          borderRadius: "24px",
          p: 0.75,
          display: "flex",
        }}
      >
        {icon}
      </Box>
      <Typography sx={{   fontSize: "0.85rem" }}>
        {text}
      </Typography>
    </Box>
  );
};

const StatCard = ({ end, suffix, label, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      sx={{
        p: 2.5,
        borderRadius: "24px",
        bgcolor: "#ffffff",
        boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
        border: "1px solid rgba(99,102,241,0.05)",
        textAlign: "center",
        flex: "1 1 auto",
        minWidth: "130px",
      }}
    >
      <Typography
        variant="h4"
        sx={{

          color: "#6366f1",
          mb: 0.5,
        }}
      >
        {inView ? <CountUp end={end} duration={2.5} /> : "0"}
        {suffix}
      </Typography>
      <Typography sx={{ color: "#64748b", fontSize: "0.875rem",  }}>
        {label}
      </Typography>
    </Box>
  );
};

const TimelineItem = ({ title }) => (
  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 0.5,
      }}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          bgcolor: "#6366f1",
          boxShadow: "0 0 0 4px rgba(99,102,241,0.2)",
        }}
      />
      <Box sx={{ width: 2, height: 24, bgcolor: "rgba(99,102,241,0.2)", mt: 1 }} />
    </Box>
    <Box>
      <Typography sx={{   fontSize: "0.95rem" }}>
        {title}
      </Typography>
    </Box>
  </Box>
);

const HeadingContent = () => (
  <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <Chip
      icon={<AutoAwesomeRoundedIcon style={{ color: "#6366f1", fontSize: "1rem" }} />}
      label="LEADERSHIP"
      size="small"
      sx={{
        bgcolor: "rgba(99,102,241,0.1)",
        color: "#6366f1",

        letterSpacing: "0.05em",
        mb: 3,
        px: 1,
        border: "1px solid rgba(99,102,241,0.2)",
      }}
    />
    <Typography
      variant="h2"
      sx={{


        mb: 1,

        lineHeight: 1.2,
      }}
    >
      Meet The Founder Behind ThaksaAi
    </Typography>
    <Typography
      variant="h4"
      sx={{
        color: "#334155",

        mb: 0.5,

      }}
    >
      K. Tharunkrishna
    </Typography>
    <Typography
      sx={{
        color: "#6366f1",

        fontSize: "1rem",
        mb: { xs: 4, md: 3 },
      }}
    >
      Founder & CEO | Visionary Educator | Career Transformation Specialist
    </Typography>
  </Box>
);

export default function FounderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ceoImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const TrustBadges = ["CRT Specialist", "Career Mentor", "Industry Speaker", "Technology Educator"];
  const TimelineEvents = ["Workshop Leadership", "CRT Training Programs", "Industry Mentorship", "Student Success Initiatives"];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#f8fafc",
      }}
    >
      {/* Subtle Premium Background Lighting */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "40%",
          height: "60%",
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "50%",
          height: "60%",
          background: "radial-gradient(ellipse at center, rgba(14,165,233,0.04) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        {/* Render Heading outside of Grid for mobile to ensure strict ordering: Heading -> Image -> Bio */}
        {isMobile && <HeadingContent />}

        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
          {/* LEFT: FOUNDER SHOWCASE (45% on Desktop) */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              sx={{ position: "relative", mx: "auto", maxWidth: { xs: 380, md: "100%" } }}
            >
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "4/5",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                  bgcolor: "#ffffff",
                  border: "8px solid rgba(255,255,255,0.8)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={ceoImages[currentIndex]}
                    alt="Founder"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                </AnimatePresence>

                {/* Dark Overlay for depth */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 40%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Internal Indicators */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 3 }}
                >
                  {ceoImages.map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: currentIndex === index ? 24 : 8,
                        height: 8,
                        borderRadius: "24px",
                        bgcolor: currentIndex === index ? "#ffffff" : "rgba(255,255,255,0.4)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Floating Cards (Desktop/Tablet Layout) */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <FloatingCard
                  icon={<GroupsRoundedIcon fontSize="small" />}
                  text="1000+ Students Mentored"
                  top="10%"
                  left="-15%"
                  delay={0.2}
                />
                <FloatingCard
                  icon={<ComputerRoundedIcon fontSize="small" />}
                  text="50+ CRT Programs"
                  bottom="15%"
                  right="-10%"
                  delay={0.4}
                />
              </Box>

              {/* Stacked Achievement Cards for Mobile (No Overlap) */}
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: { xs: "flex", sm: "none" },
                  mt: 3,
                  justifyContent: "center"
                }}
              >
                <Box sx={{
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "24px",
                  px: 1.5,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}>
                  <GroupsRoundedIcon sx={{ color: "#6366f1", fontSize: "1rem" }} />
                  <Typography sx={{  fontSize: "0.75rem", color: "#0f172a" }}>
                    1000+ Mentored
                  </Typography>
                </Box>
                <Box sx={{
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "24px",
                  px: 1.5,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}>
                  <ComputerRoundedIcon sx={{ color: "#6366f1", fontSize: "1rem" }} />
                  <Typography sx={{  fontSize: "0.75rem", color: "#0f172a" }}>
                    50+ CRT Progs
                  </Typography>
                </Box>
              </Stack>

            </Box>
          </Grid>

          {/* RIGHT: STORY & METRICS (55% on Desktop) */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Desktop Heading (Hidden on Mobile) */}
            {!isMobile && <HeadingContent />}

            <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

              {/* Trust Badges */}
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
                {TrustBadges.map((badge) => (
                  <Chip
                    key={badge}
                    icon={<CheckCircleRoundedIcon style={{ color: "#10b981", fontSize: "1.1rem" }} />}
                    label={badge}
                    sx={{
                      bgcolor: "#ffffff",


                      fontSize: "0.85rem",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                    }}
                  />
                ))}
              </Stack>

              {/* Storytelling Paragraphs */}
              <Typography sx={{  lineHeight: 1.8, fontSize: "1.05rem", mb: 3 }}>
                Believing that the future belongs to those who continuously learn and adapt, the foundation of ThaksaAi Career Planet is built on empowering individuals through technology and practical innovation.
              </Typography>
              <Typography sx={{  lineHeight: 1.8, fontSize: "1.05rem", mb: 3 }}>
                With a deep focus on Campus Recruitment Training (CRT) and real-world technology education, the ecosystem bridges the gap between academic learning and industry expectations. Through immersive workshops and career transformation programs, students are molded into industry-ready professionals.
              </Typography>
              <Typography sx={{  lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}>
                Combining expertise in cutting-edge software practices with a passion for mentorship, the mission is to create learning experiences that don't just teach skills, but build lasting careers and foster transformative student outcomes.
              </Typography>

              {/* Metrics Grid */}
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 5 }}>
                <StatCard end={1000} suffix="+" label="Students Trained" delay={0.1} />
                <StatCard end={40} suffix="+" label="Workshops Conducted" delay={0.2} />
                <StatCard end={500} suffix="+" label="Mentorship Sessions" delay={0.3} />
              </Stack>

              {/* Timeline */}
              <Box sx={{ mt: 2 }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                  <TimelineRoundedIcon sx={{ color: "#6366f1" }} />
                  <Typography variant="h6" sx={{  color: "#0f172a" }}>
                    Impact Journey
                  </Typography>
                </Stack>
                {TimelineEvents.map((event, idx) => (
                  <TimelineItem key={idx} title={event} />
                ))}
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
