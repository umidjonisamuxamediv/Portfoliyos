import React,{useState,useEffect} from 'react'
import { getDocs,collection } from "firebase/firestore";
import {db} from '../../firbesaeConfig'
import rasim from '../../img/photo_2024-06-06_02-17-32.jpg'
const Home = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'Home')
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
    <div className='w-full   md:h-[91vh] flex justify-center items-center  '>
        <div className='md:w-[63%] h-[50%] md:flex md:flex-row'>
      <div className='flex ml-4 '>
        {conrtys.map((el)=>(
            <div className='text-white  pt-[20%] md:m-9 w-[60%] border-b-4 hover:w-[90%] ease-in duration-300 '>
                <div className='text-[40px] md:text-[54px]  ' key={el.id}>{el.lastname}</div>
                <div className='text-[40px] md:text-[54px] ' key={el.id}>{el.firstname}</div>
                <div className='text-[30px]  md:w-[140%] md:text-[45px] ' key={el.id}>{el.web}</div>
                
            </div>
        ))}
      </div>
      <div className=' md:ml-[10%]'>
        <img className='rounded-full w-[100%] md:w-[90%] mt-9 md:mt-0' src={rasim} alt=""  />
      </div>
      </div>
    </div>
  )
}

export default Home
