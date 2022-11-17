import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() current: any = 0
  @Input() total: any = 0

  @Output() goTo: EventEmitter<any> = new EventEmitter<any>()
  @Output() next: EventEmitter<any> = new EventEmitter<any>()
  @Output() previous: EventEmitter<any> = new EventEmitter<any>()

  pages: any = []

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['current'] && changes['current'].currentValue) ||
      (changes['total'] && changes['total'].currentValue)
    ) {
      this.pages = this.getPages(this.current, this.total)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onGoTo(page: any) {
    this.goTo.emit(page)
  }

  onNext() {
    this.next.emit(this.current)
  }

  onPrevious() {
    this.previous.emit(this.current)
  }

  getPages(current: any, total: any) {
    if (total <= 7) return [...Array(total).keys()].map((page: any) => ++page)
    if (current > 5) {
      if (current >= total - 4) return [1, -1, total - 4, total - 3, total - 2, total - 1, total]
      else return [1, -1, current - 1, current, current + 1, -1, total]
    }
    return [1, 2, 3, 4, 5, -1, total]
  }

}
