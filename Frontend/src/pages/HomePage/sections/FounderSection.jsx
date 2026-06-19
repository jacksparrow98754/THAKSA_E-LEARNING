import { useEffect, useRef, useState } from "react";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import tharunImg from "./cofounder-tharunkrishna.png";

function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, []);

  return { ref, visible, delay };
}

function RevealBox({ children, delay = 0, direction = "up", sx = {} }) {
  const { ref, visible } = useReveal(delay);
  const transforms = {
    up: visible ? "translateY(0)" : "translateY(48px)",
    left: visible ? "translateX(0)" : "translateX(-56px)",
    right: visible ? "translateX(0)" : "translateX(56px)",
    fade: "none",
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: transforms[direction],
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default function FounderSection() {
  const highlights = [
    "Workshops conducted",
    "CRT training experience",
    "Career mentorship",
    "Industry readiness focus"
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        mb: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #f0f4ff 0%, #fafbff 50%, #f0fdf9 100%)",
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: 4, md: 5 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -60,
          right: -60,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15,118,110,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 5, md: 7 }}>
          <RevealBox direction="up" delay={0}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: "#0f172a",
                mb: 2,
                fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              Meet Our Founder
            </Typography>
          </RevealBox>
        </Box>

        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Mobile: Photo top. Desktop: Photo left. */}
          <Grid size={{ xs: 12, md: 5 }}>
            <RevealBox direction="left" delay={0}>
              <Box sx={{ position: "relative", width: "100%", maxWidth: 380, mx: "auto" }}>
                <Box
                  sx={{
                    width: "100%",
                    paddingBottom: "100%", // Maintain 1:1 aspect ratio
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#6366f1,#7c3aed)",
                    p: "4px",
                    position: "relative",
                    boxShadow: "0 20px 40px rgba(99,102,241,0.2)",
                  }}
                >
                  <Box
                    component="img"
                    src={tharunImg}
                    alt="K. Tharunkrishna - CEO and Founder"
                    sx={{
                      position: "absolute",
                      top: "4px",
                      left: "4px",
                      width: "calc(100% - 8px)",
                      height: "calc(100% - 8px)",
                      borderRadius: "50%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      border: "6px solid #fff",
                    }}
                  />
                </Box>
                <Chip
                  label="CEO & Founder"
                  size="medium"
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: "#6366f1",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
                    px: 1,
                  }}
                />
              </Box>
            </RevealBox>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <RevealBox direction="up" delay={150}>
              <Box>
                <Typography
                  noWrap
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    color: "#0f172a",
                    mb: 0.5,
                    fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                  }}
                >
                  K. Tharunkrishna
                </Typography>
                <Typography
                  sx={{
                    color: "#6366f1",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Visionary & Educator
                </Typography>
                <Typography sx={{ color: "#475569", lineHeight: 1.8, fontSize: "1.1rem", mb: 3 }}>
                  Believing that the future belongs to those who continuously learn and adapt, the foundation of Thaksa Ai Career Planet is built on empowering individuals through technology and practical innovation. Combining expertise in Cloud Engineering, DevSecOps, Artificial Intelligence, and modern software practices, the goal is to create transformative learning experiences that prepare students for real industry challenges.
                </Typography>

                <Stack spacing={1.5} sx={{ mb: 4 }}>
                  {highlights.map((highlight, index) => (
                    <Stack direction="row" alignItems="center" spacing={1.5} key={index}>
                      <CheckCircleRoundedIcon sx={{ color: "#10b981", fontSize: 22 }} />
                      <Typography sx={{ color: "#1e293b", fontWeight: 600, fontSize: "1rem" }}>
                        {highlight}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                  {["Educator", "Technologist", "Mentor"].map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      sx={{
                        bgcolor: "rgba(99,102,241,0.1)",
                        color: "#6366f1",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        border: "1px solid rgba(99,102,241,0.2)",
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </RevealBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
