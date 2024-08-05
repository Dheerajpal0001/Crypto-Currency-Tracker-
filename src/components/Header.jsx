import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <div className='flex text-xl bg-black text-white p-6 gap-8 border-b-2'>

      <Link to={"/"}>Home</Link>

      <Link to={"/exchanges"}>Exchange</Link>

      <Link to={"/coins"}>Coins</Link>

    </div>

  )
}

export default Header