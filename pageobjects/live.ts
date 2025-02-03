
import BasePage from './base';

class LivePage extends BasePage  {

  private livePlayerSelector = '.vjs-tech'; 
  private switchPlayer = "#liveStreamPlayerHelpButton";

  async openLivePage() {
    await super.open('/live'); 
  }

  async verifyPlayerIsVisible() {
    this.I.waitForVisible(this.livePlayerSelector, 10); 
    this.I.seeElement(this.livePlayerSelector); 
  }

  async verifySwitchPlayerBtnIsVisible() {
    this.I.waitForVisible(this.switchPlayer, 10); 
    this.I.seeElement(this.switchPlayer); 
  }

}
export default new LivePage();
