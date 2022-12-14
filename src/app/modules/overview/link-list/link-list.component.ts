import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/core/services/bookmark.model';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {

  @Input() bookmarkList: Bookmark[] = [];
  
  public visibleList: Bookmark[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  /**
   * Updates the visibleList, have to run detectChanges to avoid NG0100 error: https://angular.io/errors/NG0100
   * @param list paginated bokomark list coming from pagination component
   */
  updateList(list: Bookmark[]) {
    this.visibleList = list;
    this.cdr.detectChanges();
  }

}
