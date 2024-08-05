import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({id, name, image, symbol, url, price,currencySymbol="₹"}) => {
  return (
    
    <Link to={`/coins/${id}`}>
        <div id={id} className='m-8 hover:transition hover:scale-125 shadow-xl border-2 border-gray-200 rounded-lg p-4 flex flex-col items-center w-40'>
              {/* <a href={ele.url} target='blank'> */}
                <img src={image} alt="loading..." className='h-12 w-12 mb-2 text-xs' />
              {/* </a> */}
              <div className='text-lg font-semibold mb-2'><b>{symbol}</b></div>
              <div className='text-center text-sm font-medium truncate w-full overflow-hidden text-ellipsis whitespace-nowrap'>{name}</div>
              <div className='text-center text-sm font-medium truncate w-full overflow-hidden text-ellipsis whitespace-nowrap'>{price ? `${currencySymbol}${price}`: "NA"}</div>
            </div>
    </Link>
    
  )
}

export default CoinCard