import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  private lastBookmarkAdded!: Bookmark;
  private bookmarkList: Bookmark[] = [];
  public bookmarks = new Subject<Bookmark[]>(); 

  constructor() {
    this.initiateList()
  }

  /**
   * For the thank you page 
   */
  get lastBookmark() {
    if (this.lastBookmarkAdded == undefined) {
      this.lastBookmarkAdded = JSON.parse(localStorage.getItem('last-bookmark')!);
    }
    return this.lastBookmarkAdded ? this.lastBookmarkAdded : null;
  }

  /**
   * Accesses private property bookmarkList
   * @returns current bookmarkList
   */
  getList() {
    return this.bookmarkList;
  }

  /**
   * Used in the validator to check that all urls are unique
   * @returns list of the urls 
   */
  getStringList() {
    return this.bookmarkList.map(item => item.url);
  }

  /**
   * Gets the bookmarks from the local storage
   */
  initiateList() {
    let tempList = JSON.parse(localStorage.getItem('bookmarks')!);
    this.bookmarkList = [];

    tempList.forEach((bookmark: { url: string }) => {
      this.bookmarkList.push(new Bookmark(bookmark['url']))
    });
  }

  /**
   * Adds a new bookmark to the list
   * updates both the last bookmark and the whole object in local storage
   * @param url bookmark
   */
  addBookmark(url: string) {
    this.lastBookmarkAdded = new Bookmark(url);
    this.bookmarkList.push(this.lastBookmarkAdded);
    localStorage.setItem('last-bookmark', JSON.stringify(this.lastBookmarkAdded))

    this.updateBookmarks();
  }

  /**
   * Updates the local storage bookmark list 
   * Triggers the subscription 
   */
  updateBookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarkList))

    this.bookmarks.next(this.bookmarkList)
  }

  /**
   * Finds the current bookmark and updates it
   * calls updateBookmarks to trigger subscription
   */
  editBookmark(currentUrl: string, newUrl: string) {
    const index = this.bookmarkList.findIndex((bookmark) => bookmark.url === currentUrl);
    this.bookmarkList[index].url = newUrl;
    this.lastBookmarkAdded = this.bookmarkList[index];

    this.updateBookmarks();
  }

  /**
   * Finds the current bookmark and deletes it
   * calls updateBookmarks to trigger subscription
   */
  deleteBookmark(currentUrl: string) {
    const index = this.bookmarkList.findIndex((bookmark) => bookmark.url === currentUrl);
    this.bookmarkList.splice(index,1);
    
    this.updateBookmarks();
  }
}
