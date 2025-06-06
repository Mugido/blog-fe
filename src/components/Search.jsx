import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searched } from '../redux/features/filter/filterSlice';
import { fetchBlogs } from '../redux/features/blogs/blogSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (input.trim()) {
      dispatch(searched(input.trim()));
      dispatch(fetchBlogs({ tags: [], search: input.trim() }));
      
      if (window.location.pathname !== '/') {
        navigate('/');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
      <div className="grid place-items-center h-full w-24 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search something.."
      />
    </form>
  )
}

export default Search