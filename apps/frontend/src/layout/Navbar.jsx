import { useMemo, useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import brandLogo from "/new-logo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const baseNavItems = [
  { label: "Home", to: "/" },
  { label: "Workshops", to: "/workshops" },
  { label: "CRT Training", to: "/training" },
];

const homeStickyNavItems = [
  { label: "Home", to: "/" },
  { label: "Workshops", to: "/workshops" },
  { label: "CRT Training", to: "/training" },
];

const workshopStickyNavItems = [
  { label: "Home", to: "/" },
  { label: "Workshops", to: "/workshops" },
];

const projectsStickyNavItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/final-year-projects" },
];

const placementsStickyNavItems = [
  { label: "Home", to: "/" },
  { label: "Placement", to: "/placements" },
];

const trainingPageNavItems = [
  { label: "Home", to: "/" },
  { label: "CRT Training", to: "/training" },
  { label: "Courses", to: "/courses" },
  { label: "Batches", to: "/batches" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const user = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  }, []);
  const token = localStorage.getItem("token");
  const isAuth = Boolean(token);
  const dashboardPath = user?.role === "admin" ? "/admin" : user?.role === "instructor" ? "/instructor" : "/dashboard";
  const isHomePage = location.pathname === "/";
  const isWorkshopPage = location.pathname === "/workshops" || location.pathname.startsWith("/workshops/");
  const isProjectsPage = location.pathname === "/final-year-projects" || location.pathname.startsWith("/final-year-projects/");
  const isPlacementsPage = location.pathname === "/placements" || location.pathname.startsWith("/placements/");
  const isTrainingContext =
    location.pathname === "/training" ||
    location.pathname.startsWith("/training/") ||
    location.pathname === "/courses" ||
    location.pathname.startsWith("/courses/") ||
    location.pathname === "/batches" ||
    location.pathname.startsWith("/batches/") ||
    location.pathname === "/contact" ||
    location.pathname.startsWith("/contact/");
  const isFixedNav = isHomePage || isWorkshopPage || isProjectsPage || isPlacementsPage || isTrainingContext;
  const navItems = isHomePage
    ? homeStickyNavItems
    : isWorkshopPage
      ? workshopStickyNavItems
      : isProjectsPage
        ? projectsStickyNavItems
        : isPlacementsPage
          ? placementsStickyNavItems
    : isTrainingContext
      ? trainingPageNavItems
      : baseNavItems;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <>
      <AppBar
        position={isFixedNav ? "fixed" : "static"}
        elevation={0}
        sx={{
          bgcolor: isHomePage && !scrolled ? "transparent" : (scrolled || !isFixedNav ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.98)"),
          backdropFilter: isHomePage && !scrolled ? "none" : (scrolled || !isFixedNav ? "blur(12px) saturate(180%)" : "none"),
          borderBottom: isHomePage && !scrolled ? "none" : "1px solid",
          borderColor: isHomePage && !scrolled ? "transparent" : (scrolled || !isFixedNav ? "rgba(15, 23, 42, 0.08)" : "transparent"),
          boxShadow: scrolled ? "0 4px 20px -2px rgba(15, 23, 42, 0.05)" : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 1100,
        }}
      >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 }, transition: "min-height 0.3s ease" }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: isHomePage && !scrolled ? "#ffffff" : "#0f172a",
              "&:hover img": {
                transform: "scale(1.05)",
              }
            }}
          >
            <Box
              component="img"
              src={brandLogo}
              alt="ThaksaAi Logo"
              sx={{
                width: { xs: 36, md: 42 },
                height: { xs: 36, md: 42 },
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
              }}
            />
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.45rem" },
                letterSpacing: "-0.03em",

                color: isHomePage && !scrolled ? "#ffffff" : "#0f172a",
                background: isHomePage && !scrolled ? "none" : "linear-gradient(90deg, #0f172a 0%, #334155 100%)",
                WebkitBackgroundClip: isHomePage && !scrolled ? "none" : "text",
                WebkitTextFillColor: isHomePage && !scrolled ? "initial" : "transparent",
              }}
            >
              THAKSAai
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ ml: 6, display: { xs: "none", md: "flex" }, flexGrow: 1 }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                color="inherit"
                disableRipple
                sx={{
                  color: isActive(item.to) ? (isHomePage && !scrolled ? "#ffffff" : "#0f172a") : (isHomePage && !scrolled ? "rgba(255,255,255,0.8)" : "#64748b"),
                  fontWeight: isActive(item.to) ? 700 : 600,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: isHomePage && !scrolled ? "#ffffff" : "#0f172a",
                    bgcolor: isHomePage && !scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(15, 23, 42, 0.04)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={1.5}
            sx={{ ml: "auto", display: { xs: "none", md: isAuth || isTrainingContext ? "flex" : "none" } }}
          >
            {!isAuth ? (
              <>
                <Button
                  component={RouterLink}
                  to="/login"
                  disableRipple
                  sx={{
                    color: isHomePage && !scrolled ? "#ffffff" : "#0f172a",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textTransform: "none",
                    px: 2.5,
                    "&:hover": { bgcolor: isHomePage && !scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(15,23,42,0.04)", borderRadius: "8px" }
                  }}
                >
                  Login
                </Button>
                <Button
                  component={RouterLink}
                  to="/signup"
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: isHomePage && !scrolled ? "#ffffff" : "#0f172a",
                    color: isHomePage && !scrolled ? "#0f172a" : "white",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 3,
                    py: 1,
                    boxShadow: "0 4px 14px 0 rgba(15,23,42,0.15)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: isHomePage && !scrolled ? "rgba(255, 255, 255, 0.9)" : "#1e293b",
                      transform: "translateY(-1px)",
                      boxShadow: "0 6px 20px rgba(15,23,42,0.2)"
                    }
                  }}
                >
                  Start Learning
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to={dashboardPath}
                  sx={{
                    color: isHomePage && !scrolled ? "#ffffff" : "#0f172a",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textTransform: "none",
                    "&:hover": { bgcolor: isHomePage && !scrolled ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.04)", borderRadius: "8px" }
                  }}
                >
                  Dashboard
                </Button>
                <Button
                  onClick={handleLogout}
                  color="error"
                  variant="text"
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": { bgcolor: isHomePage && !scrolled ? "rgba(239,68,68,0.15)" : "rgba(239,68,68,0.04)", borderRadius: "8px" }
                  }}
                >
                  Logout
                </Button>
              </>
            )}
          </Stack>

          <IconButton
            edge="end"
            onClick={() => setMobileOpen(true)}
            sx={{
              ml: "auto",
              display: { xs: "inline-flex", md: "none" },
              color: isHomePage && !scrolled ? "#ffffff" : "#0f172a"
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        SlideProps={{ direction: "left", timeout: 300 }}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 380 },
            borderLeft: "1px solid rgba(15,23,42,0.08)",
            bgcolor: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
          }
        }}
      >
        <Box sx={{ p: { xs: 2, sm: 3 }, height: "100%", display: "flex", flexDirection: "column" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Box
              component={RouterLink}
              to="/"
              onClick={() => setMobileOpen(false)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={brandLogo}
                alt="ThaksaAi Logo"
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  objectFit: "cover",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}
              />
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  color: "#0f172a",

                }}
              >
                THAKSAai
              </Typography>
            </Box>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                bgcolor: "rgba(15,23,42,0.04)",
                "&:hover": { bgcolor: "rgba(15,23,42,0.08)" }
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Stack>

          <Stack spacing={1} sx={{ flexGrow: 1 }}>
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    justifyContent: "flex-start",
                    color: active ? "#0f172a" : "#475569",
                    bgcolor: active ? "rgba(15,23,42,0.04)" : "transparent",
                    fontWeight: active ? 700 : 500,
                    fontSize: "1.1rem",
                    textTransform: "none",
                    py: 1.5,
                    px: 2.5,
                    borderRadius: "12px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "rgba(15,23,42,0.06)",
                      color: "#0f172a",
                      transform: "translateX(4px)"
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>

          <Box sx={{ mt: 'auto', pt: 4 }}>
            <Stack spacing={2} sx={{ display: isAuth || isTrainingContext ? "flex" : "none" }}>
              {!isAuth ? (
                <>
                  <Button
                    component={RouterLink}
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    fullWidth
                    sx={{
                      color: "#0f172a",
                      bgcolor: "rgba(15,23,42,0.04)",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "rgba(15,23,42,0.08)" },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/signup"
                    variant="contained"
                    fullWidth
                    disableElevation
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      bgcolor: "#0f172a",
                      color: "white",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      boxShadow: "0 4px 14px 0 rgba(15,23,42,0.15)",
                      "&:hover": { bgcolor: "#1e293b" },
                    }}
                  >
                    Start Learning
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={RouterLink}
                    to={dashboardPath}
                    onClick={() => setMobileOpen(false)}
                    variant="contained"
                    fullWidth
                    disableElevation
                    sx={{
                      bgcolor: "#0f172a",
                      color: "white",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "#1e293b" },
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button
                    color="error"
                    fullWidth
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                    sx={{
                      bgcolor: "rgba(239,68,68,0.04)",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "rgba(239,68,68,0.08)" }
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
      {isFixedNav && !isHomePage && <Toolbar sx={{ minHeight: { xs: 70, md: 80 } }} />}
    </>
  );
}
