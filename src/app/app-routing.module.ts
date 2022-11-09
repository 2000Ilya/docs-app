import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DocPageComponent } from './pages/doc-page/doc-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/docs/1', pathMatch: 'full' },
  { path: 'docs/:id', component: DocsPageComponent },
  { path: 'doc/:id', component: DocPageComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
