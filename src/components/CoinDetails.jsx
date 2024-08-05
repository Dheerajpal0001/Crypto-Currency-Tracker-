import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import { server } from '..';
import ErrorHandle from './ErrorHandle';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {





  const [coin, setCoin] = useState({})
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const params = useParams()

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        setCoin(data);
        console.log(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.error(error);
        setloading(false);
      }
    }

    fetchCoin();

  }, [params.id])

  if (error) {
    return <ErrorHandle />
  }


  // const handleChange = (e) => {
  //   setCurrency(e.target.value);
  // }


  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";



  return (
    <div className='w-full h-screen bg-gray-100 py-7 px-8'>
      {
        loading ? (<Loader />) :
          <>
            <div className='bg-gray-100  flex items-center justify-center flex-wrap '>
              <label htmlFor="inr" className='px-2'>INR</label>
              <input type="radio" id="inr" value="inr" checked={currency === "inr"} onChange={(e) => setCurrency(e.target.value)} />

              <label htmlFor="eur" className='px-2'>EUR</label>
              <input type="radio" id="eur" value="eur" checked={currency === "eur"} onChange={(e) => setCurrency(e.target.value)} />

              <label htmlFor="usd" className='px-2'>USD</label>
              <input type="radio" id="usd" value="usd" checked={currency === "usd"} onChange={(e) => setCurrency(e.target.value)} />
            </div>



            <div className='flex items-center justify-center mt-7'>
              <div> Last Updated On : {Date(coin.market_data.last_updated).split("G")[0]}</div>
            </div>

            <div className='w-32  bg-gray-100 flex items-center justify-center flex-wrap flex-col pt-10'>
              <img src={coin.image.large} className='w-16 h-16 object-contain' alt="" />
              <div>{coin.name}</div>
              <div>{currencySymbol}{coin.market_data.current_price[currency]}</div>
              {
                coin.market_data.price_change_percentage_24h > 0 ?
                  <div className='flex items-center'><img src="https://www.clipartmax.com/png/middle/434-4341554_656-arrow-free-clipart-green-up-arrow-gif.png" className='w-4 h-3' alt="" /> {coin.market_data.price_change_percentage_24h}%</div> :
                  <div className='flex items-center'><img src="https://th.bing.com/th/id/R.9a8970a9f5a34fc7af6900a2a4a3b225?rik=lFlOKmybZPlUaA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fw%2fa%2f5%2f2%2fI%2fh%2fdown-arrow-hi.png&ehk=3WmCvpe0DJz%2fWsmPwu8Py5LjO52KZMFKmrPuieRqVVc%3d&risl=&pid=ImgRaw&r=0://i.pinimg.com/originals/88/68/7b/88687bfacfd073e636bfad341eef0723.png" className='w-3 h-3' alt="" />{coin.market_data.price_change_percentage_24h}%</div>
              }
              <div className='text-lg bg-black p-2 m-2 text-white'>{`#${coin.market_cap_rank}`}</div>
            </div>
            <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} />
          </>
      }
    </div >
  )
}

export default CoinDetails

const CustomBar = ({ high, low }) => {
  return (<div className='min-w-[200px] w-full bg-gray-200 h-4'>
    <div className='bg-blue-400 h-4 mt-8' style={{ width: `50%` }}></div>
    <div className='flex items-center justify-between mt-2'>
      <div className='text-white bg-red-700 p-2'>{low}</div>
      <span className='text-md'>24H Range</span>
      <div className='text-white bg-green-700 p-2'>{high}</div>
    </div>
  </div>
  )
}