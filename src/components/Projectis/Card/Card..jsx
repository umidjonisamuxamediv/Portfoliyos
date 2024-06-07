import React from 'react'
import {Link} from 'react-router-dom'
const Card = (props) => {
  return (
    <div className=' w-[80%] h-[28rem] md:w-[30%]  md:h-[25rem] shadow-2xl bg-sky-800 p-4 mt-4 md:ml-3'>
       <img className='h-[30%] md:h-[40%] w-full' src={props.img} alt="" />
       <div className='w-full mt-3 text-white text-[20px]'>{props.name}</div> 
       <h5 className='mt-3 text-white mb-3'>{props.tetx}</h5>
        <Link className='text-white' to="https://visma-ga1mk3rmn-umidjonisamuxamedivs-projects.vercel.app/">{props.link}</Link>
    </div>
  )
}

export default Card
