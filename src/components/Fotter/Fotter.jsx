import React, {useState,useEffect} from 'react'
import {db} from '../../firbesaeConfig'
import { getDocs,collection } from "firebase/firestore";
import { CiInstagram } from "react-icons/ci";
import {Link} from 'react-router-dom'
;import rasim from '../../img/5296765_camera_instagram_instagram logo_icon.png'
const Fotter = () => {
  const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'fotter')
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
    <div className='w-full flex justify-center items-center mt-5 mb-5 h-[5rem] bg-sky-700'>
      <div className='flex flex-col md:flex md:justify-center w-[80%]'>
        <div className=' flex  items-center justify-center '>
          {conrtys.map((el)=>(
            <div className='md:flex text-white text-center'>
              <div className='p-2 ' key={el.id}>{el.gmail}</div>
              <div className='p-2 ml-2 ' key={el.id}>{el.number}</div>
            </div>
          ))}
          <Link to='https://www.instagram.com/umid__0405?igsh=ZnV5anQ4NTI2b3g0&utm_source=qr' className=' md:w-[3%] h-[4rem] ml-4 flex items-center  '>
          <img src={rasim} alt=""  className='w-[100%] h-[40%] md:w-[100%] md:h-[70%]' />
            </Link>
        </div>
      
      </div>
    </div>
  )
}

export default Fotter
