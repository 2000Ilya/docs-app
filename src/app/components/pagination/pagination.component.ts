import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() totalPages: number;
  @Input() currentPage: number;
  @Input() size: number;
  @Input() windowSize: number;
  @Input() showFirstLastButton: boolean;
  @Input() handlePageChange: (currentPage: number) => void;

  getNavigablePages(): number[] {
    const pages = [];
    const left = Math.max(1, this.currentPage - this.windowSize);
    const right = Math.min(
      Math.ceil(this.totalPages),
      this.currentPage + this.windowSize
    );
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }
    return pages;
  }
}
