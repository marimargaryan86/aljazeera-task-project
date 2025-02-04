import { actor } from 'codeceptjs';

class BasePage {
  public I = actor();

  private acceptCookiesButton = '#onetrust-accept-btn-handler';

  async acceptCookies() {
      this.I.waitForElement(this.acceptCookiesButton, 5);
      this.I.click(this.acceptCookiesButton);
      this.I.wait(1); 
  }
  
  async open(url: string) {
    this.I.amOnPage(url); 
  }
  
}

export default BasePage;