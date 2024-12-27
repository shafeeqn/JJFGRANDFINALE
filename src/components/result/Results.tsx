import React from "react";
import TeamsList from "./TeamsList";
import ProgramsList from "./ProgramsList";

interface Props {
  topTeams: any;
  programs: any;
  topJunior: any;
  topSenior: any;
  topSuperSenior: any;
  topSubJunior: any;
  topGeneral: any;
}

const Results = (props: Props) => {

  console.log(props);


  return (
    <>
      <div className="flex w-full items-center justify-center gap-2 border-b border-yellower">
        <img src="/jam.jpg" className="w-16 h-16 object-cover -my-20 border rounded-full border-yellower" />

        <p className="text-center capitalize font-bold p-4 text-3xl text-yellower">JAMIA JUNIOR FEST - GRAND FINALE</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full md:h-screen overflow-hidden mt-2">


        <div className="flex flex-col h-[90vh] min-w-[350px] rounded-3xl gap-4 p-3">

          <TeamsList topTeams={props.topTeams} />

        </div>


        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row  lg:mt-2 w-screen">
            
            <div className="w-full lg:w-[25%] ">
              <p className="font-extrabold text-xl text-center text-brown">GENERAL TOPPERS</p>
              <div className="flex flex-wrap p-2 gap-1">
                {props.topGeneral?.length > 0 ? (
                  props.topGeneral.slice(0, 3).map((topper: any) => (
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                      <div className="flex gap-2">
                        <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                          {topper.chest}
                        </p>
                        <p className="font-bold">{topper.name}</p>
                      </div>
                      <p className="text-2xl font-bold">{topper.totalPoints} pts</p>
                      <p className="text-sm uppercase">{topper.college}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                      No Toppers to show
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="w-full lg:w-[25%]">
              <p className="font-extrabold text-xl text-center text-brown">SENIOR TOPPERS</p>
              <div className="flex flex-wrap p-2 gap-1">
                {props.topSenior?.length > 0 ? (
                  props.topSenior.slice(0, 3).map((topper: any) => (
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                      <div className="flex gap-2">
                        <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                          {topper.chest}
                        </p>
                        <p className="font-bold">{topper.name}</p>
                      </div>
                      <p className="text-2xl font-bold">{topper.totalPoints} pts</p>
                      <p className="text-sm uppercase">{topper.college}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                      No Toppers to show
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="w-full lg:w-[25%]">
              <p className="font-extrabold text-xl text-center text-brown">JUNIOR TOPPERS</p>
              <div className="flex flex-wrap p-2 gap-1">
                {props.topJunior?.length > 0 ? (
                  props.topJunior.slice(0, 3).map((topper: any) => (
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                      <div className="flex gap-2">
                        <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                          {topper.chest}
                        </p>
                        <p className="font-bold">{topper.name}</p>
                      </div>
                      <p className="text-2xl font-bold">{topper.totalPoints} pts</p>
                      <p className="text-sm uppercase">{topper.college}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                      No Toppers to show
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>





          <div className="flex flex-col lg:flex-row lg:mt-2">

            <div className="w-full lg:w-[25%]">
              <p className="font-extrabold text-xl text-center text-brown">SUPER SENIOR TOPPERS</p>
              <div className="flex flex-wrap p-2 gap-1">
                {props.topSuperSenior?.length > 0 ? (
                  props.topSuperSenior.slice(0, 3).map((topper: any) => (
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                      <div className="flex gap-2">
                        <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                          {topper.chest}
                        </p>
                        <p className="font-bold">{topper.name}</p>
                      </div>
                      <p className="text-2xl font-bold">{topper.totalPoints} pts</p>
                      <p className="text-sm uppercase">{topper.college}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                      No Toppers to show
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="w-full lg:w-[25%]">
              <p className="font-extrabold text-xl text-center text-brown">SUB JUNIOR TOPPERS</p>
              <div className="flex flex-wrap p-2 gap-1">
                {props.topSubJunior?.length > 0 ? (
                  props.topSubJunior.slice(0, 3).map((topper: any) => (
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                      <div className="flex gap-2">
                        <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                          {topper.chest}
                        </p>
                        <p className="font-bold">{topper.name}</p>
                      </div>
                      <p className="text-2xl font-bold">{topper.totalPoints} pts</p>
                      <p className="text-sm uppercase">{topper.college}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                      No Toppers to show
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
      <div>

        <ProgramsList programs={props.programs} />

      </div>

    </>
  );
};

export default Results;
