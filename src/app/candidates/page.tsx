import React from "react";
import candidatesData from "@/data/candidates.json";
import Candidate from "@/components/candidates/Candidate";

const page = ({ params, searchParams }: any) => {
  const search = searchParams?.search || "";

  return (
    <div>
      <Candidate
        candidates={
          candidatesData
            .filter((candidate) =>
              candidate.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 12) as any
        }
      />
    </div>
  );
};

export default page;
