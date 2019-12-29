import * as PostAction from './post.actions'
import { Post } from './post.model'

export type Action = PostAction.All;

const defaultState: Post = {
  text: 'Hello. I am the default post',
  likes: 0
}

const newState = (state, data) => {
  return Object.assign({}, state, data)
}

export function postReducer(state: Post = defaultState, action: Action) {
  switch (action.type) {
    case PostAction.EDIT_TEXT:
      if (!action.payload)
        return newState(state, { text: defaultState.text, likes: state.likes });
      return newState(state, { text: action.payload });
    case PostAction.UPVOTE:
      return newState(state, { likes: state.likes + 1 });
    case PostAction.DOWNVOTE:
      if (state.likes)
        return newState(state, { likes: state.likes - 1 });
      return newState(state, {});
    case PostAction.REST:
      return defaultState;
    default:
      return defaultState;
  }
}
