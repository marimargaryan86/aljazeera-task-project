
import LivePage from '../pageobjects/live';

Given('I am on the live page', async () => {
  await LivePage.openLivePage();
});

Then('the livestream player should be visible', async () => {
  await LivePage.verifyPlayerIsVisible();
});

Then('the switch player button should be visible', async () => {
  await LivePage.verifySwitchPlayerBtnIsVisible();
});