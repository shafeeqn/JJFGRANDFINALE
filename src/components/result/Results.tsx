import React from "react";
import TeamsList from "./TeamsList";

interface Props {
  topTeams: any;
  programs: any;
  topJunior: any;
  topSenior: any;
}

const Results = (props: Props) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full md:h-screen items-center p-5">
        <div className="flex flex-col h-[90vh] min-w-[300px] rounded-3xl gap-4 p-3 ">

        <TeamsList topTeams={props.topTeams} />

        </div>

        <div className="flex flex-col w-3/4 h-[90vh] overflow-y-auto p-3">
          <span className="text-center">Programs</span>
          <div className="flex flex-wrap justify-center p-1 w-full gap-1 h-2/3">
            {props.programs?.length > 0 ? (
              props.programs?.map((program: any) => (
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
      <div className="flex flex-col lg:flex-row mt-60 lg:mt-8">
        <div>
          <p className="font-bold text-xl text-center">Junior Toppers</p>
          <div className="flex flex-wrap p-3 overflow-x-scroll gap-2">
            {props.topJunior?.length > 0 ? (
              props.topJunior.map((topper: any) => (
                <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                  <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                    {topper.chest}
                  </p>
                  <p className="font-bold">{topper.name}</p>
                  <p className="text-3xl font-bold">{topper.totalPoints} pts</p>
                  <p className="text-sm uppercase">Junior | {topper.dars}</p>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                {/* <p className="text-2xl font-bold text-primary">
                    No Results Published.
                  </p> */}
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="font-bold text-xl text-center">Senior Toppers</p>
          <div className="flex flex-wrap p-3 overflow-x-scroll gap-2">
            {props.topSenior?.length > 0 ? (
              props.topSenior.map((topper: any) => (
                <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                  <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                    {topper.chest}
                  </p>
                  <p className="font-bold">{topper.name}</p>
                  <p className="text-3xl font-bold">{topper.totalPoints} pts</p>
                  <p className="text-sm uppercase">Junior | {topper.dars}</p>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                {/* <p className="text-2xl font-bold text-primary">
                    No Results Published.
                  </p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
