import React from 'react'


interface Props {
    programs :  {
        code : number
        name : string
        isStage : number
        cat:string 
        isGrp : number
        publish : number
        ctp : number
    }[]
}

const Programs = (props:Props) => {
  return (
    <div className='flex flex-wrap gap-2 justify-center mt-3'>
        Programs

        {
            props.programs.map((c , index)=>
                // <div className='p-2 '>
                //     {c.name}
                // </div >
                <div
              className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start "
              key={index}
            >
              <h1 className="px-2 py-1 bg-brown inline rounded-lg text-white font-semibold">
                {c.code}
              </h1>
              <div
                className="line-clamp-2 border-2 h-16 p-3 my-2 border-primary flex cursor-pointer items-center justify-center rounded-xl border-dashed w-full"
              >
                <p className="line-clamp-2 text-center">{c.name}</p>
              </div>

    </div>
)}
</div>
    
)}

export default Programs