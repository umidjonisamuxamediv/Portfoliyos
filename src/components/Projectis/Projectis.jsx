import React, {useState,useEffect} from 'react'
import {db} from '../../firbesaeConfig'
import { getDocs,collection } from "firebase/firestore";
import Card from './Card/Card.';
import rasim from '../../img/Аннотация 2024-06-07 135919.png'

const Projectis = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'projectis')
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
    <div className='mt-5 w-full flex justify-center flex-wrap '>
        
      <div className='w-[80%] md:flex md:flex-row-3'>
            {conrtys.map((el)=>(
                <Card
                img={rasim}
                name={el.name}
                tetx={el.title}
                link={el.link}
                />
            ))}
           
            
      </div>
    </div>
  )
}

export default Projectis
