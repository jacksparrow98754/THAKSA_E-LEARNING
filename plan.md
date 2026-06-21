1. **Redesign `apps/frontend/src/layout/Navbar.jsx`**:
   - Update `useEffect` to trigger `scrolled` state when `window.scrollY > 50`.
   - Update `AppBar` styling to reflect the initial state (`transparent`, `blur(10px)`) and the scrolled state (`rgba(5, 10, 25, 0.85)`, `blur(20px)`, bottom border).
   - Adjust `Toolbar` heights to 72px for Desktop and 64px for Mobile.
   - Restyle the logo text (`Typography`) to use `fontWeight: 700`, `letterSpacing: "-0.04em"`, and solid white color.
   - Update the desktop navigation links to use `rgba(255, 255, 255, 0.75)` by default, `#FFFFFF` when active, and `#A78BFA` on hover. Use 15px font size and `fontWeight: 500`.
   - Update the mobile menu toggle button to be a 42x42px container with `rgba(255,255,255,0.05)` background and a subtle glow on hover.
   - Redesign the mobile `Drawer` to have a dark background (`rgba(5, 10, 25, 0.98)`) with `blur(30px)`. Make the mobile menu items and action buttons match the dark premium SaaS aesthetic.
2. **Pre-commit Steps**:
   - Execute the standard testing and verification commands.
3. **Submit the changes**.
