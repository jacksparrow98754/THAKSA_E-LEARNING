import { useEffect, useRef, useState } from "react";
import { Box, Chip, Container, Grid, Stack, Typography, Card, CardContent, IconButton } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';

// Images
import tharunImg1 from "./IMG-20260619-WA0010.jpg";
import tharunImg2 from "./IMG-20260619-WA0036.jpg";
import tharunImg3 from "./cofounder.jpeg";
import sadavishaImg from "./cto-sadvisha-reddy.png";
import madhukarImg from "./profile.jpeg";

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

// Custom Image Gallery Component for CEO
function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%", minHeight: {xs: 300, md: 500}, borderRadius: { xs: 4, md: 6 }, overflow: "hidden", boxShadow: "0 24px 48px -12px rgba(0,0,0,0.18)" }}>
      {images.map((img, idx) => (
        <Box
          key={idx}
          component="img"
          src={img}
          alt={`Gallery image ${idx + 1}`}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: currentIndex === idx ? 1 : 0,
            transition: "opacity 0.6s ease-in-out, transform 6s ease-out",
            transform: currentIndex === idx ? "scale(1.05)" : "scale(1)",
            zIndex: currentIndex === idx ? 1 : 0,
          }}
        />
      ))}

      {/* Navigation Buttons */}
      <Box sx={{ position: "absolute", bottom: 16, right: 16, zIndex: 10, display: "flex", gap: 1 }}>
        <IconButton onClick={handlePrev} sx={{ bgcolor: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", '&:hover': { bgcolor: "rgba(255,255,255,0.9)" } }}>
          <ArrowBackIosRoundedIcon sx={{ fontSize: 16, color: "#0f172a" }} />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ bgcolor: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", '&:hover': { bgcolor: "rgba(255,255,255,0.9)" } }}>
          <ArrowForwardIosRoundedIcon sx={{ fontSize: 16, color: "#0f172a" }} />
        </IconButton>
      </Box>

      {/* Indicators */}
      <Box sx={{ position: "absolute", bottom: 24, left: 24, zIndex: 10, display: "flex", gap: 1 }}>
        {images.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            sx={{
              width: currentIndex === idx ? 24 : 8,
              height: 8,
              borderRadius: 4,
              bgcolor: currentIndex === idx ? "#fff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>

      {/* Overlays */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 30%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
    </Box>
  );
}

export default function LeadershipSection() {
  const tharunImages = [tharunImg1, tharunImg2, tharunImg3];

  const tharunHighlights = [
    "Workshops",
    "CRT Training",
    "Career Mentorship",
    "Technology Education",
    "Industry Readiness"
  ];

  const sadavishaHighlights = [
    "Student Engagement",
    "Industry Partnerships",
    "Career Opportunities",
    "Program Coordination"
  ];

  const madhukarHighlights = [
    "Business Operations",
    "Strategic Growth",
    "Industry Advisory",
    "Global Technology Insights"
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        mb: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Elements */}
      <Box sx={{ position: "absolute", top: -100, left: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: -150, right: -150, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={{ xs: 8, md: 12 }} maxWidth={800} mx="auto">
          <RevealBox direction="up" delay={0}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "#0f172a",
                mb: 3,
                fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                letterSpacing: "-0.02em",
              }}
            >
              Meet The Leadership Team
            </Typography>
            <Typography
              sx={{
                color: "#475569",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                lineHeight: 1.7,
                maxWidth: "800px",
                mx: "auto"
              }}
            >
              Learn from experienced professionals committed to helping students become industry-ready through workshops, CRT training, mentorship, and career guidance.
            </Typography>
          </RevealBox>
        </Box>

        {/* CEO Featured Layout */}
        <Box mb={{ xs: 10, md: 16 }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            {/* Gallery Side */}
            <Grid size={{ xs: 12, md: 5 }}>
              <RevealBox direction="left" delay={0}>
                <ImageGallery images={tharunImages} />
              </RevealBox>
            </Grid>

            {/* Profile Side */}
            <Grid size={{ xs: 12, md: 7 }}>
              <RevealBox direction="right" delay={150}>
                <Box sx={{ pl: { md: 4 } }}>
                  <Chip
                    icon={<WorkspacePremiumRoundedIcon sx={{ fontSize: '1.2rem !important' }}/>}
                    label="CEO & Co-Founder"
                    sx={{
                      mb: 3,
                      bgcolor: "rgba(99,102,241,0.1)",
                      color: "#4f46e5",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      px: 1,
                      py: 2,
                      borderRadius: 2,
                      border: "1px solid rgba(99,102,241,0.2)"
                    }}
                  />

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "#0f172a",
                      mb: 2,
                      fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                      fontSize: { xs: "2rem", md: "2.75rem" },
                      letterSpacing: "-0.01em"
                    }}
                  >
                    K. Tharun Krishna
                  </Typography>

                  <Typography sx={{ color: "#334155", lineHeight: 1.8, fontSize: "1.1rem", mb: 4 }}>
                    Believing that the future belongs to those who continuously learn and adapt, the foundation of Thaksa Ai Career Planet is built on empowering individuals through technology and practical innovation. Combining expertise in Cloud Engineering, DevSecOps, Artificial Intelligence, and modern software practices, the goal is to create transformative learning experiences that prepare students for real industry challenges.
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 2, fontSize: "1.1rem" }}>
                      Areas of Responsibility
                    </Typography>
                    <Grid container spacing={2}>
                      {tharunHighlights.map((highlight, index) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={index}>
                          <Stack direction="row" alignItems="center" spacing={1.5}>
                            <CheckCircleRoundedIcon sx={{ color: "#10b981", fontSize: 20 }} />
                            <Typography sx={{ color: "#475569", fontWeight: 500, fontSize: "1rem" }}>
                              {highlight}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                    {["Educator", "Technologist", "Mentor", "Visionary"].map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{
                          bgcolor: "#fff",
                          color: "#64748b",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          border: "1px solid #e2e8f0",
                          boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </RevealBox>
            </Grid>
          </Grid>
        </Box>

        {/* Other Leaders */}
        <Box>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* P. Sadavisha */}
            <Grid size={{ xs: 12, md: 6 }}>
              <RevealBox direction="up" delay={200} sx={{ height: "100%" }}>
                <Card sx={{ height: "100%", borderRadius: 4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)", transition: "transform 0.3s, box-shadow 0.3s", '&:hover': { transform: "translateY(-8px)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <Box sx={{ height: 250, overflow: "hidden", position: "relative" }}>
                    <Box component="img" src={sadavishaImg} alt="P. Sadavisha" sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                    <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                    <Box sx={{ position: "absolute", bottom: 16, left: 24 }}>
                      <Typography variant="h4" sx={{ color: "#fff", fontWeight: 700, fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif" }}>P. Sadavisha</Typography>
                      <Typography sx={{ color: "#e2e8f0", fontWeight: 500 }}>Business Development Associate</Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 2 }}>Responsibilities</Typography>
                      <Stack spacing={1.5}>
                        {sadavishaHighlights.map((highlight, index) => (
                          <Stack direction="row" alignItems="center" spacing={1.5} key={index}>
                            <CheckCircleRoundedIcon sx={{ color: "#10b981", fontSize: 18 }} />
                            <Typography sx={{ color: "#475569", fontWeight: 500, fontSize: "0.95rem" }}>{highlight}</Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </RevealBox>
            </Grid>

            {/* Dr. Madhukar Reddy */}
            <Grid size={{ xs: 12, md: 6 }}>
              <RevealBox direction="up" delay={300} sx={{ height: "100%" }}>
                <Card sx={{ height: "100%", borderRadius: 4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)", transition: "transform 0.3s, box-shadow 0.3s", '&:hover': { transform: "translateY(-8px)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <Box sx={{ height: 250, overflow: "hidden", position: "relative" }}>
                    <Box component="img" src={madhukarImg} alt="Dr. Madhukar Reddy" sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                    <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                    <Box sx={{ position: "absolute", bottom: 16, left: 24 }}>
                      <Typography variant="h4" sx={{ color: "#fff", fontWeight: 700, fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif" }}>Dr. Madhukar Reddy</Typography>
                      <Typography sx={{ color: "#e2e8f0", fontWeight: 500 }}>Head of Business Operations</Typography>
                    </Box>
                    <Chip label="California, USA" size="small" sx={{ position: "absolute", top: 16, right: 16, bgcolor: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", color: "#fff", fontWeight: 600 }} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                      {["Cybersecurity Expert", "Former IBM", "Former John Deere"].map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ bgcolor: "rgba(15,118,110,0.1)", color: "#0f766e", fontWeight: 600, borderRadius: 1 }} />
                      ))}
                    </Stack>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 2 }}>Responsibilities</Typography>
                      <Stack spacing={1.5}>
                        {madhukarHighlights.map((highlight, index) => (
                          <Stack direction="row" alignItems="center" spacing={1.5} key={index}>
                            <CheckCircleRoundedIcon sx={{ color: "#10b981", fontSize: 18 }} />
                            <Typography sx={{ color: "#475569", fontWeight: 500, fontSize: "0.95rem" }}>{highlight}</Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </RevealBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
