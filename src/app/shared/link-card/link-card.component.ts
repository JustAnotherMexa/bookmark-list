import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/core/services/bookmark.model';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input() bookmark: Bookmark | undefined;
  @Input() editable: boolean = true;
  @Input() bookmarkList: Bookmark[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
