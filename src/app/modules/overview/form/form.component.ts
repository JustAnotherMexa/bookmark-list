import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bookmark } from 'src/app/core/services/bookmark.model';
import { BookmarksService } from 'src/app/core/services/bookmarks.service';
import { repeat } from 'src/app/shared/util/repeat.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() bookmarkList: Bookmark[] = [];
  @Input() currentBookmark: Bookmark | undefined;
  @Input() editing: boolean = false;

  public bookmarkForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private bookmarkService: BookmarksService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.bookmarkForm = this.formBuilder.group({
      url: [(this.currentBookmark) ? this.currentBookmark.url : '',
        [
          Validators.required,
          Validators.pattern('((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)'),
          repeat(this.bookmarkList.map(item => item.url))
        ]
      ]
    })
  }



  get controls() {
    return this.bookmarkForm.controls;
  }

  /**
   * Depending on editing it triggers add or edit bookmark
   */
  onSubmit() {
    if (!this.editing) {
      if (!this.bookmarkService.getStringList().includes(this.bookmarkForm.value['url'])) {
        this.bookmarkService.addBookmark(this.bookmarkForm.value['url']);
      }
      this.bookmarkForm.reset();
    } else if(this.currentBookmark){
      this.bookmarkService.editBookmark(this.currentBookmark.url, this.bookmarkForm.value['url']);
    }
    this.router.navigate(['thanks'])
  }
}
