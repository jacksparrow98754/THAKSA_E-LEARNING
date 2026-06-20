import React from "react";
import { Box, Container, Grid, Typography, Stack, Avatar, IconButton } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

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
        py: { xs: 10, md: 15 },
        position: "relative",
        bgcolor: "#e2e8f0", // Slightly darker gray background to match the template
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
              <Typography
                sx={{
                  bgcolor: "rgba(15, 23, 42, 0.05)",


                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 2,
                  display: "inline-block",
                  px: 2,
                  py: 0.5,
                  borderRadius: "12px",
                  bgcolor: "rgba(99, 102, 241, 0.1)",
                }}
              >
                LEADERSHIP TEAM
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{


                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                The Team Behind Student Success
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
              <GlassCard sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", p: { xs: 4, md: 5 } }}>
                <Box sx={{ position: "relative", mb: 3 }}>
                   <Box sx={{ width: 130, height: 130, borderRadius: "50%", border: "4px solid #fdba74", display: "flex", justifyContent: "center", alignItems: "center", p: 0.5 }}>
                     <Avatar
                      sx={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                        fontSize: "2.5rem",
                        fontWeight: 700,
                      }}
                    >
                      PS
                    </Avatar>
                   </Box>
                </Box>

                <Typography variant="h5" sx={{ color: "#1e293b", fontWeight: 500, mb: 2, fontFamily: "'Sora', sans-serif" }}>
                  P. Sadavisha
                </Typography>

                <Typography sx={{ color: "#0f172a", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
                  Business Dev Associate
                </Typography>

                <Typography sx={{ color: "#6366f1", fontWeight: 600, fontSize: "0.95rem", textAlign: "center", mb: 2 }}>
                  Building Industry Connections For Student Growth
                </Typography>

                <Typography sx={{ color: "#64748b", fontStyle: "italic", textAlign: "center", fontSize: "0.85rem", lineHeight: 1.8, mb: 3, flexGrow: 1 }}>
                  Focused on strengthening industry partnerships, student outreach initiatives, workshop coordination, and opportunity creation. Plays a key role in connecting learners with meaningful career pathways and professional development opportunities.
                </Typography>

                <Box sx={{ width: "100%", mt: 2, mb: 3, borderTop: "1px solid rgba(0,0,0,0.05)", pt: 3 }}>
                  <Typography sx={{ color: "#0f172a", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", mb: 2, textAlign: "left" }}>
                    Expertise Areas:
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {["Business Development", "Industry Partnerships", "Workshop Coordination", "Student Engagement", "Career Ecosystem Growth"].map((skill) => (
                      <Box key={skill} sx={{ bgcolor: "rgba(99,102,241,0.05)", color: "#6366f1", px: 1.5, py: 0.5, borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600 }}>
                        {skill}
                      </Box>
                    ))}
                  </Stack>
                </Box>

                <Stack direction="row" spacing={1} mt="auto">
                   <IconButton size="small" sx={{ color: "#0f172a", "&:hover": { color: "#6366f1" } }}>
                      <LinkedInIcon fontSize="small" />
                   </IconButton>
                   <IconButton size="small" sx={{ color: "#0f172a", "&:hover": { color: "#6366f1" } }}>
                      <TwitterIcon fontSize="small" />
                   </IconButton>
                   <IconButton size="small" sx={{ color: "#0f172a", "&:hover": { color: "#6366f1" } }}>
                      <EmailIcon fontSize="small" />
                   </IconButton>
                </Stack>
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
              <GlassCard sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", p: { xs: 4, md: 5 } }}>
                <Box sx={{ position: "relative", mb: 3 }}>
                   <Box sx={{ width: 130, height: 130, borderRadius: "50%", border: "4px solid #fdba74", display: "flex", justifyContent: "center", alignItems: "center", p: 0.5 }}>
                     <Avatar
                      sx={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
                        fontSize: "2.5rem",
                        fontWeight: 700,
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

                <Stack direction="row" spacing={1} mt="auto">
                   <IconButton size="small" sx={{ color: "#0f172a", "&:hover": { color: "#6366f1" } }}>
                      <LinkedInIcon fontSize="small" />
                   </IconButton>
                   <IconButton size="small" sx={{ color: "#0f172a", "&:hover": { color: "#6366f1" } }}>
                      <TwitterIcon fontSize="small" />
                   </IconButton>
                   <IconButton size="small" sx={{ color: "#0f172a", "&:hover": { color: "#6366f1" } }}>
                      <EmailIcon fontSize="small" />
                   </IconButton>
                </Stack>
              </GlassCard>
            </motion.div>
          </Grid>
        </Grid>

        {/* Trust Bar */}
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
