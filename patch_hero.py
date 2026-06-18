import re

with open("Frontend/src/pages/HomePage/sections/HeroSection.jsx", "r") as f:
    content = f.read()

# Change pt
content = content.replace("pt: { xs: 4, sm: 6, md: 14 },", "pt: { xs: 4, sm: 5, md: 8 },")

# Change md: 7 to md: 12 and center
content = content.replace(
    '<Grid size={{ xs: 12, md: 7 }} sx={{ position: "relative", zIndex: 2, textAlign: { xs: "center", md: "left" } }}>',
    '<Grid size={{ xs: 12, md: 12 }} sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>'
)

# Change description mx
content = content.replace(
    'maxWidth: 600, mx: { xs: "auto", md: 0 },',
    'maxWidth: 600, mx: "auto",'
)

# Change stack alignment
content = content.replace(
    '<Stack\n              direction={{ xs: "column", sm: "row" }}\n              spacing={2}\n              sx={{',
    '<Stack\n              direction={{ xs: "column", sm: "row" }}\n              spacing={2}\n              justifyContent="center"\n              sx={{'
)

# Change trust indicators centering
content = content.replace(
    '<Grid container spacing={2}>',
    '<Grid container spacing={2} justifyContent="center">'
)
content = content.replace(
    '<Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>',
    '<Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx} sx={{ display: "flex", justifyContent: "center" }}>'
)

with open("Frontend/src/pages/HomePage/sections/HeroSection.jsx", "w") as f:
    f.write(content)
