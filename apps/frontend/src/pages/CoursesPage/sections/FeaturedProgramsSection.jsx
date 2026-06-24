import { useEffect, useState } from "react";
import { Box, Card, CardContent, Container, Grid, Stack, Typography, Skeleton } from "@mui/material";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import { getPublicCourses } from "../../../services/userServices";
import { getCourseRatingSummary } from "../../../services/reviewService";
import RatingStars from "../../../components/RatingStars";
import { Link as RouterLink } from "react-router-dom";

export default function FeaturedProgramsSection() {
  const [courses, setCourses] = useState([]);
  const [ratings, setRatings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchCourses = async () => {
      try {
        const response = await getPublicCourses({ page: 1, limit: 6 });
        if (!active) return;

        const courseList = Array.isArray(response?.courses) ? response.courses : [];
        setCourses(courseList);

        const ratingsData = {};
        await Promise.all(
          courseList.map(async (course) => {
            try {
              const rating = await getCourseRatingSummary(course.id);
              ratingsData[course.id] = {
                average: parseFloat(rating?.average_rating || 0),
                count: parseInt(rating?.total_reviews || 0),
              };
            } catch {
              ratingsData[course.id] = { average: 0, count: 0 };
            }
          })
        );
        if (active) setRatings(ratingsData);
      } catch (err) {
        console.error("Failed to load featured programs", err);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchCourses();
    return () => { active = false; };
  }, []);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020B2D" }}>
      <Container maxWidth="xl">
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
          Featured Programs
        </Typography>

        <Grid container spacing={4}>
          {loading ? (
            Array.from(new Array(3)).map((_, i) => (
              <Grid item xs={12} md={6} lg={4} key={i}>
                <Card sx={{ bgcolor: "rgba(255,255,255,0.03)", borderRadius: "20px" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Skeleton variant="rectangular" height={60} width={60} sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: "12px", mb: 2 }} />
                    <Skeleton variant="text" sx={{ bgcolor: "rgba(255,255,255,0.1)", fontSize: "1.5rem", mb: 1 }} />
                    <Skeleton variant="text" sx={{ bgcolor: "rgba(255,255,255,0.1)", fontSize: "1rem", mb: 2 }} />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : courses.length > 0 ? (
            courses.map((course) => (
              <Grid item xs={12} md={6} lg={4} key={course.id}>
                <Card
                  component={RouterLink}
                  to={`/courses/${course.id}`}
                  sx={{
                    textDecoration: "none",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backdropFilter: "blur(20px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(6, 182, 212, 0.5)",
                      boxShadow: "0 15px 30px -10px rgba(6, 182, 212, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "16px",
                          bgcolor: "rgba(6, 182, 212, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AutoGraphRoundedIcon sx={{ fontSize: 32, color: "#06B6D4" }} />
                      </Box>
                      <Box sx={{ bgcolor: "rgba(255,255,255,0.1)", px: 2, py: 0.5, borderRadius: "100px", height: "fit-content" }}>
                        <Typography sx={{ color: "#F8FAFC", fontSize: "0.75rem", fontWeight: 600 }}>Live</Typography>
                      </Box>
                    </Box>

                    <Typography variant="h5" sx={{ color: "#FFFFFF", fontWeight: 700, mb: 1 }}>
                      {course.title}
                    </Typography>

                    {ratings[course.id] && ratings[course.id].count > 0 && (
                      <Box sx={{ mb: 2 }}>
                        <RatingStars
                          rating={ratings[course.id].average}
                          size="small"
                          showNumber
                          reviewCount={ratings[course.id].count}
                        />
                      </Box>
                    )}

                    <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem", mb: 3, flexGrow: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {course.description}
                    </Typography>

                    <Stack spacing={1.5}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)", pt: 2 }}>
                        <Typography sx={{ color: "#94A3B8", fontSize: "0.85rem" }}>Level</Typography>
                        <Typography sx={{ color: "#F8FAFC", fontSize: "0.9rem", fontWeight: 600 }}>{course.level || "All Levels"}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ color: "#94A3B8", fontSize: "0.85rem" }}>Duration</Typography>
                        <Typography sx={{ color: "#F8FAFC", fontSize: "0.9rem", fontWeight: 600 }}>{"12 Weeks"}</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
             <Grid item xs={12}>
               <Typography sx={{ color: "#94A3B8", textAlign: "center" }}>No featured programs available right now.</Typography>
             </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
