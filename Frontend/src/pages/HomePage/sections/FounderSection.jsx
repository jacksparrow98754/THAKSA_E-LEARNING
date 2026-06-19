import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Icons
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

import img1 from "./cofounder.jpeg";
import img2 from "./IMG-20260619-WA0036.jpg";
import img3 from "./IMG-20260619-WA0010.jpg";

const ceoImages = [img1, img2, img3];

const FloatingBadge = ({ text, top, left, right, bottom, delay }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.6 }}
      whileHover={{ y: -3 }}
      sx={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        bgcolor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px",
        px: 1.5,
        py: 0.75,
        display: "flex",
        alignItems: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        zIndex: 5,
        border: "1px solid rgba(255,255,255,0.6)",
      }}
    >
      <Typography sx={{ fontWeight: 600, color: "#1e293b", fontSize: "0.75rem", whiteSpace: "nowrap" }}>
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
        p: { xs: 2, md: 3 },
        borderRadius: "16px",
        bgcolor: "#ffffff",
        boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)",
        border: "1px solid rgba(226, 232, 240, 0.8)",
        textAlign: "center",
        flex: 1,
        minWidth: { xs: "140px", sm: "200px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)'
      }} />
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "#0f172a",
          mb: 0.5,
          fontSize: { xs: "2rem", md: "2.5rem" }
        }}
      >
        {inView ? <CountUp end={end} duration={2.5} /> : "0"}
        {suffix}
      </Typography>
      <Typography sx={{ color: "#64748b", fontSize: { xs: "0.85rem", md: "1rem" }, fontWeight: 600 }}>
        {label}
      </Typography>
    </Box>
  );
};

const PillarCard = ({ icon, title, delay }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 3,
        borderRadius: "16px",
        bgcolor: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.8)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          bgcolor: "#ffffff"
        }
      }}
    >
      <Box sx={{
        width: 56,
        height: 56,
        borderRadius: "12px",
        bgcolor: "rgba(59, 130, 246, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
        color: "#3b82f6"
      }}>
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "1.1rem" }}>
        {title}
      </Typography>
    </Box>
  );
};

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

  const headingContent = (
    <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Typography
        sx={{
          fontWeight: 700,
          color: "#3b82f6",
          fontSize: "0.85rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          mb: 1.5,
          display: "inline-block",
          bgcolor: "rgba(59, 130, 246, 0.1)",
          px: 1.5,
          py: 0.5,
          borderRadius: "4px"
        }}
      >
        FOUNDER & CEO
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#0f172a",
          mb: 2,
          fontSize: { xs: "28px", md: "36px", lg: "44px" },
          lineHeight: 1.2,
        }}
      >
        Meet The Founder Behind ThaksaAi Career Planet
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "#1e293b",
          mb: 1,
          fontSize: { xs: "32px", md: "48px", lg: "56px" },
          lineHeight: 1.1,
        }}
      >
        K. Tharunkrishna
      </Typography>
      <Typography
        sx={{
          color: "#64748b",
          fontWeight: 500,
          fontSize: { xs: "1rem", md: "1.1rem", lg: "1.25rem" },
          mb: 4,
        }}
      >
        Founder • Career Transformation Mentor • Industry Educator
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#f8fafc",
      }}
    >
      {/* Background Gradients */}
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          left: "0%",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.04), transparent 50%), radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.04), transparent 50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: 4, lg: 6 } }}>
        <Grid container spacing={{ xs: 6, md: 8, lg: 12 }} alignItems="center" direction={isMobile ? "column" : "row"}>

          {/* LEFT: STORY AREA (60% Desktop) */}
          <Grid item xs={12} md={7} lg={7.2}>
            {isMobile && headingContent}

            {!isMobile && headingContent}

            {isMobile && (
              <Box sx={{ width: "100%", maxWidth: 400, mx: "auto", mb: 4 }}>
                <ImageShowcase currentIndex={currentIndex} />
              </Box>
            )}

            <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Card sx={{
                mb: 4,
                borderRadius: "16px",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.08)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                background: "linear-gradient(145deg, #ffffff, #f8fafc)",
                position: "relative",
                overflow: "visible"
              }}>
                <Box sx={{ position: "absolute", top: -15, left: 24, bgcolor: "#3b82f6", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(59, 130, 246, 0.3)" }}>
                  <FormatQuoteRoundedIcon sx={{ color: "white" }} />
                </Box>
                <CardContent sx={{ p: { xs: 3, md: 4 }, pt: { xs: 4, md: 4 } }}>
                  <Typography sx={{
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: "#1e293b",
                    lineHeight: 1.6
                  }}>
                    "Building industry-ready professionals through practical learning, mentorship, and career-focused training."
                  </Typography>
                </CardContent>
              </Card>

              <Box sx={{ color: "#475569", fontSize: { xs: "16px", md: "18px" }, lineHeight: 1.8, textAlign: { xs: "center", md: "left" } }}>
                <Typography sx={{ mb: 2 }}>
                  Driven by a vision to bridge the gap between academic education and industry demands, K. Tharunkrishna has dedicated his career to building an ecosystem that empowers students. Through rigorous Campus Recruitment Training (CRT) and real-world technology education, he focuses on transforming learners into industry-ready professionals.
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  By organizing immersive industry workshops and hands-on training sessions, he instills technical proficiency and critical problem-solving skills. His approach is rooted in practical mentorship, ensuring that every student receives the guidance necessary to navigate the complexities of modern career pathways.
                </Typography>
                <Typography>
                  As an educator and leader, his impact extends beyond the classroom. He envisions ThaksaAi as a catalyst for continuous learning and student transformation, cultivating a generation of capable, confident individuals prepared to excel in the competitive global workforce.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT: PORTRAIT SHOWCASE (40% Desktop) */}
          {!isMobile && (
            <Grid item xs={12} md={5} lg={4.8}>
              <ImageShowcase currentIndex={currentIndex} />
            </Grid>
          )}
        </Grid>

        {/* METRICS ROW */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Stack direction="row" spacing={{ xs: 2, md: 3 }} flexWrap="wrap" useFlexGap justifyContent="center">
            <StatCard end={1000} suffix="+" label="Students Trained" delay={0.1} />
            <StatCard end={40} suffix="+" label="Workshops Conducted" delay={0.2} />
            <StatCard end={50} suffix="+" label="CRT Programs" delay={0.3} />
            <StatCard end={500} suffix="+" label="Mentorship Sessions" delay={0.4} />
          </Stack>
        </Box>

        {/* LEADERSHIP PILLARS */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <PillarCard icon={<StarRoundedIcon fontSize="large" />} title="Leadership" delay={0.1} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <PillarCard icon={<GroupsRoundedIcon fontSize="large" />} title="Student Impact" delay={0.2} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <PillarCard icon={<BusinessCenterRoundedIcon fontSize="large" />} title="Industry Readiness" delay={0.3} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <PillarCard icon={<LaptopMacRoundedIcon fontSize="large" />} title="Technology Education" delay={0.4} />
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}

function ImageShowcase({ currentIndex }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{ position: "relative", width: "100%", maxWidth: { xs: 380, md: 500 }, mx: "auto" }}
    >
      <Box
        sx={{
          position: "relative",
          aspectRatio: "3/4",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.25)",
          bgcolor: "#ffffff",
          border: "8px solid rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={ceoImages[currentIndex]}
            alt="Founder & CEO"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        </AnimatePresence>

        {/* Glass Overlay Gradient for depth */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        {/* Indicators */}
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
                borderRadius: 4,
                bgcolor: currentIndex === index ? "#ffffff" : "rgba(255,255,255,0.4)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Stack>

        {/* Floating Badges */}
        <FloatingBadge text="Founder & CEO" top="5%" left="-2%" delay={0.2} />
        <FloatingBadge text="Career Mentor" top="15%" right="-2%" delay={0.4} />
        <FloatingBadge text="Industry Speaker" bottom="20%" left="2%" delay={0.6} />
        <FloatingBadge text="Workshop Leader" bottom="30%" right="-2%" delay={0.8} />
        <FloatingBadge text="CRT Specialist" top="40%" left="-2%" delay={1.0} />
      </Box>
    </Box>
  );
}
