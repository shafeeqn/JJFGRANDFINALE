"use client";
import React, { useState } from 'react'
import ViewResult from './ViewResult';

interface Props {
    programs: any
}

const ProgramsList = (props : Props) => {

    const [selectedProgram, setSelectedProgram] = useState<any>();
    const [resultView, setResultView] = useState<boolean>(false);

  return (
    <div className="flex flex-col p-3 w-full">
          <span className="text-center font-bold text-3xl p-2">Programs</span>
          <div className="flex flex-wrap justify-center p-1 w-full gap-1 h-2/3">
            {props.programs?.length > 0 ? (
              props.programs?.map((program: any) => (
                <div
                  className="bg-yellow hover:bg-yellower transition-all duration-300 flex w-64 items-center gap-3 px-3 py-2 border-black shadow-md border-2 rounded-xl font-semibold hover:scale-[1.01] cursor-pointer"
                    onClick={() => {
                      setSelectedProgram(program);
                      setResultView(true);
                    }}
                >
                  <p>{program.code}</p>
                  <p>{program.name}</p>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-2xl font-bold">No Results Published.</p>
              </div>
            )}
          </div>
          <ViewResult selectedProgram={selectedProgram} resultView={resultView} setResultView={setResultView} />
        </div>
  )
}

export default ProgramsList
