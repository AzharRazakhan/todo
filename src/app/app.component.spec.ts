import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { SearchPipe } from './pipe/search.pipe';
import { TableComponent } from './table/table.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        Form1Component,
        TableComponent,
        SearchPipe,

      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    fixture.detectChanges();
  });

  it(`should have as title 'todo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo');
    fixture.detectChanges();
  });

  it(`should have as h2 'Todo Project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toEqual('Todo Project');
    fixture.detectChanges();
  });



  it("check send function", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.send('any');
    expect(app.send).toBeDefined();
  });

});
