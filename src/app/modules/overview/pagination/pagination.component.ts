import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookmarksService } from 'src/app/core/services/bookmarks.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {

  @Output() paginatedList = new EventEmitter<any[]>();

  public bookmarkList: any[] = [];
  public pageSize = 20;
  public total = 0;
  public totalPages: number[] = [];
  public currentPage = 1;
  public lastBookmark = 0;
  private bookmarks$: Subscription;

  constructor(private bookmarkService: BookmarksService) {
    this.bookmarks$ = this.bookmarkService.bookmarks.subscribe((bookmarks) => {
      this.bookmarkList = bookmarks;
      this.init()
    })
  }

  ngOnInit(): void {
    this.bookmarkList = this.bookmarkService.getList();
    this.init()
  }

  ngOnDestroy(): void {
    if (this.bookmarks$) {
      this.bookmarks$.unsubscribe();
    }
  }

  private init() {
    this.total = this.bookmarkList.length;
    this.totalPages = this.numSequence(Math.ceil(this.total / this.pageSize))
    this.selectPage(1);
  }

  /**
   * Need to create an array of size n to loop over in the template
   * @param n Count till n 
   * @returns an array of size n 
   */
  public numSequence(n: number): Array<number> {
    return Array(n);
  }

  public selectPage(page: number) {
    
    let end = page * this.pageSize;
    let start = end - this.pageSize;

    this.currentPage = page;
    this.paginatedList.emit(this.bookmarkList.slice(start, end))
  }

}
