import { NgTaskListPage } from './app.po';

describe('ng-task-list App', () => {
  let page: NgTaskListPage;

  beforeEach(() => {
    page = new NgTaskListPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
