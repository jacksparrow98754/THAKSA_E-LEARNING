import { useEffect, useState } from "react";
import { Box, Button, Container, Stack, Typography, CircularProgress, Chip } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getPublicBatches, enrollBatch } from "../../../services/batchService";
import useToast from "../../../hooks/useToast";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";

export default function BatchesSection() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId") || undefined;
  const { showToast } = useToast();
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrollingId, setEnrollingId] = useState(null);

  useEffect(() => {
    let active = true;
    const fetchBatches = async () => {
      try {
        const response = await getPublicBatches({ limit: 10, courseId });
        if (!active) return;
        const upcomingBatches = (Array.isArray(response?.batches) ? response.batches : [])
          .filter(b => b.status === "upcoming" || b.status === "started")
          .slice(0, 5); // show top 5
        setBatches(upcomingBatches);
      } catch (error) {
        console.error("Failed to load batches", error);
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchBatches();
    return () => { active = false; };
  }, [courseId]);

  const handleEnroll = async (batchId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      setEnrollingId(batchId);
      await enrollBatch(batchId);
      showToast("Enrolled successfully", "success");
    } catch (requestError) {
      showToast(requestError?.response?.data?.message || "Failed to enroll", "error");
    } finally {
      setEnrollingId(null);
    }
  };

  const formatDate = (value) => {
    if (!value) return "TBA";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "TBA";
    return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020617" }} id="batches">
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "30px", md: "42px" },
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            Upcoming Learning Batches
          </Typography>
          <Typography sx={{ color: "#94A3B8", fontSize: "1.1rem", textAlign: "center", maxWidth: "600px" }}>
            Secure your spot in our next cohorts. Limited seats available per batch to ensure personalized attention.
          </Typography>
        </Stack>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress sx={{ color: "#4F46E5" }} />
          </Box>
        ) : batches.length > 0 ? (
          <Stack spacing={3}>
            {batches.map((batch) => (
              <Box
                key={batch.id}
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: "space-between",
                  gap: { xs: 3, md: 4 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.04)",
                    borderColor: "rgba(79, 70, 229, 0.3)",
                  },
                }}
              >
                <Box sx={{ display: "flex", gap: 3, flexGrow: 1, width: { xs: "100%", md: "auto" } }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "12px",
                      bgcolor: "rgba(79, 70, 229, 0.1)",
                      display: { xs: "none", sm: "flex" },
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <EventAvailableRoundedIcon sx={{ color: "#818CF8", fontSize: 28 }} />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <Typography variant="h5" sx={{ color: "#F8FAFC", fontWeight: 700, fontSize: { xs: "1.2rem", md: "1.4rem" } }}>
                        {batch.batch_name}
                      </Typography>
                      <Chip
                        label={batch.status === "upcoming" ? "Filling Fast" : "In Progress"}
                        size="small"
                        sx={{
                          bgcolor: batch.status === "upcoming" ? "rgba(16, 185, 129, 0.1)" : "rgba(245, 158, 11, 0.1)",
                          color: batch.status === "upcoming" ? "#34D399" : "#FBBF24",
                          fontWeight: 600,
                          height: 24,
                        }}
                      />
                    </Stack>
                    <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem", mb: 2, cursor: "pointer", "&:hover": { color: "#818CF8" } }} onClick={() => navigate(`/courses/${batch.course_id}`)}>
                      {batch.course_title}
                    </Typography>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1.5, sm: 4 }} sx={{ color: "#CBD5E1", fontSize: "0.9rem" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <EventAvailableRoundedIcon sx={{ fontSize: 18, color: "#64748B" }} />
                        <Box>Starts: <Typography component="span" sx={{ color: "#F8FAFC", fontWeight: 600 }}>{formatDate(batch.start_date)}</Typography></Box>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                         <GroupRoundedIcon sx={{ fontSize: 18, color: "#64748B" }} />
                         <Box>Seats: <Typography component="span" sx={{ color: "#F8FAFC", fontWeight: 600 }}>{batch.available_seats === null ? "Open" : `${batch.available_seats} Left`}</Typography></Box>
                      </Box>
                    </Stack>
                  </Box>
                </Box>

                <Box sx={{ width: { xs: "100%", md: "auto" } }}>
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={enrollingId === batch.id}
                    onClick={() => handleEnroll(batch.id)}
                    sx={{
                      bgcolor: "#4F46E5",
                      color: "#FFFFFF",
                      px: 4,
                      py: 1.5,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "1rem",
                      whiteSpace: "nowrap",
                      "&:hover": { bgcolor: "#4338CA" },
                    }}
                  >
                    {enrollingId === batch.id ? "Joining..." : "Join Batch"}
                  </Button>
                </Box>
              </Box>
            ))}
          </Stack>
        ) : (
          <Box sx={{ textAlign: "center", py: 8, bgcolor: "rgba(255,255,255,0.02)", borderRadius: "20px", border: "1px dashed rgba(255,255,255,0.1)" }}>
             <Typography sx={{ color: "#94A3B8" }}>No upcoming batches available right now.</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
