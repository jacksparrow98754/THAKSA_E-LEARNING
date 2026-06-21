with open('apps/frontend/src/pages/WorkshopPage/WorkshopPage.jsx', 'r') as f:
    content = f.read()

# I used sed to replace <Grid item xs=... md=...> with <Grid size={{ xs: ..., md: ... }} but left the rest of the tag untouched.
# However, if it didn't end with a closing bracket (>), it might be missing one.
# Let's fix the specific instances.
import re

content = re.sub(r'<Grid size={{ xs: (\d+), md: (\d+) }}\n', r'<Grid size={{ xs: \1, md: \2 }}>\n', content)

with open('apps/frontend/src/pages/WorkshopPage/WorkshopPage.jsx', 'w') as f:
    f.write(content)
