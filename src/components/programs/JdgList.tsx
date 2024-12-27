"use client";
import React, { use, useEffect } from "react";

interface Props {
  program: any;
}
const JdgList = (props: Props) => {
  useEffect(() => {
    console.log(props.program);
  }, []);
  return (
    <div className="p-20 text-sm print:p-2 lg:flex lg:flex-col lg:items-center">
      <div className="flex gap-10">
        <div>
          <div className="text-center">
            <p className="text-2xl font-bold ">JAMIA JUNIOR FEST &apos;25</p>
            <p className="text-2xl font-bold my-2">GRAND FINALE</p>
            <p className="text-2xl font-bold my-2 bg-black text-white">Judge Slip</p>
            <h1 className="font-bold mt-2 border-y-2 mb-4 border-black">
              {props.program.name} ({props.program.cat})
            </h1>
          </div>
          <table className="w-full max-w-[700px] border border-slate-800">
            <thead>
              <tr className="print:bg-black print:text-white bg-black text-white">
                <th className="p-1">Sl</th>
                <th className="p-1">Chest</th>
                <th className="p-1">Lott</th>
                <th className="p-1">Mark</th>
                <th className="p-1">Remark</th>
              </tr>
            </thead>
            <tbody>
              {props.program.candidates.map((c: any, i: any) => (
                <tr key={i}>
                  <td className=" border py-4 border-slate-800 px-1 text-center w-8">
                    {i + 1}
                  </td>
                  <td className=" border py-4 border-slate-800 px-1 text-center w-20">
                    {c.code}
                  </td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                </tr>
              ))}
              <tr>
                <td className=" border py-4 border-slate-800 px-1">&nbsp;</td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border py-4 border-slate-800 px-1">&nbsp;</td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="text-center">
            <p className="text-2xl font-bold ">JAMIA JUNIOR FEST &apos;25</p>
            <p className="text-2xl font-bold my-2">GRAND FINALE</p>
            <p className="text-2xl font-bold my-2 bg-black text-white">Judge Slip</p>
            <h1 className="font-bold mt-2 border-y-2 mb-4 border-black">
              {props.program.name} ({props.program.cat})
            </h1>
          </div>
          <table className="w-full max-w-[700px] border border-slate-800">
            <thead>
              <tr className="print:bg-black print:text-white bg-black text-white">
                <th className="p-1">Sl</th>
                <th className="p-1">Chest</th>
                <th className="p-1">Lott</th>
                <th className="p-1">Mark</th>
                <th className="p-1">Remark</th>
              </tr>
            </thead>
            <tbody>
              {props.program.candidates.map((c: any, i: any) => (
                <tr key={i}>
                  <td className=" border py-4 border-slate-800 px-1 text-center w-8">
                    {i + 1}
                  </td>
                  <td className=" border py-4 border-slate-800 px-1 text-center w-20">
                    {c.code}
                  </td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                </tr>
              ))}
              <tr>
                <td className=" border py-4 border-slate-800 px-1">&nbsp;</td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border py-4 border-slate-800 px-1">&nbsp;</td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="text-center">
            <p className="text-2xl font-bold ">JAMIA JUNIOR FEST &apos;25</p>
            <p className="text-2xl font-bold my-2">GRAND FINALE</p>
            <p className="text-2xl font-bold my-2 bg-black text-white">Judge Slip</p>

            <h1 className="font-bold mt-2 border-y-2 mb-4 border-black">
              {props.program.name} ({props.program.cat})
            </h1>
          </div>
          <table className="w-full max-w-[700px] border border-slate-800">
            <thead>
              <tr className="print:bg-black print:text-white bg-black text-white">
                <th className="p-1">Sl</th>
                <th className="p-1">Chest</th>
                <th className="p-1">Lott</th>
                <th className="p-1">Mark1</th>
                <th className="p-1">Mark2</th>
                <th className="p-1">Total</th>
                <th className="p-1">Remark</th>
              </tr>
            </thead>
            <tbody>
              {props.program.candidates.map((c: any, i: any) => (
                <tr key={i}>
                  <td className=" border py-4 border-slate-800 px-1 text-center w-8">
                    {i + 1}
                  </td>
                  <td className=" border py-4 border-slate-800 px-1 text-center w-20">
                    {c.code}
                  </td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                  <td className=" border py-4 border-slate-800 px-1"></td>
                  <td className=" border py-4 border-slate-800 px-1"></td>


                </tr>
              ))}
              <tr>
                <td className=" border py-4 border-slate-800 px-1">&nbsp;</td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>

              </tr>
              <tr>
                <td className=" border py-4 border-slate-800 px-1">&nbsp;</td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>
                <td className=" border py-4 border-slate-800 px-1"></td>

              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JdgList;
