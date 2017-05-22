import { WyfAppPage } from './app.po';

describe('wyf-app App', () => {
  let page: WyfAppPage;

  beforeEach(() => {
    page = new WyfAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
