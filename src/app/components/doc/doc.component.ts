import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDoc } from 'src/app/models/doc';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent {
  @Input() doc: IDoc;

  details = false;
  imagesrc = 'assets/icons/doc.svg';

  @Output() idEvent = new EventEmitter<string>();
  @Output() cardEditingEvent = new EventEmitter<boolean>();
  constructor(private modalService: ModalService) {}

  setCardEditing(isCardEditing: boolean) {
    this.cardEditingEvent.emit(isCardEditing);
  }

  handleEdit(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.idEvent.emit(this.doc.id);
    this.cardEditingEvent.emit(true);

    this.modalService.open();
  }
}
