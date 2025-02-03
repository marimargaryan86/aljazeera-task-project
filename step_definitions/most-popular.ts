const { I } = inject();
import HomePage from '../pageobjects/home';

Given('I am on the homepage', async () => {
  await HomePage.openHomePage();
});

Then('I should see the "Most popular" section', async () => {
  await HomePage.verifyMostPopularSectionVisible();
});

Then('The "Most popular" section should have 10 posts', async () => {
  await HomePage.verifyMostPopularPostsCount(10);
});

When('I click on the whitespace near the logo', async () => {
  await HomePage.clickWhiteSpaceNearLogo();
});

When('I press the TAB key until "Skip to Most Read" is visible', async () => {
  await HomePage.pressTabKeyUntilVisible();
});

When('I click the "Skip to Most Read" option', async () => {
  await HomePage.selectSkipToMostRead();
});

Then('the "Most Read" section should be visible', async () => {
  await HomePage.verifyMostReadSectionVisible();
});

Then('the URL should append "most-read-container"', async () => {
  await HomePage.verifyMostReadUrlUpdate();
  pause();
});

When('I simulate a mobile view', async () => {
  await HomePage.simulateMobileView();
});

Then('the "Most popular" section should not be visible', async () => {
  await HomePage.verifyMostPopularSectionNotVisible();
});
