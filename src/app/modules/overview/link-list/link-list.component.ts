import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/core/services/bookmark.model';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {

  @Input() bookmarkList: Bookmark[] = [];

  constructor() { }

  ngOnInit(): void {
    console.info(this.bookmarkList)
  }

}
