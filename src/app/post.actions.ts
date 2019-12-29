import {Action} from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const REST = '[Post] Rest';


export class EditText implements Action{
  readonly type = EDIT_TEXT;
  constructor(public payload: string) {}
}

export class Upvote implements Action{
  readonly type = UPVOTE;
}

export class Downvote implements Action{
  readonly type = DOWNVOTE;
}

export class Rest implements Action{
  readonly type = REST;
}

export type All
= Upvote
| Downvote
| Rest
| EditText;
