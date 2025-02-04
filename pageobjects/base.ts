import { actor } from 'codeceptjs';

class BasePage {
  public I = actor();

  private acceptCookiesButton = '#onetrust-accept-btn-handler';

  async acceptCookies() {
      this.I.click(this.acceptCookiesButton);
      this.I.dontSeeElement(this.acceptCookiesButton);

  }
  
}

export default BasePage;