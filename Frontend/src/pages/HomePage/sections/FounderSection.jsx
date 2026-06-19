import { useEffect, useRef, useState } from "react";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import img1 from "./cofounder.jpeg";
import img2 from "./IMG-20260619-WA0036.jpg";
import img3 from "./IMG-20260619-WA0010.jpg";

const ceoImages = [img1, img2, img3];

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ceoImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    if (touchStartX.current - touchEndX.current > swipeThreshold) {
      // Swipe left
      setCurrentIndex((prev) => (prev + 1) % ceoImages.length);
    } else if (touchEndX.current - touchStartX.current > swipeThreshold) {
      // Swipe right
      setCurrentIndex((prev) => (prev - 1 + ceoImages.length) % ceoImages.length);
    }
  };

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
              <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 420,
                  mx: "auto",
                  aspectRatio: "4/5",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 24px 48px -12px rgba(15, 23, 42, 0.15)",
                  bgcolor: "#f8fafc",
                  border: "8px solid #ffffff",
                  transition: "box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    boxShadow: "0 32px 64px -12px rgba(15, 23, 42, 0.2)",
                  },
                }}
              >
                {ceoImages.map((imgSrc, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={imgSrc}
                    alt={`K. Tharunkrishna - Image ${index + 1}`}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      opacity: currentIndex === index ? 1 : 0,
                      transition: "opacity 1s ease-in-out, transform 0.8s ease-in-out",
                      transform: isHovered && currentIndex === index ? "scale(1.05)" : "scale(1)",
                      zIndex: currentIndex === index ? 1 : 0,
                    }}
                  />
                ))}

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background: "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 100%)",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                />

                <Chip
                  label="CEO & Founder"
                  size="medium"
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    color: "#0f172a",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    px: 1,
                    zIndex: 3,
                  }}
                />

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 3,
                  }}
                >
                  {ceoImages.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      sx={{
                        width: currentIndex === index ? 24 : 8,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: currentIndex === index ? "#ffffff" : "rgba(255,255,255,0.5)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "#ffffff",
                        },
                      }}
                    />
                  ))}
                </Stack>
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
