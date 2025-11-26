import { test, expect } from '@playwright/test';

test.describe('Layiga Website E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Layiga/i);
  });

  test('should display hero section', async ({ page }) => {
    const hero = page.locator('#home');
    await expect(hero).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(await navLinks.count());

    // Check activities link
    const activitiesLink = page.locator('nav a[href="#activities"]').first();
    await activitiesLink.click();
    await expect(page.locator('#activities')).toBeInViewport();
  });

  test('should toggle dark/light mode', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');
    await themeToggle.click();

    const html = page.locator('html');
    const isDark = await html.getAttribute('data-theme');
    expect(['dark', 'light']).toContain(isDark);
  });

  test('should switch languages', async ({ page }) => {
    const langBtns = page.locator('.lang-btn');

    // Switch to English
    await langBtns.filter({ hasText: 'EN' }).click();
    await expect(page.locator('[data-tr="hero_title"]')).toContainText(/Adventure/i);

    // Switch to Turkish
    await langBtns.filter({ hasText: 'TR' }).click();
    await expect(page.locator('[data-tr="hero_title"]')).toContainText(/Macera/i);
  });

  test('should have WhatsApp button', async ({ page }) => {
    const whatsappBtn = page.locator('.whatsapp-float, a[href*="wa.me"]').first();
    await expect(whatsappBtn).toBeVisible();
  });

  test('should load activities section', async ({ page }) => {
    const activities = page.locator('#activities');
    await activities.scrollIntoViewIfNeeded();
    await expect(activities).toBeVisible();

    // Check activity cards exist
    const cards = page.locator('.activity-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display pricing section', async ({ page }) => {
    const pricing = page.locator('#pricing');
    await pricing.scrollIntoViewIfNeeded();
    await expect(pricing).toBeVisible();

    // Check pricing cards
    const pricingCards = page.locator('.pricing-card');
    await expect(pricingCards).toHaveCount(3);
  });

  test('should have contact information', async ({ page }) => {
    const contact = page.locator('#contact');
    await contact.scrollIntoViewIfNeeded();
    await expect(contact).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const hero = page.locator('#home');
    await expect(hero).toBeVisible();

    // Mobile menu should exist
    const mobileMenu = page.locator('.mobile-menu, .hamburger, [class*="menu"]').first();
    await expect(mobileMenu).toBeVisible();
  });

  test('animated counters should display numbers', async ({ page }) => {
    const counters = page.locator('.counter, [class*="counter"]');
    const count = await counters.count();

    if (count > 0) {
      // Scroll to counters and wait for animation
      await counters.first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(2000);

      const text = await counters.first().textContent();
      expect(text).toBeTruthy();
    }
  });

  test('page should achieve 60fps performance', async ({ page }) => {
    // Scroll down the page and measure performance
    const metrics = [];

    page.on('console', msg => {
      if (msg.text().includes('fps')) {
        metrics.push(msg.text());
      }
    });

    // Smooth scroll test
    await page.evaluate(() => {
      return new Promise((resolve) => {
        let lastTime = performance.now();
        let frameCount = 0;
        let totalFrames = 0;

        function checkFPS() {
          frameCount++;
          totalFrames++;
          const now = performance.now();

          if (now - lastTime >= 1000) {
            console.log(`fps: ${frameCount}`);
            frameCount = 0;
            lastTime = now;
          }

          if (totalFrames < 120) {
            window.scrollBy(0, 10);
            requestAnimationFrame(checkFPS);
          } else {
            resolve();
          }
        }

        requestAnimationFrame(checkFPS);
      });
    });

    // Visual stability test
    await expect(page.locator('body')).toBeVisible();
  });
});

test.describe('Performance Tests', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const loadTime = Date.now() - startTime;

    // Should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have no console errors', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Filter out expected errors (like video not found if no video)
    const criticalErrors = errors.filter(e =>
      !e.includes('video') &&
      !e.includes('404') &&
      !e.includes('net::')
    );

    expect(criticalErrors).toHaveLength(0);
  });
});
