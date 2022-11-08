import { Component, Input } from '@angular/core';
import { IDoc } from 'src/app/models/doc';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent {
  @Input() doc: IDoc;

  details = false;
  imagesrc = 'assets/icons/doc.svg';
}
