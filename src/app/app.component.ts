import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title:any = 'todo';
  keyword = "";
  animation = 'pulse';
  contentLoaded = false;
  count = 2;
  widthHeightSizeInPixels = 50;
  intervalId: number | null = null;
 send(keyword: any){this.keyword = keyword;}  
}
