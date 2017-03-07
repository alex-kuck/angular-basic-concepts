import { AngularBasicConceptsPage } from './app.po';

describe('angular-basic-concepts App', () => {
  let page: AngularBasicConceptsPage;

  beforeEach(() => {
    page = new AngularBasicConceptsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
