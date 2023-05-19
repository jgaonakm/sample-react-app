const puppeteer = require('puppeteer');

const name = process.argv[2];



if (!name) {
    throw "Missing image name";
}

url = 'https://' + name + '.website-us-southeast-1.linodeobjects.com';

async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: name +'.png'});
    browser.close();
}
run();