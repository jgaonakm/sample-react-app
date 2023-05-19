const puppeteer = require('puppeteer');

const url = process.argv[2];
const name = process.argv[3];

if (!url) {
    throw "Missing url";
}

if (!name) {
    throw "Missing image name";
}

async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: name +'.png'});
    browser.close();
}
run();