import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index'
import Loader from './Loader'
import ErrorHandle from './ErrorHandle'



const Exchanges = () => {

  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {

    const fetchExchange = async () => {
      try {

        const { data } = await axios.get(`${server}/exchanges`);
        setexchanges(data);
        setloading(false);

        // console.log(data);
        // console.log(data.image);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    };
    fetchExchange();

  }, []);

  if (error) {
    return <ErrorHandle message={"Error while fetching data"} />
  }

  return (

    <div className='min-h-[calc(100vh-1.5rem)] bg-gray-100  flex items-center justify-center flex-wrap py-10 px-40'>
      {
        loading ? (
          <Loader />
        ) :
          exchanges.map((ele) => {
            return (
              <div key={ele.id} className='m-8 hover:transition hover:scale-125 shadow-xl border-2 border-gray-200 rounded-lg p-4 flex flex-col items-center w-40'>
                <a href={ele.url} target='blank'>
                  <img src={ele.image} alt="loading..." className='h-12 w-12 mb-2' />
                </a>
                <div className='text-lg font-semibold mb-2'><b>{ele.trust_score_rank}</b></div>
                <div className='text-center text-sm font-medium truncate w-full overflow-hidden text-ellipsis whitespace-nowrap'>{ele.name}</div>
              </div>
            )
          })
      }
    </div>
  )
}

export default Exchanges