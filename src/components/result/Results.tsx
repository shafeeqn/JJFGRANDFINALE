import React from 'react'

interface Props {
    topTeams: any
    programs: any
    }

const Results = (props:Props) => {
  return (
    <div className="flex flex-col lg:flex-row w-full md:h-screen items-center p-5">
 <div className="flex flex-col h-[90vh] min-w-[300px] rounded-3xl gap-4 p-3 ">
<div className="flex flex-col gap-2  items-center overflow-y-auto">
            {props.topTeams?.length > 0 ? (
              props.topTeams.map((team : any , index : number) => (
                team.totalPoints > 0 && (<div className="flex border hover:bg-ysmoke w-full p-4 transition-colors duration-300 rounded-lg">
                <div className="flex flex-col w-3/6 gap-1">
                  <p className="font-bold text-lg">#{index + 1}</p>
                  <div className="flex items-end">
                    <span className="font-bold text-4xl text-browner">
                      {team.totalPoints}
                    </span>
                  </div>
                  <p className="font-semibold text-xs">{team.name}</p>
                </div>
                <div className="flex flex-col justify-center w-3/6 text-xs font-semibold whitespace-nowrap gap-1">
                  {/* {team.categoryWisePoint.map((cw) => (
                    <p>
                      <span className="bg-yellow px-2 rounded-full">
                        {cw.categoryName} : {cw.categoryPoint}
                      </span>
                    </p>
                  ))} */}
                </div>
              </div>)
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-2xl font-bold ">No Results Published.</p>
              </div>
            )}
          </div>

          </div>


          <div className="flex flex-col w-3/4 h-[90vh] overflow-y-auto p-3">
          <span className="text-center">Programs</span>
          <div className="flex flex-wrap justify-center p-1 w-full gap-1 h-2/3">
            {props.programs?.length > 0 ? (
              props.programs?.map((program : any) => (
                <div
                  className="bg-yellow hover:bg-yellower transition-all duration-300 flex w-64 items-center gap-3 px-3 py-2 border-black shadow-md border-2 rounded-xl font-semibold hover:scale-[1.01] cursor-pointer"
                //   onClick={() => {
                //     setSelectedProgram(program);
                //     setResultView(true);
                //   }}
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
        </div>

                


    </div>
  )
}

export default Results