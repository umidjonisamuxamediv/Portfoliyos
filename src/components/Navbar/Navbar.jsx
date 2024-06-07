import React , {useState,useEffect} from 'react'
import {db} from '../../firbesaeConfig'
import { getDocs,collection } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { AiFillDatabase } from "react-icons/ai";
const Navbar = () => {
    const [open ,setOpen]=useState(false)
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'navbar')
      useEffect(()=>{
        const setings =async()=>{
          const data = await getDocs(contryses)
          let array =[]
          data.forEach(doc=>{
            const dataDoc=doc.data()
            const fullDoc ={id: doc.id,  ...dataDoc}
            array.push(fullDoc)
            
          })
          setContriys(array)
        }
        setings()
      },[])
  return (
    <div classname=" w-full   md:flex md:justify-around bg-red-500 fixed">
       <div className='  md:flex md:justify-around w-full fixed '>
        {conrtys.map((el)=>(
            <div className=' p-[10px] md:hidden flex w-full md:flex md:items-center md:justify-around text-white bg-sky-700'>
            <div className='flex'>
            <Link className='font-bold md:text-[23px]' to={'#'} key={el.id}>{el.title}</Link>
            </div>
            <div onClick={()=>setOpen(!open)} className='absolute top-3 left-[90%] text-[20px] md:hidden cursor-pointer'>
            <AiFillDatabase name={open?'close':'menu'}></AiFillDatabase>
            </div>
            <div className= {` absolute  w-[100%] bg-sky-700 md:flex md:flex-row flex flex-col   ${open ? 'top-11':'top-[-490px]'}`}>
            <Link className='m-4 ml-5' to={'#'} key={el.id}>{el.home}</Link>
            <Link className='m-4 ml-5' to={'#ckils'} key={el.id}>{el.skils}</Link>
            <Link className='m-4 ml-5' to={'#'} key={el.id}>{el.prayekt}</Link>
            <Link className='m-4 ml-5' to={'#'} key={el.id}>{el.numbers}</Link>
            </div>
            </div>
        ))}
        {conrtys.map((el)=>(
            <div className=' p-[10px] hidden md:flex  w-full md:flex md:items-center md:justify-around text-white bg-sky-700'>
            <div className='flex'>
            <Link className='font-bold md:text-[23px]' to={'#'} key={el.id}>{el.title}</Link>
            </div>
            <div className= '  w-full bg-sky-700 md:flex md:flex-row flex flex-col   '>
            <Link className='m-4 ml-5' to={'#'} key={el.id}>{el.home}</Link>
            <Link className='m-4 ml-5' to={'/ckils'} key={el.id}>{el.skils}</Link>
            <Link className='m-4 ml-5' to={'#'} key={el.id}>{el.prayekt}</Link>
            <Link className='m-4 ml-5' to={'#'} key={el.id}>{el.numbers}</Link>
            </div>
            </div>
        ))}
       </div>
       
    </div>
  )
}

export default Navbar
