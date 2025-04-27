import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searched } from '../redux/features/filter/filterSlice';
import { useMatch, useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  // const {search} = useSelector(state => state.filter);
  const search = useSelector((state) => state.filter.search)
  const tags = useSelector((state) => state.filter.tags.filter((tag)=> tag.title.toLowerCase().includes(search.toLowerCase())))
  const [input, setInput] = useState(search);
  // console.log(input)

  const match = useMatch("/");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched((input)));
    console.log(tags);

    if(!match){
        navigate("/")
    }
    setInput("")
  }


  return (
<form  onSubmit={handleSubmit} className="relative flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
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
        onChange={(e) => setInput(e.target.value)
          
        }
        placeholder="Search something.."
        
        
      />
    </form>
  )
}

export default Search