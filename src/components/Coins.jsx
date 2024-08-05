import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import Loader from './Loader'
import ErrorHandle from './ErrorHandle'
import CoinCard from './CoinCard'


const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(1);
  const [currency, setCurrency] = useState("inr");


  const changePage = (e) => {
    setpage(e);
    setloading(true);
  }

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  // const btns = new Array(132).fill();
  const btns = [];
  for (let i = 1; i <= 131; i++) {
    btns.push(i);
  }



  useEffect(() => {

    const fetchCoinsData = async () => {
      try {

        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

        setCoins(data);
        setloading(false)

        // console.log(data);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    }

    fetchCoinsData();
  }, [currency, page])

  if (error) {
    return <ErrorHandle message={"Error while Fetching Coins DAta"} />
  }


  const handleChange = (e)=>{
    setCurrency(e.target.value);
  }


  return (
    <>
    <div className='bg-gray-100  flex items-center justify-center flex-wrap pt-4 pb-0'>
      <label htmlFor="inr" className='px-2'>INR</label>
      <input type="radio" id="inr" value="inr" checked={currency === "inr"} onChange={handleChange}/>

      <label htmlFor="eur" className='px-2'>EUR</label>
      <input type="radio" id="eur" value="eur" checked={currency === "eur"} onChange={handleChange}/>

      <label htmlFor="usd" className='px-2'>USD</label>
      <input type="radio" id="usd" value="usd" checked={currency === "usd"} onChange={handleChange}/>
    </div>
      <div className='min-h-[calc(100vh-1.5rem)] bg-gray-100  flex items-center justify-center flex-wrap py-10 px-40'>
        {
          loading ? (
            <Loader />
          ) :
            coins.map((ele) => {
              return <CoinCard key={ele.id} id={ele.id} name={ele.name} image={ele.image} symbol={ele.symbol} currencySymbol={currencySymbol} url={ele.url} price={ele.current_price} />
            })
        }
      </div>
      {/* <div className='w-full flex items-center justify-center overflow-auto p-8'>
        {
          btns.map((item, index) => { */}

      {/* <button className='px-10' onClick={(index)=>index-1} key={item}> prev </button>
              <button key={item}>{btns[index]}</button>
              <button className='px-10' onClick={(index)=>index+1} key={item}> next </button> */}
      {/* //         return <button key={item} className='bg-black text-white px-4 py-2' onClick={() => changePage(index + 1)}>{index + 1}</button>
            
      //     })
      //   }
      // </div> */}

      <div className='overflow-auto flex p-8'>
        {
          btns.map((item, index) => {
            return (
              <button
                key={item}
                className='bg-black text-white px-4 py-2 m-2'
                onClick={() => changePage(item)}
              >
                {item}
              </button>
            );
          })
        }
      </div>


    </>
  )
}

export default Coins