import { useEffect, useState } from 'react'
import axios from 'axios' 
import Spainner from './Spainner';




const Random = () => {

  const [gif, setGif] = useState('');
   const [loading, setLoading] = useState('false');
  
  

  async function fetchData(){
    setLoading(true);
    const Api = 'p29KNcVN1S2GFf3ReuilR0ILg5J4Y2Xw';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${Api}`;
    const {data} = await axios.get(url);
    const imgsrc = data.data.images.downsized_large.url;
    setGif(imgsrc)
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[0]);

  function clickHandler() {
    fetchData();
  }

  
  return (
    <div className='w-1/2 h-[450px] bg-green-600 rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-4'>
      <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
      
      {
        loading ? (<Spainner/>) :(<img src= {gif} width="450" className='h-[65%]' />)
      }
      <button onClick={clickHandler}
      className='w-10/12 mb-7 text-lg py-2 rounded-lg bg-pink-200'>Generate</button>
    </div>
  )
}

export default Random