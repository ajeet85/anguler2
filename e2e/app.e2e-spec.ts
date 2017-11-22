import { Anguler2dayPage } from './app.po';

describe('anguler2day App', () => {
  let page: Anguler2dayPage;

  beforeEach(() => {
    page = new Anguler2dayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
