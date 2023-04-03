import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

  const [tag, setTag] = useState('car');
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div id="tag-container" className="w-2/3 rounded-lg border-2 border-black
    flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className=" mt-3 text-2xl uppercase font-bold ">Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt="r-gif" width="450" />)
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center bg-yellow-200 outline outline-gray-300'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        placeholder='SEARCH GIF'
      />

      <button onClick={() => fetchData()} 
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] hover:bg-yellow-400 outline outline-gray-300"
      >Generate</button>

    </div>
  )
}

export default Tag;
