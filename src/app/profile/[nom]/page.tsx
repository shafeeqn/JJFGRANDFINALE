import React from 'react'
import programsData from "@/data/programs.json"
import candidatesData from "@/data/candidates.json"
import cp from "@/data/cp.json"
import PrgList from '@/components/programs/PrgList'

const page = ({ params }: { params: { nom: string } }) => {
    const nom = params.nom

    const candidate = candidatesData.find((cnd)=> cnd.chest == nom)

    const programWithCandidates = cp.filter((cnd)=> cnd.code == nom).map((cnd)=>{

      return {
        ...cnd,
        ...programsData.find((c)=> c.code == cnd.prg)
      }
    })

    const cpWithProgram = {
      ...candidate,
      programs : programWithCandidates
    }

  return (
    <div>
      {/* <PrgList program={cpWithProgram}/> */}
    </div>
  )
}

export default page