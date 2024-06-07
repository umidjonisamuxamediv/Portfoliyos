import React, {useState,useEffect} from 'react'
import { getDocs,collection } from "firebase/firestore";
import rasim from '../../img/html.png'
import rasim1 from '../../img/css.png'
import rasim2 from '../../img/js.png'
import rasim3 from '../../img/react.png'
import rasim4 from '../../img/next.png'
import rasim5 from '../../img/Firebase.png'
import rasim6 from '../../img/gitwhite.png'
import rasim7 from '../../img/tailwind.png'
import rasim8 from '../../img/ts.png'
import {db} from '../../firbesaeConfig'
const Skils = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'Skils')
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
    <div className='w-ful'>
        {conrtys.map((el)=>(
            <div className='text-center text-white text-[40px]' key={el.id}>{el.skils}</div>
        ))}
        <div className='mr-[6%]'>
            <div className='flex justify-center  mt-[5%]'>
                <img className=' w-[20%] md:w-[8%] ml-[7%]' src={rasim} alt=""  />
                <img className=' w-[20%] md:w-[8%] ml-[7%]' src={rasim1} alt="" />
                <img className=' w-[20%] md:w-[8%] ml-[7%]' src={rasim2} alt="" />
                <img className=' w-[20%] md:w-[8%] ml-[7%]' src={rasim3} alt="" />
            </div>
            <div className='flex justify-center'>
                <img className=' w-[20%] md:w-[8%] ml-[7%]' src={rasim4} alt="" />
                <img className=' w-[20%] md:w-[8%] ml-[7%]' src={rasim5} alt="" />
                <img className=' w-[20%] md:w-[8%] ml-[7%]' src={rasim6} alt="" />
            </div>
            <div className='flex justify-center mb-[10%] '>
                <img className=' w-[20%] md:w-[8%] ml-[7%]' src={rasim7} alt="" />
                <img className=' w-[20%] md:w-[8%] ml-[7%]' src={rasim8} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Skils
