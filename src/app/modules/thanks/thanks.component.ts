import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/core/services/bookmark.model';
import { BookmarksService } from 'src/app/core/services/bookmarks.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  public lastBookmark: Bookmark | null;
  public bookmarkList: Bookmark[] | null;

  constructor(private bookmarkService: BookmarksService) {
    this.lastBookmark = this.bookmarkService.lastBookmark;
    this.bookmarkList = this.bookmarkService.getList();
  }

  ngOnInit(): void {
    
  }

}
