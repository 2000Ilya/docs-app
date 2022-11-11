import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocsService } from '../../services/docs.service';
import { ModalService } from '../../services/modal.service';
import { Author } from 'src/app/models/doc';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-doc',
  templateUrl: './create-doc.component.html',
  styleUrls: ['./create-doc.component.scss'],
})
export class CreateDocComponent implements OnInit {
  @Input() docsService: DocsService;
  @Output() cardCreatingEvent = new EventEmitter<boolean>();

  constructor(public modalService: ModalService) {
    this.formatDate = this.formatDate.bind(this);
  }

  form = new FormGroup({
    account: new FormControl('', [Validators.required]),
    fio: new FormControl('', [Validators.required, Validators.minLength(6)]),
    post: new FormControl('', [Validators.required, Validators.minLength(6)]),
    docDate: new FormControl('', [Validators.required]),
    docName: new FormControl('', [Validators.required]),
    docType: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    status: new FormControl('registered'),
    isSpecial: new FormControl(false),
  });

  get account() {
    return this.form.controls.account as FormControl;
  }

  get fio() {
    return this.form.controls.fio as FormControl;
  }

  get post() {
    return this.form.controls.post as FormControl;
  }

  get docDate() {
    return this.form.controls.docDate as FormControl;
  }

  get docName() {
    return this.form.controls.docName as FormControl;
  }

  get docType() {
    return this.form.controls.docType as FormControl;
  }

  get address() {
    return this.form.controls.address as FormControl;
  }

  get isSpecial() {
    return this.form.controls.isSpecial as FormControl;
  }

  ngOnInit(): void {}

  formatDate(date: Date) {
    var d = date,
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  setCardCreating(isCardCreating: boolean) {
    this.cardCreatingEvent.emit(isCardCreating);
  }

  submit() {
    let author: Author;
    if (
      this.form.value.account === '' &&
      this.form.value.fio === '' &&
      this.form.value.post === ''
    ) {
      author = null;
    } else {
      author = {
        account: this.form.value.account as string,
        fio: this.form.value.fio as string,
        post: this.form.value.post as string,
      };
    }
    this.docsService.create({
      author,
      id: uuid.v4(),
      docCode: uuid.v4(),
      docDate: this.formatDate(new Date()),
      docName: this.form.value.docName as string,
      docType: this.form.value.docType as string,
      address: this.form.value.address as string,
      isSpecial: this.form.value.isSpecial as boolean,
      status: 'registred',
    });
    this.modalService.close();
  }
}
