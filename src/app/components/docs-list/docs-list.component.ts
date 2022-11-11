import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDoc } from 'src/app/models/doc';

@Component({
  selector: 'app-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.scss'],
})
export class DocsListComponent {
  @Input() docsList: IDoc[];

  @Output() idEvent = new EventEmitter<string>();
  @Output() cardEditingEvent = new EventEmitter<boolean>();

  setCardEditing(isCardEditing: boolean) {
    this.cardEditingEvent.emit(isCardEditing);
  }

  selectId($event: string) {
    this.idEvent.emit($event);
  }
}
