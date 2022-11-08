import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible = false;

  open() {
    console.log('opened');
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
}
