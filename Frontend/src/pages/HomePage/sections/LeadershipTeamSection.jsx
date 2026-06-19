import React from "react";
import { Box, Chip, Container, Grid, Typography, Stack, Avatar } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const GlassCard = ({ children, sx }) => (
  <Box
    sx={{
      background: "rgba(255, 255, 255, 0.6)",
      backdropFilter: "blur(20px)",
      borderRadius: "24px",
      border: "1px solid rgba(255, 255, 255, 0.9)",
      boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.05)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 30px 60px -10px rgba(15, 23, 42, 0.12)",
      },
      ...sx,
    }}
  >
    {children}
  </Box>
);

const NetworkLinesBackground = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style={{ position: "absolute", top: 0, left: 0, zIndex: 0, opacity: 0.4, pointerEvents: "none" }}
  >
    <path
      d="M-10,50 Q20,20 50,50 T110,50"
      fill="none"
      stroke="rgba(99, 102, 241, 0.1)"
      strokeWidth="0.2"
    />
    <path
      d="M-10,80 Q30,10 70,80 T110,80"
      fill="none"
      stroke="rgba(14, 165, 233, 0.1)"
      strokeWidth="0.2"
    />
    <circle cx="20" cy="35" r="0.5" fill="rgba(99, 102, 241, 0.3)" />
    <circle cx="50" cy="50" r="0.8" fill="rgba(99, 102, 241, 0.4)" />
    <circle cx="80" cy="65" r="0.5" fill="rgba(14, 165, 233, 0.3)" />
    <circle cx="30" cy="60" r="0.6" fill="rgba(14, 165, 233, 0.3)" />
  </svg>
);

export default function LeadershipTeamSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        position: "relative",
        bgcolor: "#f8fafc",
        overflow: "hidden",
      }}
    >
      <NetworkLinesBackground />

      {/* Background Gradients */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "50%",
          height: "60%",
          background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 60%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "50%",
          height: "60%",
          background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 60%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ xs: 8, md: 12 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Chip
                label="LEADERSHIP TEAM"
                icon={<AutoAwesomeRoundedIcon style={{ fontSize: "1rem", color: "#4f46e5" }} />}
                sx={{
                  bgcolor: "rgba(79, 70, 229, 0.08)",
                  color: "#4f46e5",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  mb: 3,
                  fontSize: "0.75rem",
                  px: 1,
                  border: "1px solid rgba(79, 70, 229, 0.2)",
                  borderRadius: "8px",
                }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  color: "#0f172a",
                  mb: 3,
                  fontFamily: "'Sora', sans-serif",
                  fontSize: { xs: "2.25rem", md: "3.5rem" },
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                The Team Behind <br />
                <Box component="span" sx={{ color: "#6366f1" }}>
                  Student Success
                </Box>
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Industry professionals, mentors, and business leaders working together to help students become career-ready through practical learning and real-world guidance.
              </Typography>
            </motion.div>
          </motion.div>
        </Box>

        {/* Executive Cards Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          {/* Executive Card 01 */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
              }}
              style={{ height: "100%" }}
            >
              <GlassCard sx={{ height: "100%", display: "flex", flexDirection: "column", p: { xs: 3, md: 5 } }}>
                <Stack direction="row" spacing={3} alignItems="center" mb={4}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      boxShadow: "0 10px 20px -5px rgba(99, 102, 241, 0.4)",
                      border: "3px solid #ffffff",
                    }}
                  >
                    PS
                  </Avatar>
                  <Box>
                    <Typography variant="h4" sx={{ color: "#0f172a", fontWeight: 800, mb: 0.5, fontFamily: "'Sora', sans-serif", fontSize: "1.5rem" }}>
                      P. Sadavisha
                    </Typography>
                    <Typography sx={{ color: "#6366f1", fontWeight: 700, fontSize: "0.95rem" }}>
                      Business Development Associate
                    </Typography>
                  </Box>
                </Stack>

                <Typography sx={{ color: "#0f172a", fontWeight: 700, fontSize: "1.15rem", mb: 2, lineHeight: 1.5 }}>
                  Building Industry Connections For Student Growth
                </Typography>

                <Typography sx={{ color: "#475569", lineHeight: 1.7, mb: 4, flexGrow: 1, fontSize: "1rem" }}>
                  Focused on strengthening industry partnerships, student outreach initiatives, workshop coordination, and opportunity creation. Plays a key role in connecting learners with meaningful career pathways and professional development opportunities.
                </Typography>

                <Box sx={{ borderTop: "1px solid rgba(15, 23, 42, 0.05)", pt: 3 }}>
                  <Typography sx={{ color: "#64748b", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", mb: 2 }}>
                    Expertise Areas
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
                    {["Business Development", "Industry Partnerships", "Workshop Coordination", "Student Engagement", "Career Ecosystem Growth"].map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "rgba(15, 23, 42, 0.04)",
                          color: "#334155",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          borderRadius: "6px",
                          border: "1px solid rgba(15, 23, 42, 0.05)"
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </GlassCard>
            </motion.div>
          </Grid>

          {/* Executive Card 02 */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
              }}
              style={{ height: "100%" }}
            >
              <GlassCard sx={{ height: "100%", display: "flex", flexDirection: "column", p: { xs: 3, md: 5 } }}>
                <Stack direction="row" spacing={3} alignItems="center" mb={4}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      boxShadow: "0 10px 20px -5px rgba(14, 165, 233, 0.4)",
                      border: "3px solid #ffffff",
                    }}
                  >
                    MR
                  </Avatar>
                  <Box>
                    <Typography variant="h4" sx={{ color: "#0f172a", fontWeight: 800, mb: 0.5, fontFamily: "'Sora', sans-serif", fontSize: "1.5rem" }}>
                      Dr. Madhukar Reddy
                    </Typography>
                    <Typography sx={{ color: "#0ea5e9", fontWeight: 700, fontSize: "0.95rem", mb: 0.5 }}>
                      Head of Business Operations
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <PublicRoundedIcon sx={{ fontSize: "0.9rem", color: "#64748b" }} />
                      <Typography sx={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 600 }}>
                        California, USA
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                <Typography sx={{ color: "#0f172a", fontWeight: 700, fontSize: "1.15rem", mb: 2, lineHeight: 1.5 }}>
                  Driving Global Industry Perspective And Strategic Growth
                </Typography>

                <Typography sx={{ color: "#475569", lineHeight: 1.7, mb: 4, flexGrow: 1, fontSize: "1rem" }}>
                  Experienced business and technology leader with expertise spanning cybersecurity, enterprise operations, and strategic business growth. Provides global industry insights and operational direction to ensure ThaksaAi remains aligned with evolving workforce demands.
                </Typography>

                <Box sx={{ borderTop: "1px solid rgba(15, 23, 42, 0.05)", pt: 3 }}>
                  <Typography sx={{ color: "#64748b", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", mb: 2 }}>
                    Professional Highlights
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" useFlexGap gap={1} mb={3}>
                    {["Cybersecurity", "Enterprise Technology", "Business Operations", "Global Leadership", "Strategic Planning", "Industry Transformation"].map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "rgba(15, 23, 42, 0.04)",
                          color: "#334155",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          borderRadius: "6px",
                          border: "1px solid rgba(15, 23, 42, 0.05)"
                        }}
                      />
                    ))}
                  </Stack>

                  <Typography sx={{ color: "#64748b", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", mb: 1.5 }}>
                    Former Experience
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1.5} flexWrap="wrap">
                    {["IBM", "John Deere", "Global Technology Ecosystem"].map((exp, idx) => (
                      <Box key={exp} sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ color: "#0f172a", fontSize: "0.85rem", fontWeight: 700 }}>{exp}</Typography>
                        {idx < 2 && <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: "#cbd5e1", ml: 1.5 }} />}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </GlassCard>
            </motion.div>
          </Grid>
        </Grid>

        {/* Trust Bar */}
        <Box sx={{ mt: { xs: 10, md: 14 } }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 4 }}>
              <Box sx={{ height: "1px", flexGrow: 1, maxWidth: "100px", background: "linear-gradient(to right, transparent, rgba(15, 23, 42, 0.1))" }} />
              <Typography sx={{ color: "#64748b", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", px: 3 }}>
                Supported By
              </Typography>
              <Box sx={{ height: "1px", flexGrow: 1, maxWidth: "100px", background: "linear-gradient(to left, transparent, rgba(15, 23, 42, 0.1))" }} />
            </Box>

            <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={{ xs: 2, md: 2.5 }}>
              {[
                "Industry Mentors",
                "Business Leaders",
                "Technology Experts",
                "Career Coaches",
                "Workshop Facilitators",
                "CRT Specialists"
              ].map((badge) => (
                <motion.div
                  key={badge}
                  whileHover={{ y: -2 }}
                  style={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      px: { xs: 2, md: 2.5 },
                      py: 1.25,
                      bgcolor: "#ffffff",
                      borderRadius: "8px",
                      border: "1px solid rgba(15, 23, 42, 0.05)",
                      color: "#334155",
                      fontWeight: 600,
                      fontSize: { xs: "0.8rem", md: "0.85rem" },
                      boxShadow: "0 2px 10px -2px rgba(15, 23, 42, 0.03)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "rgba(99, 102, 241, 0.3)",
                        boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.08)",
                        color: "#0f172a"
                      }
                    }}
                  >
                    {badge}
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        </Box>

      </Container>
    </Box>
  );
}
