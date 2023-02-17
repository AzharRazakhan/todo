import {  Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { SearchPipe } from '../pipe/search.pipe';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers:[SearchPipe]
  
})
export class TableComponent implements OnInit{
  whenStable() {
    throw new Error('Method not implemented.');
  }
  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

  searchTerm = '';
  isDesc: boolean = false;
  column: string = 'CategoryName';
  sortDir = 1;//1= 'ASE' -1= DSC
  showPassword_table: boolean[] = [];
  readMore: boolean[] = []
  product: any = [];
  imagePage = '../../assets/image/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.webp'

  isLoading = false;
  

  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.getUsersMock()
  }


  stopData(){
    this.product = 0;
    this.isLoading = true;
    setTimeout(() => {
      this.getUsersMock()
      this.isLoading = false
    }, 2000);
    // setTimeout( () => this.isLoading = false, 2000 );
  }
//   @HostListener('window:scroll', ['$event']) // for window scroll events
//   onScroll(event: any) {
//     // visible height + pixel scrolled >= total height 
//     if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
//       console.log("End");
//     }
// }

onScroll() {
  console.log("scrolled!!");
  this.product = this.product.concat(this.product);
}
 
  
  


  getUsersMock(): void {
    this.product = this.service.getUsersMock();
  }


  sort(property: any) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.product.sort(function (a: any, b: any) {
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

  onSortClick(event: any) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('bi-arrow-up')) {
      classList.remove('bi-arrow-up');
      classList.add('bi-arrow-down');
      this.sortDir = -1;
    } else {
      classList.add('bi-arrow-up');
      classList.remove('bi-arrow-down');
      this.sortDir = 1;
    }
  }


  public togglePasswordVisibility_table(index: any): void {
    this.showPassword_table[index] = !this.showPassword_table[index];
  }

  readMoreToggle(item: any, index: any) {
    this.readMore[index] = !this.readMore[index];
  }


  updateData(item: any) {
    this.emitter.emit(item)
    this.service.editData(item)
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
        // this.removeObjectWithId(this.product, item.id)
        this.service.deleteData(item.id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }



  



}
