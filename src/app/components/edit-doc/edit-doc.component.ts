import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDoc } from 'src/app/models/doc';
import { DocsService } from 'src/app/services/docs.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-edit-doc',
  templateUrl: './edit-doc.component.html',
  styleUrls: ['./edit-doc.component.scss'],
})
export class EditDocComponent implements OnInit {
  @Input() id: string;

  @Output() cardEditingEvent = new EventEmitter<boolean>();
  doc: IDoc;

  form = new FormGroup({
    docName: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    public modalService: ModalService,
    private docsService: DocsService
  ) {}

  get docName() {
    return this.form.controls.docName as FormControl;
  }

  get address() {
    return this.form.controls.address as FormControl;
  }

  precompleteForm(docName: string, address: string) {
    this.form.get('docName')?.setValue(docName);
    this.form.get('address')?.setValue(address);
  }

  ngOnInit(): void {
    this.doc = this.docsService.docs.filter((doc) => doc.id === this.id)[0];
    this.precompleteForm(this.doc.docName, this.doc.address);
  }

  setCardEditing(isCardEditing: boolean) {
    this.cardEditingEvent.emit(isCardEditing);
  }

  submit() {
    this.docsService.edit(
      this.id,
      this.form.value.docName as string,
      this.form.value.address as string
    );
    this.modalService.close();
  }
}
