import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDoc } from 'src/app/models/doc';

@Component({
  selector: 'app-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.scss'],
})
export class DocsListComponent implements OnInit {
  @Input() docsList: IDoc[];

  @Output() idEvent = new EventEmitter<string>();
  @Output() cardEditingEvent = new EventEmitter<boolean>();

  constructor() {
    console.log(this.docsList);
  }

  ngOnInit(): void {
    console.log(this.docsList);
  }

  setCardEditing(isCardEditing: boolean) {
    console.log(isCardEditing);
    this.cardEditingEvent.emit(isCardEditing);
  }

  selectId($event: string) {
    console.log($event);

    this.idEvent.emit($event);
    // this.selectedId = $event;
  }
}
