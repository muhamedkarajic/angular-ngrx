import { browser } from 'protractor';
import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './post.model'
import * as PostAction from './post.actions'

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostAction.EditText(this.text));
  }

  restPost() {
    this.text = null;
    this.store.dispatch(new PostAction.Rest());
  }

  upvote() {
    this.store.dispatch(new PostAction.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostAction.Downvote());
  }

}
