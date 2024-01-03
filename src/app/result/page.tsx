import React from 'react'
import candidatesData from '@/data/candidates.json'
import programsData from "@/data/programs.json"
import darsData from '@/data/institutions.json'
import cp from '@/data/cp.json'
import Results from '@/components/result/Results'

const page = () => {
  const publishedPrograms = programsData.filter((prg)=> prg.publish == 1 )

  const candidateWithProgram : any = publishedPrograms.map((prg)=>{
    const candidate = cp.filter((c)=> c.prg == prg.code)
    const candidatesWithDetails = candidate.map((cnd)=> {
      return {
        
      cp :  cnd,
       ...candidatesData.find((c)=> c.chest == cnd.code)
      }
    })
    return {
      ...prg,
      candidate: candidatesWithDetails
    }
  })
  

  const darsWithTotalPoints = darsData.map((dars)=>{
    let totalPoints = 0;

    candidateWithProgram.map((prg : any)=>{
      prg.candidate.map((cnd : any)=>{
        if(cnd?.dars == dars.name){
          // console.log(cnd?.cp);
          
          totalPoints += cnd?.cp?.pts || 0
        }
      })
    })

    return {
      ...dars,
      totalPoints
    }
  })

  const darsWithTotalPointsSorted = darsWithTotalPoints.sort((a,b)=> b.totalPoints - a.totalPoints)

  console.log(darsWithTotalPointsSorted[0]);
  
  
  
  return (
    <div>
      <Results topTeams={darsWithTotalPointsSorted} programs={candidateWithProgram}/>
    </div>
  )
}

export default page