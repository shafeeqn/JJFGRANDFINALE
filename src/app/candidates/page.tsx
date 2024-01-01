import React from 'react'
import candidates from '@/data/candidates.json'
import Candidate from '@/components/candidates/Candidate'

const page = () => {

  
  return (
    
    <div>page
      <Candidate candidates={candidates as any} />
    </div>
  )
}

export default page