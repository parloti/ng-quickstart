import { NgQuickstartPage } from './app.po';

describe('ng-quickstart App', () => {
  let page: NgQuickstartPage;

  beforeEach(() => {
    page = new NgQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
