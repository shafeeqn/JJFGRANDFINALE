import React from 'react'
import candidatesData from '@/data/candidates.json'
import programsData from "@/data/programs.json"
import darsData from '@/data/institutions.json'
import cp from '@/data/cp.json'

const page = () => {
  const publishedPrograms = programsData.filter((prg)=>prg.publish != 1 )

  const candidateWithProgram = publishedPrograms.map((prg)=>{
    const candidate = cp.filter((c)=> c.prg == prg.code)
    return {
      ...prg,
      candidate: candidate.map((cnd)=> candidatesData.find((c)=> {
        if(c.chest == cnd.code){
          return {
            ...c,
            cp: cnd
          }
        }
      }))
    }
  })

  const darsWithTotalPoints = darsData.map((dars)=>{
    let totalPoints = 0;

    candidateWithProgram.map((prg)=>{
      prg.candidate.map((cnd)=>{
        if(cnd?.dars == dars.name){
          totalPoints += cnd.pts
        }
      })
    })

    return {
      ...dars,
      totalPoints
    }
  })
  
  
  return (
    <div>page</div>
  )
}

export default page