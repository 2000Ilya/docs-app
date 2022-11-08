import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { IDoc } from 'src/app/models/doc';
import { DocsService } from '../../services/docs.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.scss'],
})
export class DocPageComponent implements OnInit {
  title = 'Документы';
  term = '';
  pageSize: number;
  currentPage: number;
  totalPages: number;

  constructor(
    public docsService: DocsService,
    public modalService: ModalService,
    private router: Router
  ) {
    this.pageSize = 2;
    this.currentPage = Number(router.routerState.snapshot.url.slice(6));

    this.filteredDocs = this.filteredDocs.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  filteredDocs(docs: IDoc[]) {
    return docs.filter(
      (doc, i) =>
        (this.currentPage - 1) * this.pageSize <= i &&
        (this.currentPage - 1) * this.pageSize + this.pageSize > i
    );
  }

  handlePageChange(currentPage: number): void {
    this.currentPage = currentPage;
  }

  ngOnInit(): void {}
}
