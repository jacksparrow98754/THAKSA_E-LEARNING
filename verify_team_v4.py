from playwright.sync_api import sync_playwright
import time
import os

def test_team():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        print("Navigating to local dev server...")
        page.goto("http://localhost:5173/")

        # Scroll to the Leadership Team section using standard scroll
        print("Scrolling down to Leadership Team section...")
        page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.7)")
        time.sleep(2)

        # Take a screenshot
        os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
        page.screenshot(path="/home/jules/verification/screenshots/verification_team_v4.png", full_page=True)
        print("Screenshot saved to /home/jules/verification/screenshots/verification_team_v4.png")

        browser.close()

if __name__ == "__main__":
    test_team()
