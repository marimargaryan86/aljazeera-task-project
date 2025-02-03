import { actor } from 'codeceptjs';

class BasePage {
  public I = actor();

  private acceptCookiesButton = '#onetrust-accept-btn-handler';

  async acceptCookies() {
    const isCookieBannerVisible = await this.I.grabNumberOfVisibleElements(this.acceptCookiesButton);
    
    if (isCookieBannerVisible > 0) { 
      this.I.waitForElement(this.acceptCookiesButton, 5);
      this.I.click(this.acceptCookiesButton);
    }
  }
  

  async open(url: string) {
    this.I.amOnPage(url); 
    await this.acceptCookies(); 
  }
  
}

export default BasePage;