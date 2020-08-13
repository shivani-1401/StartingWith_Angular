import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  var debugElement : any;
  var element : any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the table`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
     debugElement = fixture.debugElement.query(By.css('table'));
     if(debugElement){ 
        element=debugElement.nativeElement;
    expect(element).toBeTruthy();
     }
  });

  it(`should have the table with 3 rows`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
     let debugElement = fixture.debugElement.queryAll(By.css('table tr'));
      if(debugElement){ 
        let length=debugElement.length;
        expect(length).toBe(3);
        
     }
  });

  it(`should have Employees array with 4 rows`, () => {
    const fixture = TestBed.createComponent(AppComponent);
         const comp=fixture.componentInstance;
        
     fixture.detectChanges();
     let length=comp.employees.length;
    expect(length).toBe(4);
    
    
       
     
  });
  it(`should have first Employee's name as Raghav`, () => {
    const fixture = TestBed.createComponent(AppComponent);
         const comp=fixture.componentInstance;
        
     fixture.detectChanges();
     let data=comp.employees[0].firstname;
     expect(data).toBe("Raghav");
    
    
       
     
  });

  it(`should have Employees array with first element's data as{"id":1,"firstname":"Raghav","lastname":"Singh","address":"A/22 Gaziabad","email":"raghavsingh@gmail.com","password":"raghav@123","gender":"Male","date_of_birth":"22-Aug-1990"}`, () => {
    const fixture = TestBed.createComponent(AppComponent);
         const comp=fixture.componentInstance;
        
     fixture.detectChanges();
     let data=comp.employees[0];
     expect(JSON.stringify(data)).
     toBe('{"id":1,"firstname":"Raghav","lastname":"Singh","address":"A/22 Gaziabad","email":"raghavsingh@gmail.com","password":"raghav@123","gender":"Male","date_of_birth":"22-Aug-1990"}');
    
    
       
     
  });

  it(`should have first record or row as 1 RaghavSinghA/22 Gaziabadraghavsingh@gmail.comraghav@123Male22-Aug-1990`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
     debugElement = fixture.debugElement.queryAll(By.css('table tr'))[0];
     if(debugElement){ 
        element=debugElement.nativeElement;
    expect(element.textContent).toBe("1 RaghavSinghA/22 Gaziabadraghavsingh@gmail.comraghav@123Male22-Aug-1990","h1 header should be there with the content Registration details");
     }
  });
     

  it(`should have third record or row as  4 MuraliNaiduChennaimuralinaidu@gmail.commuralinaidu@123Male05-Jun-1989`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
     debugElement = fixture.debugElement.queryAll(By.css('table tr'))[2];
     if(debugElement){ 
        element=debugElement.nativeElement;
        
    expect(element.textContent).toBe("4 MuraliNaiduChennaimuralinaidu@gmail.commuralinaidu@123Male05-Jun-1989","h1 header should be there with the content Registration details");
    
  
  }
  });
     


});
