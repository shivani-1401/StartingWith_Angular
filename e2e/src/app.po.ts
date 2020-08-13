import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getHeaderH1() : ElementFinder
  {
     return element(by.tagName('h1'));
  }

  getHeaderText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getRowCount() 
  {
    let rows=element.all(by.css('table tr'));
     return rows.count();
  }

  getHeaderH1count() 
  {
    let headers=element.all(by.css('h1'));
     return headers.count();
  }
  getContentOfAllTheRows() {
      
    let row= element(by.css('table'));
     let cells=row.all(by.tagName('td'));
     let cellTexts=cells.map(function(elm){return elm.getText()});
     return cellTexts;              
    }

  getContentOfFirstRow()
  {
   let tbl= element(by.css('table'));
   let row=tbl.all(by.css('tr')).first();
   let cellTexts=row.getText();
  return cellTexts;

  }

  getContentOfLastRow()
  {
   let tbl= element(by.css('table'));
   let row=tbl.all(by.css('tr')).last();
   let cellTexts=row.getText();
  return cellTexts;

  }
}
