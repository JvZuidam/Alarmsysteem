import { AlarmsysteemClientPage } from './app.po';

describe('alarmsysteem-client App', function() {
  let page: AlarmsysteemClientPage;

  beforeEach(() => {
    page = new AlarmsysteemClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
