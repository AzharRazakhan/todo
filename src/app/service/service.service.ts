
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  product: any = [
    {
      email: 'Jacob@gmail.com',
      password: 'Otto',
      id: 1,
      createAt: 'Tue Jan 31 2023 13:37:08 GMT+0530 (India Standard Time)',
      aboutUs: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
    },
     {
      email: 'Mark@gmail.com',
      password: 'Thornton',
      id: 12,
      createAt: 'Tue Jan 31 2023 13:37:08 GMT+0530 (India Standard Time)',
      aboutUs: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
    }, 
    {
      email: 'XYZ@gmail.com', password: 'ABC', id: 13,
      createAt: 'Tue Jan 31 2023 13:37:08 GMT+0530 (India Standard Time)',
      aboutUs: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
    }, 
    {
      email: 'Larry@gmail.com', password: 'the Bird', id: 14,
      createAt: 'Tue Jan 31 2023 13:37:08 GMT+0530 (India Standard Time)',
      aboutUs: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
    },

  ];

  constructor() { }

  getUsersMock(): any[] {
    return this.product;
  }
  addData(data: any) {
    let newData: any;
    newData = this.product.filter((d: any) => {
      return d.email == data.email
    })
    if (newData.length > 0) {
      return false
    } else {
      return this.product.unshift(data)
    }


  }

  editData(data: any) {
    this.removeObjectWithId(this.product, data.id)
    data.id = data.id;
    return this.product.unshift(data)
  }

  deleteData(id: any) {
    return this.removeObjectWithId(this.product, id)
  }

  removeObjectWithId(arr: any, id: any) {
    const objWithIdIndex = arr.findIndex((obj: any) => obj.id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  }




}
