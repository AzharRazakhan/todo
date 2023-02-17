import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { SearchPipe } from '../pipe/search.pipe';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  providers: [ SearchPipe ]
})
export class FormsComponent implements OnInit{
  registerForm!: FormGroup;
  submitted = false;
  id = 0;
  // product: any = [];
  public showPassword: boolean = false;
  public showPassword_table: boolean[] =[];
  readMore:boolean[]=[]
  searchTerm = '';
  sortDir = 1;//1= 'ASE' -1= DSC

  product =[
    {
    email:'Jacob@gmail.com',
    password:	'Otto',	
    id:1,
    createAt:'Tue Jan 31 2023 13:37:08 GMT+0530 (India Standard Time)',
    aboutUs:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
  },{
    email:'Mark@gmail.com',
    password:	'Thornton',	
    id:12,
    createAt:'Tue Jan 31 2023 13:37:08 GMT+0530 (India Standard Time)',
    aboutUs:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
  },{
    email:'XYZ@gmail.com',password:	'ABC',	id:13,
    createAt:'Tue Jan 31 2023 13:37:08 GMT+0530 (India Standard Time)',
    aboutUs:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
  },{
    email:'Larry@gmail.com',password:	'the Bird',	id:14,
    createAt:'Tue Jan 31 2023 13:37:08 GMT+0530 (India Standard Time)',
    aboutUs:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
  },
  
];

  isDesc: boolean = false;
  column: string = 'CategoryName';

  constructor(
    private formBuilder: FormBuilder,
    private sevice: ServiceService
    ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      aboutUs: ['', [Validators.required]],
    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }



  get f() { return this.registerForm.controls; }

 async onSubmit() {
    console.log(this.registerForm.controls)
    this.submitted = true;
     let newData:any;
     newData = this.product.filter(d => {
      return d.email == this.registerForm.value.email
    })
    console.log(newData.length )
  
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.id) {
      this.removeObjectWithId(this.product, this.id)
      this.registerForm.value.id = this.id;
      this.registerForm.value.createAt = new Date()
      
    } else {
      this.registerForm.value.id = Math.floor(Math.random() * 100)
      this.registerForm.value.createAt = new Date()
      if(newData.length > 0) {
        Swal.fire('Email already Exits.'); 
        return 
      }
    }





    // this.product.push(this.registerForm.value)
    this.product.unshift(this.registerForm.value)

    this.submitted = false;
    this.id = 0;
    this.registerForm.reset();

  }

  updateData(item: any) {
    this.registerForm.patchValue({
      email: item.email,
      password: item.password,
      aboutUs: item.aboutUs,
    })
    this.id = item.id;
  }

  removeObjectWithId(arr: any, id: any) {
    const objWithIdIndex = arr.findIndex((obj: any) => obj.id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  }

  removeItem(item: any) {
    Swal.fire({
      title: 'Are you sure?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeObjectWithId(this.product, item.id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
  }


  sort(property:any) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.product.sort(function (a:any, b:any) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };

  readMoreToggle(item:any,index:any){
    this.readMore[index] = !this.readMore[index]; 
  }

  public togglePasswordVisibility_table(index:any): void {
    this.showPassword_table[index] = !this.showPassword_table[index];
  }

  onSortClick(event:any) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('bi-arrow-up')) {
      classList.remove('bi-arrow-up');
      classList.add('bi-arrow-down');
      this.sortDir=-1;
    } else {
      classList.add('bi-arrow-up');
      classList.remove('bi-arrow-down');
      this.sortDir=1;
    }
  }

  


}
