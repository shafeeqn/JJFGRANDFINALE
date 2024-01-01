"use client"
import React, { useEffect } from 'react'


interface Props {
    candidates :  {
        chest : number
        name : string
        dars : number
    }[]
}


const Candidate = (props:Props) => {

    useEffect(()=>{
        console.log(props.candidates);
        
    },[])

  return (
    <div>
        Candidate

        {
            props.candidates?.map((c)=>
                <>
                    {c.name}
                </>
            )
        }

    </div>
  )
}

export default Candidate