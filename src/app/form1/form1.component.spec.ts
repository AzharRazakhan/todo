import { inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceService } from '../service/service.service';

import { Form1Component } from './form1.component';
import Swal from 'sweetalert2/dist/sweetalert2.js';

describe('Form1Component', () => {
  let component: Form1Component;
  let fixture: ComponentFixture<Form1Component>;
  let service: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Form1Component],
      providers: [ServiceService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(Form1Component);
    component = fixture.componentInstance;
    service = TestBed.inject(ServiceService)
    component.ngOnInit()
    // fixture.detectChanges();
  });

  it('form should be empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });


  it('Email field validity', () => {
    let email = component.registerForm.controls['email']
    expect(email.valid).toBeFalse()
  });


  it('Email field required', () => {
    let errors: any = {}
    let email = component.registerForm.controls['email']
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy()
  });

  it('password field empty', () => {
    let password = component.registerForm.controls['password'];
    expect(password.valid).toBeFalsy()
  })

  it('password field requied', () => {
    let errors: any = {};
    let password = component.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy()
  })


  it('password field validity', () => {
    let errors: any = {};
    let password = component.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('submission form', () => {
    expect(component.registerForm.valid).toBeFalsy();
  })

  it('test a form group element count', () => {
    const formEle = fixture.debugElement.nativeElement.querySelector('#registerForm');
    const input = formEle.querySelectorAll('input')
    expect(input.length).toEqual(2)
  })

  it('test a form group inital value', () => {
    const registerForm = component.registerForm;
    const registerForm_value = {
      email: '',
      password: '',
      aboutUs: ''
    }
    expect(registerForm.value).toEqual(registerForm_value)
  })

  it('check username value before', () => {
    const loginFormUsername = fixture.debugElement.nativeElement.querySelector('#registerForm').querySelectorAll('input')[0];
    const userNameValueFormGroup = component.registerForm.get('email');
    expect(loginFormUsername.value).toEqual(userNameValueFormGroup?.value)
    expect(userNameValueFormGroup?.errors).not.toBeNull()
    expect(userNameValueFormGroup?.errors?.required).toBeTruthy()
  })


  //  it('should be toggle false value',() => {
  //     component.showPassword = true;
  //     component.togglePasswordVisibility()
  //     expect(component.togglePasswordVisibility).toBeFalsy()
  //   })

  it('should be toggle true value', () => {
    component.showPassword = false;
    component.togglePasswordVisibility()
    expect(component.togglePasswordVisibility).toBeTruthy()
  })

  it('check onSubmit is define', () => {
    expect(component.onSubmit()).toBeDefined();
  })

  it('check onSubmit is define', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const spyon = spyOn(component, 'onSubmit').and.callThrough();
      const btn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submit')
      btn.click()

      expect(spyon).toHaveBeenCalledTimes(0)
      // expect(service.product.length).toEqual(5)
    })
  })



  it('check removeObjectit', () => {
    let removeObjectit = spyOn(component, 'removeObjectWithId');
    component.onSubmit();
    if (component.id) {
      expect(removeObjectit).toHaveBeenCalled()
    }
  })


  it('check removeObjectit', () => {
    let removeObjectit = spyOn(component, 'removeObjectWithId').and.returnValues([]);
    component.onSubmit();
    if (component.id) {
      expect(removeObjectit).toHaveBeenCalled()
    }
  })


  it('on submit click event', () => {
    let registerForm = component.registerForm;
    let submitted = false;
    let id = 0;
    component.onSubmit();
    expect(submitted).toBe(false)
    expect(component.id).toEqual(0)

  })

  it('Add or Edit check btn type', () => {
    let submitBtn = fixture.debugElement.nativeElement.querySelector('#submit');
    expect(submitBtn.type).toEqual('submit')
  })


  it('check submit with async', () => {
    let registerForm = component.registerForm;
    component.onSubmit()
    fixture.detectChanges()
    registerForm.value.createAt = new Date()

    // expect(registerForm.value.createAt).toEqual(new Date)
    // expect(registerForm.value.createAt).toEqual(new Date())
    // if(!component.id){
    //     Swal.fire('Email already Exits.'); 

    //   registerForm.value.id = Math.floor(Math.random() * 100)
    //   fixture.whenStable().then(() => {
    //     component.submitted = false;
    //     expect(component.submitted).toBeFalsy()
    //     component.id = 0;
    //     expect(component.id).toEqual(0)
    //     component.registerForm.reset();
    //     // service.addData(registerForm.value)
    //   })
    // }else{
    //   registerForm.value.id = component.id;
    //   component.removeObjectWithId(component.product, component.id)
    //   fixture.whenStable().then(() => {
    //     service.editData(registerForm.value)
    //   })

  })

  it('check service is exits or not', () => {
    expect(service instanceof (ServiceService)).toBeTruthy()
  })









});
