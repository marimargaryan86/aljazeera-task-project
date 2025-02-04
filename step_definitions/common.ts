import BasePage from '../pageobjects/base';
let cookiesAccepted = false;

Given('Accepting cookies', async () => {
  if (!cookiesAccepted)
  {
    const basePage = new BasePage(); 
    await basePage.acceptCookies(); 
    cookiesAccepted = true;
  }
});




