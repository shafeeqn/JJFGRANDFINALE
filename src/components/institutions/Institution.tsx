"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function debounce<T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
): (...args: T) => void {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: T) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

interface Props {
  searchParams: {
    search: string;
    category: string;
    institution: string;
  };
  institutions: {
    name: string;
    place: string;
    zone: string;
  }[];
  candidates: {
    chest: string;
    name: string;
    dars: string;
  }[];
  candidatePrograms: {
    code: string;
    prg: string;
  }[];
}

const Institution = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const router = useRouter();
  const delayedSearch = debounce((term: string) => {
    router.push(`/institutions?search=${term}`);
  }, 1000);

  useEffect(() => {
    console.log(props.searchParams);
  }, []);
  return (
    <>
      {!props.searchParams.category ? (
        <div>
          <label className="flex gap-1 justify-center cursor-pointer w-full">
            <input
              type="text"
              className="rounded-full px-3 h-10
               border-yellow border-dashed border-2 w-full"
              placeholder="Search Candidates Here"
              onChange={(e) => delayedSearch(e.target.value)}
              required
            />
            <div className="bg-yellow rounded-full w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                className="m-auto mt-3 "
                width="16"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
          </label>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            {props.institutions.map((instn, index) => (
              // <div className='p-2 '>
              //     {c.name}
              // </div >
              <div
                className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start "
                key={index}
              >
                <div className=" border-2 h-28 p-3 my-2 gap-2 border-primary flex flex-col cursor-pointer items-center justify-center rounded-xl border-dashed w-full">
                  <p className=" text-center">{instn.name}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        router.push(
                          `/institutions?category=junior&institution=${instn.name}`
                        );
                      }}
                      className="px-2 py-1 text-sm bg-primary hover:bg-primary rounded-lg text-white font-semibold"
                    >
                      Junior
                    </button>
                    <button
                      onClick={() => {
                        router.push(
                          `/institutions?category=senior&institution=${instn.name}`
                        );
                      }}
                      className="px-2 py-1 text-sm bg-primary hover:bg-primary rounded-lg text-white font-semibold"
                    >
                      Senior
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-xs m-10 print:m-0 p-8 rounded-xl">
          <p className="text-3xl font-bold ">Jamia Dars Fest 2023-&apos;24</p>
          <p className="text-2xl font-bold mb-2">
            {
              props.institutions.find(
                (instn) => instn.name === props.searchParams.institution
              )?.zone
            }
          </p>
          <div className="">
            <div className="flex h-48 items-end mb-8 w-[1260px]">
              <div className="w-[400px] my-auto text-center">
                <p className="text-2xl font-bold ">
                  {
                    props.institutions.find(
                      (instn) => instn.name === props.searchParams.institution
                    )?.name
                  }
                </p>
                <p className="font-bold mt-2">
                  Program List for Junior Category
                </p>
                <p className="font-bold ">
                  {
                    props?.candidates?.filter(
                      (cndt) => cndt?.dars == props?.searchParams?.institution
                    )?.length
                  }{" "}
                  Candidates
                </p>
              </div>
              <div className="">
                <div className="flex whitespace-nowrap font-semibold">
                  <p className="w-8 print:w-8 -rotate-90">ഖിറാഅത്ത്</p>
                  <p className="w-8 print:w-8 -rotate-90">ഹിഫ്ള്</p>
                  <p className="w-8 print:w-8 -rotate-90">വാങ്ക്</p>
                  <p className="w-8 print:w-8 -rotate-90">പ്രസംഗം അറബി</p>
                  <p className="w-8 print:w-8 -rotate-90">പ്രസംഗം മലയാളം</p>
                  <p className="w-8 print:w-8 -rotate-90">പ്രസംഗം ഉറുദു</p>
                  <p className="w-8 print:w-8 -rotate-90">പ്രസംഗം ഇംഗ്ലീഷ്</p>
                  <p className="w-8 print:w-8 -rotate-90">ഗ്രന്ഥവായന</p>
                  <p className="w-8 print:w-8 -rotate-90">ഗാനം അറബി</p>
                  <p className="w-8 print:w-8 -rotate-90">മാപ്പിളപ്പാട്ട്</p>
                  <p className="w-8 print:w-8 -rotate-90">മാലപ്പാട്ട്</p>
                  <p className="w-8 print:w-8 -rotate-90">ഗാനം ഉറുദു</p>
                  <p className="w-8 print:w-8 -rotate-90">കഥ പറച്ചില്‍</p>
                  <p className="w-8 print:w-8 -rotate-90">ഗദ്യവായന മലയാളം</p>
                  <p className="w-8 print:w-8 -rotate-90">മുശാഅറ</p>
                  <p className="w-8 print:w-8 -rotate-90">പദപ്പയറ്റ് അറബി</p>
                  <p className="w-8 print:w-8 -rotate-90">
                    പദപ്പയറ്റ് ഇംഗ്ലീഷ്
                  </p>
                  <p className="w-8 print:w-8 -rotate-90">മദ്ഹുന്നബി</p>
                  <p className="w-8 print:w-8 -rotate-90">അറബി സംഘഗാനം</p>
                  <p className="w-8 print:w-8 -rotate-90">മലയാള സമൂഹ ഗാനം</p>
                  <p className="w-8 print:w-8 -rotate-90">ചിത്രരചന</p>
                  <p className="w-8 print:w-8 -rotate-90">സുഡോക്കു</p>
                  <p className="w-8 print:w-8 -rotate-90">മെമ്മറി ടെസ്റ്റ്</p>
                  <p className="w-8 print:w-8 -rotate-90">ഖത്തുന്നസ്ഖ്</p>
                  <p className="w-8 print:w-8 -rotate-90">കേട്ടെഴുത്ത്</p>
                  <p className="w-8 print:w-8 -rotate-90">
                    പോസ്റ്റര്‍ ഡിസൈനിംഗ്
                  </p>
                  <p className="w-8 print:w-8 -rotate-90">
                    നിഘണ്ടു നിര്‍മ്മാണം
                  </p>
                  <p className="w-8 print:w-8 -rotate-90">തശ്കീല്‍</p>
                  <p className="w-8 print:w-8 -rotate-90">മലയാള പ്രബന്ധം</p>
                  <p className="w-8 print:w-8 -rotate-90">പ്രശ്നോത്തരി</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            {darsData.map((v, i) => (
              <div key={i} className="flex w-[1260px] ggg">
                <p className="w-[64px] text-center line-clamp-1 font-semibold px-2">
                  {v.code}
                </p>
                <p className="w-[340px] text-left line-clamp-1 font-semibold pl-2">
                  {v.name}
                </p>
                <div className="">
                  <div className="flex border-b border-slate-800">
                    {Array.from({ length: 9 }, (_, index) => (
                      <p
                        key={index}
                        className="w-8 print:w-8 h-5 even:bg-gray-200 font-bold"
                      >
                        {containsNumber1to9(
                          [
                            v.stage1,
                            v.stage2,
                            v.stage3,
                            v.groupstage1,
                            v.groupstage2,
                            v.groupstage3,
                            v.offstage1,
                            v.offstage2,
                            v.offstage3,
                            v.groupoffstage,
                          ],
                          "0" + (index + 1)
                        )
                          ? "✓"
                          : ""}
                      </p>
                    ))}
                    {Array.from({ length: 21 }, (_, index) => (
                      <p
                        key={index}
                        className="w-8 print:w-8 h-5 even:bg-gray-200 font-bold"
                      >
                        {containsNumber(
                          [
                            v.stage1,
                            v.stage2,
                            v.stage3,
                            v.groupstage1,
                            v.groupstage2,
                            v.groupstage3,
                            v.offstage1,
                            v.offstage2,
                            v.offstage3,
                            v.groupoffstage,
                          ],
                          index + 1
                        )
                          ? "✓"
                          : ""}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      )}
    </>
  );
};

export default Institution;
