import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocComponent } from './components/doc/doc.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocPageComponent } from './pages/doc-page/doc-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterDocsPipe } from './pipes/filter-products.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CreateDocComponent } from './components/create-doc/create-doc.component';
import { ModalComponent } from './components/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AboutPageComponent,
    AppComponent,
    DocComponent,
    NavigationComponent,
    DocPageComponent,
    PaginationComponent,
    CreateDocComponent,
    ModalComponent,
    FilterDocsPipe,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
