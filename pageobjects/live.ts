
import BasePage from './base';

class LivePage extends BasePage  {

  public I = actor();

  private livePlayerSelector = '.vjs-tech'; 
  private switchPlayer = "#liveStreamPlayerHelpButton";

  async openLivePage() {
   this.I.amOnPage('/live');
  }

  async verifyPlayerIsVisible() {
    this.I.seeElement(this.livePlayerSelector); 
  }

  async verifySwitchPlayerBtnIsVisible() {
    this.I.seeElement(this.switchPlayer); 
  }

}
export default new LivePage();
