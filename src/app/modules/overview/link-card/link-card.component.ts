import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/core/services/bookmark.model';
import { BookmarksService } from 'src/app/core/services/bookmarks.service';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input() bookmark!: Bookmark;

  public editing: boolean = false;

  constructor(private bookmarkService: BookmarksService) { }

  ngOnInit(): void {
  }

  edit() {
    this.editing = true;
  }

  delete() {
    this.bookmarkService.deleteBookmark(this.bookmark.url)
  }

}
