"use client";
import institutions from "@/data/institutions.json";
import programs from "@/data/programs.json";
import { useState } from "react";

// Dummy data
const dummyData = {
  campuses: [
    { id: 1, name: "Campus A" },
    { id: 2, name: "Campus B" },
    { id: 3, name: "Campus C" },
    { id: 1, name: "Campus A" },
    { id: 2, name: "Campus B" },
    { id: 3, name: "Campus C" },
    { id: 1, name: "Campus A" },
    { id: 2, name: "Campus B" },
    { id: 3, name: "Campus C" },
    { id: 1, name: "Campus A" },
    { id: 2, name: "Campus B" },
    { id: 3, name: "Campus C" },
    // Add more campuses as needed
  ],
};

export default function ResultDisplay() {
  // Example data
  const pointsData = [
    {
      code: 579,
      prg: "SO38",
    },
    {
      code: 504,
      prg: "SO39",
    },
    {
      code: 632,
      prg: "SO39",
      position: 3,
      grade: "B",
      pts: 5,
    },
    {
      code: 554,
      prg: "SO40",
      position: 2,
      grade: "A",
      pts: 7,
    },
    {
      code: 629,
      prg: "SO40",
      position: 1,
      grade: "A",
      pts: 8,
    },
  ];

  const programsData = [
    {
      code: "JS2",
      name: "ഹിഫ്‌ള്",
      isStage: 1,
      cat: "JUNIOR",
    },
    {
      code: "JS3",
      name: "വാങ്ക്",
      isStage: 1,
      cat: "JUNIOR",
    },
    {
      code: "JS4",
      name: "പ്രസംഗം അറബി",
      isStage: 1,
      cat: "JUNIOR",
    },
  ];

  const candidatesData = [
    {
      chest: 143,
      name: "ANAS M",
      dars: 1,
    },
    {
      chest: 345,
      name: "MUHAMMAD THAHA SALEEM EK(VELIYAMBRA)",
      dars: 8,
    },
    {
      chest: 132,
      name: "MUHAMMED ZAID CHOLA",
      dars: 18,
    },
  ];

  const institutionsData = [
    {
      code: 1,
      name: "BADRIYYA HIFZUL QUR'AN, MADATHIKOVVAL, NARATAH",
      place: "MADATHIKOVVAL",
      zone: "KANNUR",
    },
    {
      code: 2,
      name: "MARKAZUL ULAMA DARS VENMANAL",
      place: "VENMANAL",
      zone: "KANNUR",
    },
    {
      code: 3,
      name: "SWAFA DARS KUMMAYAKKADAVU",
      place: "KUMMAYAKKADAVU",
      zone: "KANNUR",
    },
  ];

  // Step 1: Get total points for each institution
  const totalPointsPerInstitution = institutionsData.map((institution) => {
    const institutionCode = institution.code;
    const institutionPoints = pointsData
      .filter((point) =>
        programsData.some(
          (program) =>
            point.prg === program.code && program.code.includes(institutionCode.toString())
        )
      )
      .map((point) => point.pts);

    console.log(institutionPoints);

    const totalPoints =
      institutionPoints.length > 0
        ? institutionPoints.reduce((sum, points) => sum + points, 0)
        : 0;

    return {
      ...institution,
      totalPoints: totalPoints,
    };
  });

  // Step 2: Sort institutions based on total points
  const sortedInstitutions = totalPointsPerInstitution
    .slice()
    .sort((a, b) => b.totalPoints - a.totalPoints);

  console.log("Sorted Institutions:", sortedInstitutions);

  const [selectedCampus, setSelectedCampus] = useState(dummyData.campuses[0]);
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Left side with campuses */}
      <div className="w-2/4 p-4 overflow-y-auto border-r">
        <h2 className="text-2xl font-semibold mb-4">Campuses</h2>
        <div className="space-y-4">
          {dummyData.campuses.map((campus) => (
            <div
              key={campus.id}
              className={`p-3 border hover:bg-gray-300 cursor-pointer rounded-lg ${
                selectedCampus.id === campus.id ? "bg-blue-200" : ""
              }`}
              onClick={() => setSelectedCampus(campus)}
            >
              <p className="text-black font-bold">#1</p>
              <h1 className="text-red-800 text-3xl font-bold">
                203 <span className="text-lg text-black">(70%)</span>
              </h1>
              <h5>Campus name here</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Right side with programs */}
      <div className="w-3/4 p-4  overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Programs</h2>
        <div className="grid grid-cols-3 gap-4">
          {programs.map((program) => (
            <div
              key={program.code}
              className="p-2 border  hover:bg-gray-500 bg-gray-600 group transition cursor-pointer  rounded-2xl"
              onClick={() => setSelectedProgram(program)}
            >
              <h3 className="text-white  transition">
                {program.code} {program.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
