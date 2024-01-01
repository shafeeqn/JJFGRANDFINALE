// "use client";
// import {
//   Candidate,
//   Category,
//   GetSearchCandidatesDocument,
//   GetSearchCandidatesQuery,
//   GetSearchCandidatesQueryVariables,
//   Roles,
//   Team,
// } from "@/gql/graphql";
// import { SERVER_URL } from "@/lib/urql";
// import { withUrqlClient } from "next-urql";
// import { useEffect, useState } from "react";
// import { cacheExchange, fetchExchange, useQuery } from "urql";
// import CreateCandidate from "./CreateCandidate";
// import UpdateCandidate from "./UpdateCandidate";
// import DeleteCandidate from "./DeleteCandidate";
// import { useGlobalContext } from "@/context/context";
// import ViewCandidates from "./ViewCandidates";
// import { useRouter } from "next/navigation";

// interface Props {
//   categories: Category[];
//   teams: Team[];
// }

// function debounce<T extends unknown[]>(
//   func: (...args: T) => void,
//   delay: number
// ): (...args: T) => void {
//   let timer: ReturnType<typeof setTimeout>;
//   return function (this: any, ...args: T) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// function Candidates(props: Props) {
//   const [searchTerm, setSearchTerm] = useState("a");
//   const [candidates, setCandidates] = useState<Candidate[]>([]);
//   const [isCreate, setIsCreate] = useState(false);
//   const [isUpdate, setIsUpdate] = useState(false);
//   const [isDelete, setIsDelete] = useState(false);
//   const [isView, setIsView] = useState(false);
//   const [teamName, setTeamName] = useState("");
//   const [selected, setSelected] = useState<Candidate | null>(null);
//   const [totalCandidates, setTotalCandidates] = useState(0);

//   const router = useRouter();
//   const { data, setData } = useGlobalContext();

//   // const filteredData = candidates.filter((candidate) => {
//   //   return (
//   //     candidate?.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   //   );
//   // });

//   const [{ fetching, data: user }] = useQuery<
//     GetSearchCandidatesQuery,
//     GetSearchCandidatesQueryVariables
//   >({
//     query: GetSearchCandidatesDocument,
//     variables: {
//       chestNo: "",
//       name: searchTerm,
//       limit: 10,
//       teamName: teamName,
//     },
//     pause: searchTerm == "",
//   });

//   useEffect(() => {
//     if (data.roles == Roles.TeamManager) {
//       setTeamName(data.team?.name as string);
//     }

//     if (user?.searchCandidates) {
//       setCandidates(user.searchCandidates.candidates as Candidate[]);
//       setTotalCandidates(user.searchCandidates.totalCandidates);
//       // console.log(user.searchCandidates.candidates);
//     }
//   }, [data.team?.name, user]);

//   const delayedSearch = debounce((term: string) => {
//     setSearchTerm(term);
//   }, 1000);

//   const handleDownload = async () => {
//     // // console.log(categoryForTotal);
//     try {
//       // const postData = {
//       //   data: toDownLoadData,
//       //   SelectedProgrammes,
//       // };
//       // Make a POST request to the Excel API route
//       const response = await fetch("/api/excel/programBased", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Specify the content type if sending JSON data
//         },
//         // body: JSON.stringify(postData),
//       });


//       if (response.ok) {
//         // Convert the response to a Blob and create a URL for downloading
//         const blob = await response.blob();
//         const url = window.URL.createObjectURL(blob);

//         // Create a download link and trigger the download
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "Institution Based.xlsx";
//         a.click();


//         // Clean up by revoking the URL

//         window.URL.revokeObjectURL(url);
//       } else {
//         console.error("Failed to generate Excel file.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center gap-4 p-20">
//         {/* dashboard to view total candidates */}
//         <div
//           className="
//         w-full flex items-center justify-center gap-4
//       "
//         >
//           <div className="line-clamp-2 border-2  p-3 my-2 border-primary flex items-center justify-center rounded-xl border-dashed ">
//             <div className="bg-secondary rounded-xl p-6 flex flex-col items-center justify-center">
//               <p className="text-primary text-2xl font-semibold">
//                 Total Candidates
//               </p>
//               <p className="text-brown text-4xl font-bold">{totalCandidates}</p>
//             </div>
//           </div>
//         </div>

//         <button onClick={handleDownload} className="hidden">
//           click
//         </button>

//         <label className="flex gap-1 justify-center cursor-pointer w-full">
//           <input
//             type="text"
//             className="rounded-full px-3 h-10
//                border-yellow border-dashed border-2 w-full"
//             placeholder="Search Candidates Here"
//             onChange={(e) => delayedSearch(e.target.value)}
//             required
//           />
//           {/* institutions dropdown to filter */}
//           {/* <select className='
//             rounded-full px-3 h-10
//                border-yellow border-dashed border-2 w-full
//             '
//             onChange={(e) => {
//               if (e.target.value == "") {
//                 setCandidates(candidates)
//               } else {
//                 const filteredCandidates = candidates.filter((candidate) => {
//                   return candidate.team?.name == e.target.value
//                 }
//                 );
//                 setCandidates(filteredCandidates)
//               }

//             }
//             }
//           >
//             <option value="">Select Institution</option>
//             {props.teams.map((team, index) => (
//               <option key={index} value={team.name as string}>
//                 {team.name}
//               </option>
//             ))}
//           </select> */}
//           <div className="bg-yellow rounded-full w-10 h-10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="16"
//               className="m-auto mt-3 "
//               width="16"
//               viewBox="0 0 512 512"
//             >
//               <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
//             </svg>
//           </div>
//           {(data.roles == Roles.Controller || data.roles == Roles.Admin) && (
//             <button
//               className="bg-brown rounded-xl px-4 py-2 "
//               onClick={() => {
//                 setIsCreate(true);
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6 text-white"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </button>
//           )}
//         </label>

//         <div className="flex flex-wrap gap-2 justify-center mt-3">
//           {candidates.map((candidate, index) => (
//             <div
//               className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start "
//               key={index}
//               onClick={() => setSelected(candidate)}
//             >
//               <h1 className="px-2 py-1 bg-brown inline rounded-lg text-white font-semibold">
//                 {candidate.chestNO}
//               </h1>
//               <div
//                 onClick={() => {
//                   setSelected(candidate);
//                   setIsView(true);
//                 }}
//                 className="line-clamp-2 border-2 h-16 p-3 my-2 border-primary flex cursor-pointer items-center justify-center rounded-xl border-dashed w-full"
//               >
//                 <p className="line-clamp-2 text-center">{candidate.name}</p>
//               </div>
//               {(data.roles == Roles.Controller ||
//                 data.roles == Roles.Admin) && (
//                   <div className="flex w-full justify-between">
//                     <button
//                       onClick={() => {
//                         setIsUpdate(true);
//                         setSelected(candidate);
//                       }}
//                       className="bg-white border border-dashed border-brown rounded-xl px-4 py-2 "
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6 text-brown"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
//                         />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => {
//                         setIsDelete(true);
//                         setSelected(candidate);
//                       }}
//                       className="bg-white border border-dashed border-brown rounded-xl px-4 py-2 "
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6 text-red-600"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <CreateCandidate
//         candidates={candidates}
//         setCandidates={setCandidates}
//         isCreate={isCreate}
//         setIsCreate={setIsCreate}
//         categories={props.categories}
//         teams={props.teams}
//       />
//       <UpdateCandidate
//         candidates={candidates}
//         setCandidates={setCandidates}
//         isUpdate={isUpdate}
//         setIsUpdate={setIsUpdate}
//         selected={selected}
//         categories={props.categories}
//         teams={props.teams}
//       />
//       <DeleteCandidate
//         candidates={candidates}
//         setCandidates={setCandidates}
//         isDelete={isDelete}
//         setIsDelete={setIsDelete}
//         selected={selected}
//       />
//       <ViewCandidates
//         isView={isView}
//         setIsView={setIsView}
//         selected={selected as Candidate}
//         setSelected={setSelected as any}
//       />
//     </>
//   );
// }

// export default withUrqlClient(() => ({
//   url: SERVER_URL,
//   exchanges: [cacheExchange, fetchExchange],
//   fetchOptions: {
//     cache: "no-cache",
//     credentials: "include",
//   },
// }))(Candidates);