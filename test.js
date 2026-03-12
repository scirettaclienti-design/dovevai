import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log('PAGE ERROR LOG:', msg.text());
        }
    });
    page.on('pageerror', err => console.log('PAGE UNCAUGHT ERROR:', err.message, err.stack));
    try {
        await page.goto('http://localhost:5175');
        await page.waitForTimeout(3000);
    } catch (e) {
        console.error('Nav error', e);
    }
    await browser.close();
})();
