import React from "react";
import { Box, Chip, Container, Grid, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

// Images
import sadavishaImg from "./cto-sadvisha-reddy.png";
import madhukarImg from "./IMG-20260619-WA0010.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leaders = [
  {
    name: "P. Sadavisha",
    role: "Business Development Associate",
    image: sadavishaImg,
    headline: "Connecting Students With Opportunities",
    description:
      "Focused on building industry partnerships, student outreach initiatives, workshop coordination, and creating meaningful connections that support career growth and learning outcomes.",
    tags: [
      "Business Development",
      "Student Relations",
      "Partnership Growth",
      "Career Programs",
      "Workshop Coordination",
    ],
  },
  {
    name: "Dr. Madhukar Reddy",
    role: "Head of Business Operations",
    location: "California, USA",
    image: madhukarImg,
    headline: "Global Industry Leadership & Strategic Growth",
    description:
      "Industry leader with experience across global technology organizations, helping bridge academic learning with real-world industry expectations. Provides strategic direction, operational excellence, and career-focused guidance.",
    tags: [
      "Cybersecurity",
      "Enterprise Technology",
      "Business Operations",
      "Global Leadership",
      "Industry Transformation",
      "Strategic Growth",
    ],
  },
];

const credibilityBadges = [
  "Industry Mentors",
  "Career Coaches",
  "Workshop Facilitators",
  "CRT Experts",
  "Technology Educators",
  "Placement Support Team",
];

const GlassCard = ({ children, sx }) => (
  <Box
    sx={{
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(16px)",
      borderRadius: "24px",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 30px rgba(15, 23, 42, 0.1)",
      },
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default function LeadershipTeamSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        position: "relative",
        bgcolor: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Subtle Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "40%",
          height: "40%",
          background: "radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "30%",
          height: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.03) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Chip
                label="LEADERSHIP TEAM"
                sx={{
                  bgcolor: "rgba(15, 23, 42, 0.05)",


                  letterSpacing: "0.1em",
                  mb: 3,
                  fontSize: "0.75rem",
                  px: 1,
                  border: "1px solid rgba(15, 23, 42, 0.1)",
                }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{


                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                The People Building<br />
                <Box component="span" sx={{ color: "#6366f1" }}>
                  Career Success
                </Box>
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                sx={{


                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                A team of educators, mentors, and industry professionals dedicated to helping students become industry-ready through practical learning, mentorship, and career guidance.
              </Typography>
            </motion.div>
          </motion.div>
        </Box>

        {/* Executive Cards Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          {leaders.map((leader, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.2 } },
                }}
              >
                <GlassCard sx={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <Box
                    sx={{
                      height: 320,
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "#f8fafc",
                    }}
                  >
                    <motion.img
                      src={leader.image}
                      alt={leader.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "50%",
                        background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 100%)",
                      }}
                    />
                    <Box sx={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                      <Typography variant="h3" sx={{ color: "#fff", mb: 0.5 }}>
                        {leader.name}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" useFlexGap>
                         <Typography sx={{ color: "#a5b4fc",  fontSize: "1rem" }}>
                           {leader.role}
                         </Typography>
                         {leader.location && (
                           <>
                             <Typography sx={{ color: "#fff", opacity: 0.5 }}>•</Typography>
                             <Typography sx={{ color: "#e2e8f0", fontSize: "0.85rem",  }}>
                               {leader.location}
                             </Typography>
                           </>
                         )}
                      </Stack>
                    </Box>
                  </Box>

                  <Box sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Typography sx={{   fontSize: "1.1rem", mb: 3, lineHeight: 1.4 }}>
                      {leader.headline}
                    </Typography>
                    <Typography sx={{  lineHeight: 1.7, mb: 6, flexGrow: 1 }}>
                      {leader.description}
                    </Typography>

                    <Box>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                        {leader.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              bgcolor: "rgba(99,102,241,0.08)",
                              color: "#4f46e5",

                              fontSize: "0.75rem",
                              borderRadius: "24px",
                              mb: 1
                            }}
                          />
                        ))}
                      </Stack>

                      <Stack direction="row" spacing={2} sx={{ pt: 2, borderTop: "1px solid #f1f5f9" }}>
                         <LinkedInIcon sx={{ color: "#64748b", cursor: "pointer", "&:hover": { color: "#0ea5e9" }, transition: "color 0.2s" }} />
                         <EmailIcon sx={{ color: "#64748b", cursor: "pointer", "&:hover": { color: "#0f172a" }, transition: "color 0.2s" }} />
                         <LanguageIcon sx={{ color: "#64748b", cursor: "pointer", "&:hover": { color: "#10b981" }, transition: "color 0.2s" }} />
                      </Stack>
                    </Box>
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Team Credibility Bar */}
        <Box sx={{ mt: { xs: 10, md: 14 } }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography textAlign="center" sx={{ color: "#64748b",  fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", mb: 4 }}>
              Supported by a network of
            </Typography>
            <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={{ xs: 2, md: 3 }}>
              {credibilityBadges.map((badge) => (
                <motion.div
                  key={badge}
                  whileHover={{ y: -3 }}
                  style={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      px: { xs: 2, md: 3 },
                      py: 1.5,
                      bgcolor: "#f8fafc",
                      borderRadius: "100px",
                      border: "1px solid #e2e8f0",
                      color: "#334155",


                      boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: "#ffffff",
                        borderColor: "#cbd5e1",
                        boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
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
