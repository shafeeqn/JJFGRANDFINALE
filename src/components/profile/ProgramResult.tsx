import React, { useEffect } from "react";

interface Props {
  selectedCP: any;
  programResultView: boolean;
  setProgramResultView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProgramResult(props: Props) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center  items-center  ${
        props.programResultView ? "block" : "hidden"
      } `}
    >
      <div className="bg-white p-3 rounded-xl flex flex-col items-center min-w-[400px]  max-w-[400px] max-h-[95vh] text-center ">
        <p className="font-semibold text-2xl">{props.selectedCP?.name}</p>
        {props?.selectedCP &&   props.selectedCP.publish == 1  ? (            <>
              <p>Position : <span className="font-bold">{props?.selectedCP?.position == 1 ? "First" :  props?.selectedCP?.position == 2 ? "Second" :  props?.selectedCP?.position == 2 ? "Third"  : 'NIL'}</span></p>
              <p>Grade : <span className="font-bold">{props?.selectedCP?.grade  || 'NIL'}</span></p>
              <p>Points : <span className="font-bold">{props?.selectedCP?.pts  || 'NIL'}</span></p>
            </>
        ) : props.selectedCP?.pts as number == 0 ? (
          <>
          <p> Position : <span className="font-bold">NIL</span> </p>
          <p>Grade : <span className="font-bold">NIL</span></p>
          <p>Points : <span className="font-bold">NIL</span></p>
        </>
        ):(
          <p>Result Not Published</p>
        )}
        <button
          className="bg-primary text-white rounded-lg p-2"
          onClick={() => {
            props.setProgramResultView(false);
            // console.log(props.programResultView);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}