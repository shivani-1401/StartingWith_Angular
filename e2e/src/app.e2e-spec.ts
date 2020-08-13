import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('the heading H1 content should be Registration details', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Registration details');
  });

  it('check the content of all the rows', () => {
    page.navigateTo();
    expect(page.getContentOfAllTheRows()).toEqual([ '1', 'Raghav', 'Singh', 'A/22 Gaziabad', 'raghavsingh@gmail.com', 'raghav@123', 'Male', '22-Aug-1990', '2', 'Sujit', 'Kumar', 'Kanpur', 'sujitkumar@rediffmail.com', 'sujitkumar@123', 'Male', '12-Nov-1981', '4', 'Murali', 'Naidu', 'Chennai', 'muralinaidu@gmail.com', 'muralinaidu@123', 'Male', '05-Jun-1989' ]);
  }); 
  it('check the content of  the first row', () => {
    page.navigateTo();
    expect(page.getContentOfFirstRow()).toEqual('1 Raghav Singh A/22 Gaziabad raghavsingh@gmail.com raghav@123 Male 22-Aug-1990');
  }); 

  it('check the content of  the last row', () => {
    page.navigateTo();
    expect(page.getContentOfLastRow()).toEqual('4 Murali Naidu Chennai muralinaidu@gmail.com muralinaidu@123 Male 05-Jun-1989');
  }); 


  it('h1 tag should be present to display the heading for the details',()=>{
    page.navigateTo();
    expect(page.getHeaderH1()).toBeTruthy();
  
  });
  it('h1 tag count should be 1',()=>{
    page.navigateTo();
    expect(page.getHeaderH1count()).toBe(1);
    
  });

  it(`the number of rows in the table should be 3`,()=>{
    page.navigateTo();
    expect(page.getRowCount()).toBe(3);
    
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
