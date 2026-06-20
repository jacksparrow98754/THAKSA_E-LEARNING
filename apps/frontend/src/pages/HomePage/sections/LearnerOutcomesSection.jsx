import { Box, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CREDIBILITY_CHIPS = [
  "Career Readiness",
  "Interview Preparation",
  "Industry Mentorship",
  "Practical Learning",
  "Communication Skills",
  "Technology Workshops",
  "CRT Excellence",
  "Professional Development",
];

const METRICS = [
  { value: 1000, suffix: "+", label: "Students Trained" },
  { value: 40, suffix: "+", label: "Workshops Conducted" },
  { value: 50, suffix: "+", label: "CRT Programs" },
  { value: 500, suffix: "+", label: "Mentorship Sessions" },
  { value: 95, suffix: "%", label: "Learner Satisfaction" },
];

const OUTCOME_CARDS = [
  {
    type: "Student Transformation",
    headline: "Improved Communication & Confidence",
    story: "Struggled with articulation in interviews initially. Through rigorous mock sessions and peer feedback, gained the confidence to express technical concepts clearly and landed a top-tier role.",
    size: 7, // Grid md
  },
  {
    type: "Workshop Experience",
    headline: "Industry-Focused Learning",
    story: "Participated in intensive weekend workshops focusing on real-world system design. Gained hands-on practical exposure that directly mirrored industry expectations.",
    size: 5,
  },
  {
    type: "CRT Readiness",
    headline: "Placement Preparation",
    story: "Comprehensive aptitude training paired with deep interview readiness modules. Sharpened problem-solving skills and professional communication required for top placements.",
    size: 5,
  },
  {
    type: "Mentorship Impact",
    headline: "Guidance That Matters",
    story: "1-on-1 interaction with industry veterans provided clear career direction. Tailored skill development paths bridged the gap between academic knowledge and industry needs.",
    size: 7,
  },
];

const MotionPaper = motion.create(Paper);

export default function LearnerOutcomesSection() {
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #071224 0%, #0B1120 50%, #111827 100%)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 6, md: 8 }}>
          {/* Header Section */}
          <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                sx={{
                  color: "#60A5FA", // A soft blue for the label
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                SUCCESS STORIES
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  letterSpacing: "-0.02em",
                }}
              >
                Real Learners. Real Growth. Real Outcomes.
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  lineHeight: 1.6,
                  maxWidth: "700px",
                  mx: "auto",
                }}
              >
                Students who participated in workshops, CRT programs, mentorship initiatives, and career-focused learning experiences that helped them become more confident and industry-ready.
              </Typography>
            </motion.div>
          </Box>

          {/* Metrics Bar */}
          <Box ref={metricsRef}>
            <Grid container spacing={3} justifyContent="center">
              {METRICS.map((metric, index) => (
                <Grid item size={{ xs: 6, md: 2.4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        textAlign: "center",
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "24px",
                        height: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "2rem", md: "2.5rem" },
                          fontWeight: 700,
                          color: "white",
                          lineHeight: 1,
                          mb: 1,
                        }}
                      >
                        {metricsInView ? (
                          <CountUp end={metric.value} duration={2.5} />
                        ) : (
                          "0"
                        )}
                        {metric.suffix}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.6)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        {metric.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Outcome Cards Grid */}
          <Grid container spacing={3}>
            {OUTCOME_CARDS.map((card, index) => (
              <Grid item size={{ xs: 12, md: card.size }} key={index}>
                <MotionPaper
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  elevation={0}
                  sx={{
                    p: { xs: 4, md: 5 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "24px",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "linear-gradient(90deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover::before": {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      mb: 2,
                    }}
                  >
                    {card.type}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      fontSize: { xs: "1.5rem", md: "1.75rem" },
                      fontWeight: 700,
                      mb: 3,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.headline}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      mt: "auto",
                    }}
                  >
                    {card.story}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>

          {/* Trust Elements / Credibility Chips */}
          <Box>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={1.5}
                sx={{ maxWidth: "900px", mx: "auto" }}
              >
                {CREDIBILITY_CHIPS.map((chip, index) => (
                  <Chip
                    key={index}
                    label={chip}
                    sx={{
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      px: 1,
                      py: 2.5,
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
