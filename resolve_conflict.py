import re

filepath = "Frontend/src/pages/HomePage/sections/InstructorSection.jsx"

with open(filepath, "r") as f:
    content = f.read()

# Replace first conflict block manually
# We want to keep the text from "Updated upstream" (which has the new bio) but make sure it says "Thaksa Ai Career Planet" (it already says "Thaksa AI Career Planet"). We will update it to "Thaksa Ai Career Planet" strictly matching case.
# The stashed changes contained the old bio but with branding applied.
# We'll take the updated upstream bio and apply branding to it.
first_bio_upstream = "Believing that the future belongs to those who continuously learn and adapt, the foundation of Thaksa AI Career Planet is built on empowering individuals through technology and practical innovation. Combining expertise in Cloud Engineering, DevSecOps, Artificial Intelligence, and modern software practices, the goal is to create transformative learning experiences that prepare students for real industry challenges. By fostering curiosity, problem-solving, and hands-on skill development, the mission is to shape the next generation of technology leaders and innovators."

second_bio_upstream = "Believing that every opportunity begins with a meaningful connection, the focus is on building strong relationships that support learning, growth, and career development. Through collaboration with students, academic institutions, and industry partners, efforts are directed toward creating an environment where learners can access valuable resources, guidance, and opportunities that help them succeed in their professional journey."

first_conflict_pattern = re.compile(r'<<<<<<< Updated upstream.*?=======\n.*?\n>>>>>>> Stashed changes', re.DOTALL)

# Let's find matches
matches = first_conflict_pattern.findall(content)
if len(matches) == 2:
    # First match
    content = content.replace(matches[0], first_bio_upstream.replace('Thaksa AI Career Planet', 'Thaksa Ai Career Planet'))
    # Second match
    content = content.replace(matches[1], second_bio_upstream)

with open(filepath, "w") as f:
    f.write(content)
