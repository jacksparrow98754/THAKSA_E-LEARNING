import re

with open('apps/frontend/src/pages/WorkshopPage/WorkshopPage.jsx', 'r') as f:
    content = f.read()

# Fix Grid item xs={X} md={Y} -> Grid size={{ xs: X, md: Y }}
def repl_grid(match):
    attrs = match.group(1)
    # Extract xs, sm, md, lg
    sizes = []

    xs_match = re.search(r'xs={(\d+)}', attrs)
    if xs_match: sizes.append(f"xs: {xs_match.group(1)}")
    else:
        xs_str_match = re.search(r'xs="([^"]+)"', attrs)
        if xs_str_match: sizes.append(f"xs: '{xs_str_match.group(1)}'")

    sm_match = re.search(r'sm={(\d+)}', attrs)
    if sm_match: sizes.append(f"sm: {sm_match.group(1)}")

    md_match = re.search(r'md={(\d+)}', attrs)
    if md_match: sizes.append(f"md: {md_match.group(1)}")

    lg_match = re.search(r'lg={(\d+)}', attrs)
    if lg_match: sizes.append(f"lg: {lg_match.group(1)}")

    if sizes:
        size_str = ", ".join(sizes)
        return f'<Grid size={{{{ {size_str} }}}}'
    return match.group(0)

# Replace Grid item attributes
content = re.sub(r'<Grid item (xs={\d+}.*?)>', repl_grid, content)
content = re.sub(r'<Grid item (xs={\d+})>', repl_grid, content)
# Also fix any Grid item without sizes? No, usually they have xs.
content = re.sub(r'<Grid item>', r'<Grid>', content)
content = re.sub(r'<Grid item\s*>', r'<Grid>', content)

with open('apps/frontend/src/pages/WorkshopPage/WorkshopPage.jsx', 'w') as f:
    f.write(content)
