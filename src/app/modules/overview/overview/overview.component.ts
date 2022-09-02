import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bookmark } from 'src/app/core/services/bookmark.model';
import { BookmarksService } from 'src/app/core/services/bookmarks.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  public bookmarkList: Bookmark[] = [];
  public bookmarks$: Subscription;

  constructor(private bookmarkService: BookmarksService) {
    this.bookmarks$ = bookmarkService.bookmarks.subscribe((list: Bookmark[]) => {
      console.info(list)
      this.bookmarkList = list;
    })
  }

  ngOnInit(): void {
    this.bookmarkList = this.bookmarkService.getList();
    console.info(this.bookmarkList)
  }

  ngOnDestroy(): void {
    if (this.bookmarks$) {
      this.bookmarks$.unsubscribe();
    }
  }

}
