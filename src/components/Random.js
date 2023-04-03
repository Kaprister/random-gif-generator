import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  const {gif, loading, fetchData}  = useGif();

  return (
    <div id='random-container' className="w-2/3 rounded-lg border-2 border-black
    flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className=" text-2xl mt-3 uppercase font-bold ">A Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt="r-gif" width="450" />)
      }

      <button onClick={() => fetchData()} 
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] hover:bg-yellow-400 outline outline-gray-300"
      >Generate</button>

    </div>
  )
}

export default Random;
