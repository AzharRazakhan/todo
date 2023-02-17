import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPipe } from '../pipe/search.pipe';
import { ServiceService } from '../service/service.service';

import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;
  let service: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsComponent,SearchPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ServiceService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ServiceService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check onSubmit is define',() => {
    expect(component.onSubmit()).toBeDefined();
  })


  it('check onSubmit is define',() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const spyon = spyOn(component,'onSubmit').and.callThrough();
      const btn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submit')
      btn.click()

      expect(spyon).toHaveBeenCalledTimes(0)
      // expect(service.product.length).toEqual(5)
    })
  })

  it('check service is exits or not',() => {
    expect(service instanceof(ServiceService)).toBeTruthy()
  })

  it('check the validation for required email, password',() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const emailElement = fixture.debugElement.nativeElement.querySelector('#emailElement');
      emailElement.value = '';
      emailElement.dispatchEvent(new Event('input'))

      const passwordElement = fixture.debugElement.nativeElement.querySelector('#passwordElement')
      passwordElement.value = '';
      passwordElement.dispatchEvent(new Event('input'));

      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const emailValidation = fixture.debugElement.nativeElement.querySelector('#emailRequired');
        expect(emailValidation).not.toBeNull();
        expect(emailValidation.innerHTML).toEqual('Email is required')

        const passwordValidation = fixture.debugElement.nativeElement.querySelector('#passwordValidation');
        expect(passwordValidation.children.length).toEqual(1);
        expect(passwordValidation.children[0].innerHTML).toEqual("Password is required")

        const submitBtn = fixture.debugElement.nativeElement.querySelector('#submit');
        const loginMock = spyOn(component,'onSubmit')
        submitBtn.click()
        expect(loginMock).toHaveBeenCalledTimes(0)
      })
    })
  })


  it('check the validation for email and password',() => {
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      const emailElement = fixture.debugElement.nativeElement.querySelector('#emailElement')
      emailElement.value="us@gmail.com";
      emailElement.dispatchEvent(new Event('input'));

      const passwordElement = fixture.debugElement.nativeElement.querySelector('#passwordElement')
      passwordElement.value="122334";
      passwordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const emailvalidation = fixture.debugElement.nativeElement.querySelector('#emailPatter');
        expect(emailElement).not.toBeNull();
        expect(emailElement.innerHTML).not.toEqual('Email must be a valid email address')
        
        
        

        console.log(emailvalidation,'vad')
      })
    })
  })

  // it('check onSubmit is define',() => {
  //   expect(component.onSubmit()).toBeDefined()
  //   component.id = 0;
  // })

  // it('should be toggle true value',() => {
  //   component.showPassword = false;
  //   component.togglePasswordVisibility()
  //   expect(component.togglePasswordVisibility).toBeTruthy()
  // })
 
  // it('should be toggle false value',() => {
  //   component.showPassword = true;
  //   component.togglePasswordVisibility()
  //   expect(component.togglePasswordVisibility).toBe(false)
  // })

  // it('should be toggle true value',() => {
  //   component.showPassword = false;
  //   component.togglePasswordVisibility()
  //   expect(component.togglePasswordVisibility).toBe(true)
  // })


});
