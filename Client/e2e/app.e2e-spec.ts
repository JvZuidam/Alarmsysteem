import { AlarmsysteemPage } from './app.po';

describe('alarmsysteem App', function() {
  let page: AlarmsysteemPage;

  beforeEach(() => {
    page = new AlarmsysteemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
