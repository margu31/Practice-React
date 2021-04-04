import * as postsAPI from '../api/posts';
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// () => async dispatch => {
//   // 요청이 시작됨
//   dispatch({ type: GET_POSTS });
//   // API 호출
//   try {
//     const posts = await postsAPI.getPosts();
//     // 성공했을 때 
//     dispatch({
//       type: GET_POSTS_SUCCESS,
//       posts
//     });
//   } catch (e) {
//     // 실패했을 때
//     dispatch({
//       type: GET_POSTS_ERROR,
//       error: e
//     });
//   }
// };

export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);
// (id) => async dispatch => {
//   // 요청이 시작됨
//   dispatch({ type: GET_POST });
//   // API 호출
//   try {
//     const post = await postsAPI.getPostById(id);
//     // 성공했을 때 
//     dispatch({
//       type: GET_POST_SUCCESS,
//       post
//     });
//   } catch (e) {
//     // 실패했을 때
//     dispatch({
//       type: GET_POST_ERROR,
//       error: e
//     });
//   }
// };

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: reducerUtils.loading()
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.payload)
      }
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.payload)
      }
    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading()
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.payload)
      }
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.payload)
      }
    default:
      return state;
  }
}
