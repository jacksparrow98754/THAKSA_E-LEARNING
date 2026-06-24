import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

// Placeholder images for the gallery. In a real scenario, use actual classroom/workshop images.
const galleryImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
];

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export default function VisualLearningGallerySection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020B2D", overflow: "hidden" }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: { xs: "30px", md: "42px" },
          fontWeight: 800,
          color: "#FFFFFF",
          mb: { xs: 6, md: 8 },
        }}
      >
        Visual Learning Gallery
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: `${scrollAnimation} 40s linear infinite`,
          "&:hover": {
             animationPlayState: "paused"
          }
        }}
      >
        {/* Double the array to create infinite loop effect */}
        {[...galleryImages, ...galleryImages].map((src, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "280px", md: "400px" },
              height: { xs: "200px", md: "280px" },
              mx: 2,
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
              cursor: "pointer",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              },
              "&:hover img": {
                transform: "scale(1.05)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(2, 11, 45, 0.8) 100%)",
                pointerEvents: "none",
              }
            }}
          >
            <img src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
