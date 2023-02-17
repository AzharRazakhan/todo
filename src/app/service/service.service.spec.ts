import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should remove a created post from the array of posts", () => {
    service.addData("This is my first post");

    expect(service.product.length).toEqual(5);
  });

   it("should remove a created post from the array of posts", () => {
     service.deleteData(0);
    expect(service.product.length).toEqual(4);
  });

//   it("should remove a created post from the array of posts", () => {
//     service.editData("This is my first post");
//    expect(service.product.length).toEqual(4);
//  });
  

});

