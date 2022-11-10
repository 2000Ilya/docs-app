import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDoc } from 'src/app/models/doc';
import { FilterDocsPipe } from 'src/app/pipes/filter-docs.pipe';
import { PaginateDocsPipe } from 'src/app/pipes/paginate-docs.pipe';
import { SortByPipe } from 'src/app/pipes/sort-by-date.pipe';
import { DocsService } from '../../services/docs.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.scss'],
  providers: [FilterDocsPipe, SortByPipe, PaginateDocsPipe],
})
export class DocsPageComponent implements OnInit {
  title = 'Документы';
  term = '';
  pageSize: number;
  currentPage: number;
  totalPages: number;

  constructor(
    public docsService: DocsService,
    public modalService: ModalService,
    private router: Router,
    private sortBy: SortByPipe,
    private paginateDocs: PaginateDocsPipe,
    private filterProducts: FilterDocsPipe
  ) {
    this.pageSize = 2;
    this.currentPage = Number(router.routerState.snapshot.url.slice(6));

    // this.filteredDocs = this.filteredDocs.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  form = new FormGroup({
    isSortFromNew: new FormControl(false),
  });

  get isSortFromNew() {
    return this.form.controls.isSortFromNew as FormControl;
  }

  get isSortFromNewValue() {
    return this.form.value.isSortFromNew as boolean;
  }

  get docsList() {
    return this.paginateDocs.transform(
      this.filterProducts.transform(
        this.sortBy.transform(
          this.docsService.docs,
          this.form.value.isSortFromNew
        ),
        this.term
      ),
      this.currentPage,
      this.pageSize
    );
  }

  handlePageChange(currentPage: number): void {
    this.currentPage = currentPage;
  }

  ngOnInit(): void {}
}
