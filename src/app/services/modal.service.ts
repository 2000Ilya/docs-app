import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible = false;

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
}
