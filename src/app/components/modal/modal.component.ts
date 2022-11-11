import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocsService } from 'src/app/services/docs.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() docsService: DocsService;
  @Output() cardCloseEvent = new EventEmitter<boolean>();

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}

  closeCard() {
    this.cardCloseEvent.emit();
  }
}
