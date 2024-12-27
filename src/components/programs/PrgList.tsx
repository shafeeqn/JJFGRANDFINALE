import Link from "next/link";
import React from "react";

interface Props {
  program: any;
}

const PrgList = (props: Props) => {
  return (
    <div className="p-20  lg:flex lg:flex-col lg:items-center">
      <div className="text-center">
        <p className="text-3xl font-bold ">JAMIA JUNIOR FEST &apos;25 I GRAND FINALE</p>
        <p className="text-2xl font-bold my-2 bg-black text-white">Item Var Sheet </p>

        <h1 className="font-bold mt-2 border-y-2 mb-4 border-black">
          {props.program?.code} - {props?.program?.name} - (
          {props.program?.cat == "J" ? "Junior" : "Senior"})
        </h1>
      </div>

      <table className="m-3">
        <thead>
          <tr className=" bg-black text-white">
            <th className="p-1">Sl</th>
            <th className="p-1">Code</th>
            <th className="p-1">Name </th>
            <th className="p-1">College</th>
            <th className="p-1">Grade</th>
            <th className="p-1">Mark</th>
            <th className="p-1">Position</th>
          </tr>
        </thead>
        <tbody>
          {props.program?.candidates.map((v: any, i: number) => (
            <tr key={i} className="">
              <td className="px-1 py-3 text-center w-8 border ">{i + 1}</td>
              <td className="px-1 py-3 text-center w-10 border">{v.code}</td>
              <td className="px-1 py-3 w-72 border">
                {v.name?.length > 24 ? v.name?.slice(0, 20) + ".." : v.name}
              </td>
              <td className="px-1 py-3 w-80  border">
                {v.college?.length > 24 ? v.college?.slice(0, 25) + ".." : v.college}
              </td>
              <td className="px-1 py-3 w-10 border"></td>
              <td className="px-1 py-3 w-8 border"></td>
              <td className="px-1 py-3 w-8 border"></td>
              <td className="px-1 py-3 w-8 border"></td>
              <td className="px-1 py-3 w-8 border"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrgList;
