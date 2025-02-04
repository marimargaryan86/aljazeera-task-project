import BasePage from './base';

class HomePage extends BasePage {
  public I = actor();

  private mostPopularLabel = '#trending-articles-heading';
  private mostPopularPosts = '.trending-articles__list li';
  private whiteSpaceArea = '.bypass-block-links-container';
  private skipToMostRead = 'a[href="#most-read-container"]';
  private mostReadSection = '#most-read-container';

  async openHomePage() {
    this.I.amOnPage("/");
  }

  async verifyMostPopularSectionVisible() {
    this.I.seeElement(this.mostPopularLabel);
  }
  async verifyMostPopularPostsCount(expectedCount:number) {
    this.I.waitForElement(this.mostPopularPosts, 10);
    this.I.seeNumberOfVisibleElements(this.mostPopularPosts, expectedCount);
  }
  
  async clickWhiteSpaceNearLogo() {
    this.I.executeScript((selector) => {
      document.querySelector(selector)?.click();
    }, this.whiteSpaceArea);
  }

  async pressTabToSeeByPassMenu() {
      this.I.pressKey('Tab'); 
  }

  async selectSkipToMostRead() {
    this.I.executeScript((selector) => {
      document.querySelector(selector)?.click();
    }, this.skipToMostRead);
  }

  async verifyMostReadSectionVisible() {
    this.I.seeElement(this.mostReadSection); 
  }

  async verifyMostReadUrlUpdate() {
    const currentUrl = await this.I.grabCurrentUrl(); 
    if (!currentUrl.endsWith('#most-read-container')) {
      throw new Error(`Expected URL to end with "#most-read-container", but got "${currentUrl}"`);
    }
  }
  
  async simulateMobileView() {
    this.I.resizeWindow(375, 812); 
  }

  async verifyMostPopularSectionNotVisible() {
    this.I.dontSeeElement(this.mostPopularLabel); 
  }
}

export default new HomePage();