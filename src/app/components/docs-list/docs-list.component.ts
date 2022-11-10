import { Component, Input, OnInit } from '@angular/core';
import { IDoc } from 'src/app/models/doc';

@Component({
  selector: 'app-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.scss'],
})
export class DocsListComponent implements OnInit {
  @Input() docsList: IDoc[];

  constructor() {
    console.log(this.docsList);
  }

  ngOnInit(): void {
    console.log(this.docsList);
  }
}
