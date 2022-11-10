import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocComponent } from './components/doc/doc.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterDocsPipe } from './pipes/filter-docs.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CreateDocComponent } from './components/create-doc/create-doc.component';
import { ModalComponent } from './components/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';
import { DocPageComponent } from './pages/doc-page/doc-page.component';
import { SortByPipe } from './pipes/sort-by-date.pipe';
import { PaginateDocsPipe } from './pipes/paginate-docs.pipe';
import { CeilPipe } from './pipes/ceil.pipe';
import { DocsListComponent } from './components/docs-list/docs-list.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    AppComponent,
    DocComponent,
    NavigationComponent,
    DocsPageComponent,
    PaginationComponent,
    CreateDocComponent,
    ModalComponent,
    FilterDocsPipe,
    SortByPipe,
    PaginateDocsPipe,
    CeilPipe,
    FocusDirective,
    DocPageComponent,
    DocsListComponent,
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
