import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  private bookmarkList: Bookmark[] = [];
  private lastBookmarkAdded!: Bookmark;
  public bookmarks = new Subject<Bookmark[]>(); 

  constructor() {
    this.initiateList()
  }

  get lastBookmark() {
    if (this.lastBookmarkAdded == undefined) {
      this.lastBookmarkAdded = JSON.parse(localStorage.getItem('last-bookmark')!);
    }
    return this.lastBookmarkAdded ? this.lastBookmarkAdded : null;
  }

  getList() {
    return this.bookmarkList;
  }

  getStringList() {
    return this.bookmarkList.map(item => item.url);
  }

  initiateList() {
    let tempList = JSON.parse(localStorage.getItem('bookmarks')!);
    this.bookmarkList = [];

    tempList.forEach((bookmark: { url: string }) => {
      this.bookmarkList.push(new Bookmark(bookmark['url']))
    });
  }

  addBookmark(url: string) {
    this.lastBookmarkAdded = new Bookmark(url);
    this.bookmarkList.push(this.lastBookmarkAdded);

    localStorage.setItem('last-bookmark', JSON.stringify(this.lastBookmarkAdded))
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarkList))

    this.bookmarks.next(this.bookmarkList)
  }
}
