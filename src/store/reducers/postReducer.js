import { ADD_POST, LOAD_POSTS, REMOVE_POST, } from "../types";

const initialState = {
    allPosts: [],
    loading: true
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                likedPosts: action.payload.filter((post) => post.liked),
                loading: false
            };

        case REMOVE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter((post) => {
                    return post.id !== action.payload;
                }),
                likedPosts: state.likedPosts.filter((post) => {
                    return post.id !== action.payload;
                })
            };

        case ADD_POST:
            return {
                ...state,
                allPosts: [
                    {
                        ...action.payload
                    },
                    ...state.allPosts
                ]
            };

        default: return state
    }
};