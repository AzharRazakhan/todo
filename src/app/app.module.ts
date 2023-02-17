import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { SearchPipe } from './pipe/search.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TableComponent } from './table/table.component';
import { Form1Component } from './form1/form1.component';
import { ServiceService } from './service/service.service';
import { ScrollDirective } from './directive/scroll.directive';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SearchPipe,
    TableComponent,
    Form1Component,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    NgxSkeletonLoaderModule,
    InfiniteScrollModule,
  ],
  exports:[SearchPipe],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
]
})
export class AppModule { }
