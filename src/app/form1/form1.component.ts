import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit, OnChanges {
  registerForm!: FormGroup;
  submitted = false;
  product: any = [];
  id = 0;
  showPassword: boolean = false;
  @Input() keyword: string | undefined;


  name="thoughtwin office"

  constructor(private formBuilder: FormBuilder,
    private service: ServiceService
  ) {
  }

  ngOnInit() {
    this.id = 0;
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      aboutUs: ['', [Validators.required]],
    });


  }


  ngOnChanges(changes: SimpleChanges): void {
    this.updateData(this.keyword)

  }
  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) return;
    this.registerForm.value.createAt = new Date()
    if(!this.id){
      if(!this.service.addData(this.registerForm.value)){
        Swal.fire('Email already Exits.'); 
      }
      this.registerForm.value.id = Math.floor(Math.random() * 100)
      await this.service.addData(this.registerForm.value)
    }else{
      this.registerForm.value.id = this.id;
      this.removeObjectWithId(this.product, this.id)
      await this.service.editData(this.registerForm.value)
    }
    this.submitted = false;
    this.id = 0;
    this.registerForm.reset();

  }

  removeObjectWithId(arr: any, id: any) {
    const objWithIdIndex = arr.findIndex((obj: any) => obj.id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  updateData(item: any) {
    this.registerForm?.patchValue({
      email: item.email,
      password: item.password,
      aboutUs: item.aboutUs,
    })
    this.id = item.id;
  }


 



}
