import re

with open("apps/frontend/src/layout/Navbar.jsx", "r") as f:
    content = f.read()

# Update scroll trigger
content = content.replace("setScrolled(window.scrollY > 20);", "setScrolled(window.scrollY > 50);")

# Update AppBar styles
app_bar_search = """      <AppBar
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
      >"""
app_bar_replace = """      <AppBar
        position={isFixedNav ? "fixed" : "static"}
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(5, 10, 25, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          transition: "all 300ms ease",
          zIndex: 1100,
        }}
      >"""
content = content.replace(app_bar_search, app_bar_replace)

# Update Toolbar heights
content = content.replace("minHeight: { xs: 70, md: 80 }", "minHeight: { xs: 64, md: 72 }")

# Desktop Logo Typography
desktop_logo_search = """            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.45rem" },
                letterSpacing: "-0.03em",
                fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                color: isHomePage && !scrolled ? "#ffffff" : "#0f172a",
                background: isHomePage && !scrolled ? "none" : "linear-gradient(90deg, #0f172a 0%, #334155 100%)",
                WebkitBackgroundClip: isHomePage && !scrolled ? "none" : "text",
                WebkitTextFillColor: isHomePage && !scrolled ? "initial" : "transparent",
              }}
            >"""
desktop_logo_replace = """            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.45rem" },
                letterSpacing: "-0.04em",
                fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                color: "#FFFFFF",
              }}
            >"""
content = content.replace(desktop_logo_search, desktop_logo_replace)

# Desktop Nav Items
desktop_nav_search = """              <Button
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
              >"""
desktop_nav_replace = """              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                color="inherit"
                disableRipple
                sx={{
                  color: isActive(item.to) ? "#FFFFFF" : "rgba(255, 255, 255, 0.75)",
                  fontWeight: 500,
                  fontSize: "15px",
                  textTransform: "none",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#A78BFA",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >"""
content = content.replace(desktop_nav_search, desktop_nav_replace)

# Login Button Desktop
login_desktop_search = """                <Button
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
                </Button>"""
login_desktop_replace = """                <Button
                  component={RouterLink}
                  to="/login"
                  disableRipple
                  sx={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontWeight: 500,
                    fontSize: "15px",
                    textTransform: "none",
                    px: 2.5,
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#FFFFFF", bgcolor: "rgba(255, 255, 255, 0.05)" }
                  }}
                >
                  Login
                </Button>"""
content = content.replace(login_desktop_search, login_desktop_replace)

# Start Learning Desktop
start_desktop_search = """                <Button
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
                </Button>"""
start_desktop_replace = """                <Button
                  component={RouterLink}
                  to="/signup"
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: "#FFFFFF",
                    color: "#0F172A",
                    fontWeight: 600,
                    fontSize: "15px",
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 3,
                    py: 1,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      transform: "translateY(-1px)",
                    }
                  }}
                >
                  Start Learning
                </Button>"""
content = content.replace(start_desktop_search, start_desktop_replace)

# Dashboard Button Desktop
dashboard_desktop_search = """                <Button
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
                </Button>"""
dashboard_desktop_replace = """                <Button
                  component={RouterLink}
                  to={dashboardPath}
                  sx={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontWeight: 500,
                    fontSize: "15px",
                    textTransform: "none",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.05)" }
                  }}
                >
                  Dashboard
                </Button>"""
content = content.replace(dashboard_desktop_search, dashboard_desktop_replace)

# Logout Button Desktop
logout_desktop_search = """                <Button
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
                </Button>"""
logout_desktop_replace = """                <Button
                  onClick={handleLogout}
                  color="error"
                  variant="text"
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": { bgcolor: "rgba(239,68,68,0.15)" }
                  }}
                >
                  Logout
                </Button>"""
content = content.replace(logout_desktop_search, logout_desktop_replace)

# Mobile Menu Icon
mobile_menu_search = """          <IconButton
            edge="end"
            onClick={() => setMobileOpen(true)}
            sx={{
              ml: "auto",
              display: { xs: "inline-flex", md: "none" },
              color: isHomePage && !scrolled ? "#ffffff" : "#0f172a"
            }}
          >
            <MenuRoundedIcon />
          </IconButton>"""
mobile_menu_replace = """          <IconButton
            edge="end"
            onClick={() => setMobileOpen(true)}
            sx={{
              ml: "auto",
              display: { xs: "inline-flex", md: "none" },
              color: "#ffffff",
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.2s ease",
              "&:hover": {
                background: "rgba(255,255,255,0.1)",
                boxShadow: "0 0 10px rgba(255,255,255,0.1)",
              }
            }}
          >
            <MenuRoundedIcon />
          </IconButton>"""
content = content.replace(mobile_menu_search, mobile_menu_replace)

# Mobile Drawer Settings
drawer_search = """        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 380 },
            borderLeft: "1px solid rgba(15,23,42,0.08)",
            bgcolor: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
          }
        }}"""
drawer_replace = """        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 380 },
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            bgcolor: "rgba(5,10,25,0.98)",
            backdropFilter: "blur(30px)",
          }
        }}"""
content = content.replace(drawer_search, drawer_replace)

# Drawer Logo Link / Typography
drawer_logo_search = """              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  color: "#0f172a",
                  fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                }}
              >"""
drawer_logo_replace = """              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  color: "#FFFFFF",
                  fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >"""
content = content.replace(drawer_logo_search, drawer_logo_replace)

# Drawer Close Button
drawer_close_search = """            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                bgcolor: "rgba(15,23,42,0.04)",
                "&:hover": { bgcolor: "rgba(15,23,42,0.08)" }
              }}
            >
              <CloseRoundedIcon />
            </IconButton>"""
drawer_close_replace = """            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                color: "rgba(255,255,255,0.75)",
                bgcolor: "rgba(255,255,255,0.05)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", color: "#FFFFFF" }
              }}
            >
              <CloseRoundedIcon />
            </IconButton>"""
content = content.replace(drawer_close_search, drawer_close_replace)

# Mobile Menu Items
mobile_nav_search = """                  sx={{
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
                  }}"""
mobile_nav_replace = """                  sx={{
                    justifyContent: "flex-start",
                    color: active ? "#FFFFFF" : "rgba(255,255,255,0.75)",
                    bgcolor: active ? "rgba(255,255,255,0.05)" : "transparent",
                    fontWeight: active ? 600 : 500,
                    fontSize: "1.1rem",
                    textTransform: "none",
                    py: 1.5,
                    px: 2.5,
                    borderRadius: "12px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.05)",
                      color: "#FFFFFF",
                      transform: "translateX(4px)"
                    },
                  }}"""
content = content.replace(mobile_nav_search, mobile_nav_replace)

# Mobile Login Button
mobile_login_search = """                  <Button
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
                  </Button>"""
mobile_login_replace = """                  <Button
                    component={RouterLink}
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    fullWidth
                    sx={{
                      color: "rgba(255,255,255,0.9)",
                      bgcolor: "rgba(255,255,255,0.05)",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    Login
                  </Button>"""
content = content.replace(mobile_login_search, mobile_login_replace)

# Mobile Start Learning Button
mobile_start_search = """                  <Button
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
                  </Button>"""
mobile_start_replace = """                  <Button
                    component={RouterLink}
                    to="/signup"
                    variant="contained"
                    fullWidth
                    disableElevation
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      bgcolor: "#FFFFFF",
                      color: "#0F172A",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                    }}
                  >
                    Start Learning
                  </Button>"""
content = content.replace(mobile_start_search, mobile_start_replace)

# Mobile Dashboard Button
mobile_dashboard_search = """                  <Button
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
                  </Button>"""
mobile_dashboard_replace = """                  <Button
                    component={RouterLink}
                    to={dashboardPath}
                    onClick={() => setMobileOpen(false)}
                    variant="contained"
                    fullWidth
                    disableElevation
                    sx={{
                      bgcolor: "rgba(255,255,255,0.05)",
                      color: "#FFFFFF",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    Dashboard
                  </Button>"""
content = content.replace(mobile_dashboard_search, mobile_dashboard_replace)

# Mobile Logout Button
mobile_logout_search = """                  <Button
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
                  </Button>"""
mobile_logout_replace = """                  <Button
                    color="error"
                    fullWidth
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                    sx={{
                      bgcolor: "rgba(239,68,68,0.1)",
                      fontSize: "1.05rem",
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": { bgcolor: "rgba(239,68,68,0.2)" }
                    }}
                  >
                    Logout
                  </Button>"""
content = content.replace(mobile_logout_search, mobile_logout_replace)

# Header Icon hover link update
logo_link_search = """          <Box
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
          >"""
logo_link_replace = """          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "#FFFFFF",
              "&:hover img": {
                transform: "scale(1.05)",
              }
            }}
          >"""
content = content.replace(logo_link_search, logo_link_replace)

with open("apps/frontend/src/layout/Navbar.jsx", "w") as f:
    f.write(content)
