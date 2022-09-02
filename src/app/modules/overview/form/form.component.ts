import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class FormComponent implements OnInit, OnDestroy {

  public bookmarkForm: FormGroup;
  public bookmarkList: Bookmark[] = [];
  public bookmarks$: Subscription;

  constructor(private formBuilder: FormBuilder,
    private bookmarkService: BookmarksService,
    private router: Router) {

    this.bookmarkForm = formBuilder.group({
      url: ['',
        [
          Validators.required,
          Validators.pattern('((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)'),
          repeat(this.bookmarkService.getStringList())
        ]
      ]
    })

    this.bookmarks$ = bookmarkService.bookmarks.subscribe((list: Bookmark[]) => {
      this.bookmarkList = list;
      this.bookmarkForm.get('url')?.setValidators([
        Validators.required,
        Validators.pattern('((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)'),
        repeat(this.bookmarkService.getStringList())
      ]);
    })
  }


  ngOnInit(): void {
    this.bookmarkService.getList();
  }

  ngOnDestroy(): void {
    if (this.bookmarks$) {
      this.bookmarks$.unsubscribe();
    }
  }

  get controls() {
    return this.bookmarkForm.controls;
  }

  onSubmit() {
    if (!this.bookmarkService.getStringList().includes(this.bookmarkForm.value['url'])) {
      this.bookmarkService.addBookmark(this.bookmarkForm.value['url']);
    }
    this.bookmarkForm.reset();
    this.router.navigate(['thanks'])
  }
}
