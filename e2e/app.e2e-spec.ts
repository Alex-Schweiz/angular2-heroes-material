import { Amgular2ExamplePage } from './app.po';

describe('amgular2-example App', () => {
  let page: Amgular2ExamplePage;

  beforeEach(() => {
    page = new Amgular2ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
