import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './features/blogs/blogSlice'

import BlogReducer from './features/singleBlog/blogSlice';
import filterReducer from './features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    blog: BlogReducer,
    filter: filterReducer
  },
})