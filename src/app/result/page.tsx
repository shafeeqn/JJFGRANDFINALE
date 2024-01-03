import React from 'react'
import candidatesData from '@/data/candidates.json'
import programsData from "@/data/programs.json"
import darsData from '@/data/institutions.json'
import cp from '@/data/cp.json'

const page = () => {
  const publishedPrograms = programsData.filter((prg)=>prg.publish != 1 )
  const candidateWithProgram = publishedPrograms
  return (
    <div>page</div>
  )
}

export default page