import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchPipe } from '../pipe/search.pipe';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let searchPipe: SearchPipe

  // beforeAll(() => {
  //   console.log('before All')
  // })

  // afterAll(() => {
  //   console.log('after All')
  // })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ,SearchPipe],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    searchPipe = new SearchPipe()
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create define stopData', () => {
    expect(component.stopData()).toBeUndefined();
  });


  it('should create define onScroll', () => {
    expect(component.onScroll()).toBeUndefined();
  });
  

  it('should create define onScroll', () => {
    expect(component.onScroll()).toBeUndefined();
  });

  it('should create define togglePasswordVisibility_table', () => {
    expect(component.togglePasswordVisibility_table(0)).toBeUndefined();
  });

  it('check data length ',() => {
    const element: DebugElement[] = fixture.debugElement.nativeElement.querySelectorAll('#data');
    expect(element.length).toEqual(4)
  })


  it('check array data',() =>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.simple'))
      element.forEach((obj:DebugElement,index) => {
        expect(obj.children[1].nativeElement.innerHTML).toEqual(component.product[index].email)
      })
    })
  })

  it('check array data length',() =>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.simple'))
      expect(element.length).toEqual(component.product.length)
    })
  })




  

 
});
