import { Box, Container, Typography, IconButton, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

const TESTIMONIALS = [
  {
    name: "Mohammed Azhar",
    role: "Computer Science Student",
    review: "The workshops helped me understand how technology is actually used in companies. The practical sessions were far more valuable than regular classroom learning."
  },
  {
    name: "K. Rahul",
    role: "Final Year Student",
    review: "The CRT sessions improved my aptitude and communication skills significantly. I became much more confident while attending interviews."
  },
  {
    name: "Sheikh Zubair",
    role: "Aspiring Software Engineer",
    review: "Mentorship sessions gave me clarity on what skills I should focus on. The guidance helped me build a clear learning roadmap."
  },
  {
    name: "Pavan Kumar",
    role: "Workshop Participant",
    review: "The learning environment feels professional and structured. Every session had practical value and actionable takeaways."
  }
];

export default function LearnerOutcomesSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft } = scrollRef.current;
      const scrollAmount = clientWidth; // Scroll by one full view width
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #071224 0%, #0B1120 50%, #111827 100%)",
        color: "white",
        overflow: "hidden", // Prevent full page horizontal scroll
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
                  color: "#60A5FA",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                TESTIMONIALS
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
                Trusted by Students Across Workshops & CRT Programs
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
                Experiences shared by learners who participated in workshops, mentorship programs, and career readiness training.
              </Typography>
            </motion.div>
          </Box>

          {/* Metrics Bar */}
          <Box ref={metricsRef}>
            <Grid container spacing={3} justifyContent="center">
              {METRICS.map((metric, index) => (
                <Grid size={{ xs: 6, md: 2.4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Top Row: Quote Icon & Stars */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                      <FormatQuoteIcon sx={{ color: "rgba(255,255,255,0.2)", fontSize: 40, transform: "rotate(180deg) scaleX(-1)" }} />
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} sx={{ color: "#FBBF24", fontSize: 20 }} />
                        ))}
                      </Stack>
                    </Box>

                    {/* Review Text */}
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "1.05rem",
                        lineHeight: 1.6,
                        mb: 4,
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      "{testimonial.review}"
                    </Typography>

                    {/* Reviewer Info */}
                    <Box>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        — {testimonial.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.5)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              ))}
            </Box>

          {/* Outcome Cards Grid */}
          <Grid container spacing={3}>
            {OUTCOME_CARDS.map((card, index) => (
              <Grid size={{ xs: 12, md: card.size }} key={index}>
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

          {/* Trust Booster */}
          <Box sx={{ textAlign: "center" }}>
             <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" mb={1}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} sx={{ color: "#FBBF24", fontSize: 24 }} />
                ))}
                <Typography sx={{ color: "white", fontWeight: 700, fontSize: "1.1rem", ml: 1 }}>
                  4.9/5 Average Learner Satisfaction
                </Typography>
              </Stack>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.9rem" }}>
                Based on workshop, mentorship, and CRT participant feedback.
              </Typography>
            </motion.div>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}
