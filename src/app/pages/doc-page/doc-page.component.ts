import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { IDoc } from 'src/app/models/doc';
import { DocsService } from 'src/app/services/docs.service';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.scss'],
})
export class DocPageComponent {
  currentRoute: string;
  doc: IDoc;

  constructor(private router: Router, public docsService: DocsService) {
    this.currentRoute = router.url;
    this.doc = this.docsService.docs.filter(
      (doc: IDoc) => doc.id === router.url.slice(5)
    )[0];
  }
}
