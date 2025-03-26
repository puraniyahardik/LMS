import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {
    const navigate = useNavigate();
    const [input, setInput] = useState(data ? data : ''); 

    const onSearchHandler = (e) =>{
      e.preventDefault();
      navigate('/course-list/' + input)
    }

  return (
    <div>
      <form 
      onSubmit={onSearchHandler}
      className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white dark:bg-gray-200 border border-gray-500/20 rounded'>
          <img src={assets.search_icon} alt="search_icon"
          className='md:w-auto w-10 px-3'
          />
          <input 
              onChange={e => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Search for courses' 
              className='w-full h-full outline-none dark:text-black text-gray-500/80'
          />
          <button className='bg-blue-600 hover:bg-blue-800 rounded text-white  px-7 md:px-10 py-2 mx-1 cursor-pointer'>Search</button>
      </form>
    </div>
    
  )
}

export default SearchBar