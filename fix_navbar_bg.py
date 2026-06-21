with open('apps/frontend/src/layout/Navbar.jsx', 'r') as f:
    content = f.read()

# We need to change the initial background color for the workshops page to match the WorkshopsPage background (#020817).
# Wait, actually the instruction was: "In this also mak3 the navbar bg alogned with the worshoppage before scrolling"
# Let's see the WorkshopPage bg. It's COLORS.bgDark which is "#020817".
# Navbar currently sets: bgcolor: scrolled ? "rgba(5, 10, 25, 0.85)" : "transparent"
# On WorkshopPage, the transparent navbar over a full-height dark container might look off or the user specifically wants the initial navbar bg to be "#020817" instead of transparent on the workshop page. Or maybe they just want it to be `#020817` instead of `transparent` or `#050A19`.

# Let's conditionally set it:
# bgcolor: scrolled ? "rgba(5, 10, 25, 0.85)" : (isWorkshopPage ? "#020817" : "transparent")

new_bgcolor = 'bgcolor: scrolled ? "rgba(5, 10, 25, 0.85)" : (isWorkshopPage ? "#020817" : "transparent"),'

content = content.replace(
    'bgcolor: scrolled ? "rgba(5, 10, 25, 0.85)" : "transparent",',
    new_bgcolor
)

with open('apps/frontend/src/layout/Navbar.jsx', 'w') as f:
    f.write(content)
