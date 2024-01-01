import React from 'react'

interface Props {
    institutions :  {
        code : number
        name : string
        isStage : number
        cat:string 
        isGrp : number
        publish : number
        ctp : number
    }[]
}

const Institution = (props:Props) => {
  return (
    <div>
        Institution

        {
            props.institutions.map((c)=>
                <>
                    {c.name}
                </>
            )
        }

    </div>
  )
}


export default Institution