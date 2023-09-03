import { useEffect, useState } from 'react'
import axios from 'axios' 
import Spainner from './Spainner';




const Tag = () => {
  const [tag, setTag] = useState('');
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');
  
  

  async function fetchData(){
    setLoading(true);
    const Api = 'p29KNcVN1S2GFf3ReuilR0ILg5J4Y2Xw';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${Api}&tag=${tag}`;
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

  function changeHandler(event){
    setTag(event.target.value);
  }

  
  return (
    <div className='w-1/2 h-[450px] bg-blue-600 rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-4'>
      <h1 className='text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      
      {
        loading ? (<Spainner/>) :(<img src= {gif} width="450" className='h-[65%]' />)
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg bg-pink-200 mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
      />
      <button onClick={clickHandler}
      className='w-10/12 mb-7 text-lg py-2 rounded-lg bg-pink-200 mb-1'>Generate</button>
    </div>
  )
}

export default Tag