import institutionsData from "@/data/institutions.json";
import candidatesData from "@/data/candidates.json";
import programsData from "@/data/programs.json";
import candidateProgramsData from "@/data/cp.json";

interface Props {
    category: string;
}

export default function CategoryResult(props: Props) {
    const programs = programsData?.filter(
        (program) => program.cat === props.category
    );

    const calculatePoints = (institutionName: string, programCode: string) => {
        const institutionCandidates = candidatesData?.filter(
            (candidate) => candidate.college === institutionName
        );

        const relevantPrograms = candidateProgramsData?.filter((entry) =>
            programs.some((program) => program.code === entry.prg)
        );

        return relevantPrograms
            ?.filter(
                (entry) =>
                    institutionCandidates?.some((cand) => cand.chest === entry.code) &&
                    entry.prg === programCode
            )
            .reduce((sum, entry) => sum + (entry.pts || 0), 0);
    };

    return (
        <div className="text-center text-xs m-10 print:m-0 p-8 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-blue-200 shadow-xl">
            <p className="text-3xl font-extrabold mb-5 text-sky-800">
                Jamia Junior College Fest '25
            </p>
            <div className="overflow-auto">
                <div className="flex w-full min-w-[1200px]">
                    {/* Table Header */}
                    <div className="flex flex-col min-w-[350px] text-center font-semibold bg-sky-700 text-white pl-2 py-2 border border-sky-800 rounded-tl-xl text-3xl justify-center">
                        <p className="text-3xl">Institutions</p>
                        <p className="text-xl">Score Board</p>
                    </div>
                    <div className="flex">
                        {programs.map((program) => (
                            <div
                                key={program.code}
                                className="w-16 h-32 flex items-center justify-center bg-sky-700 text-white border border-sky-800"
                            >
                                <p className="transform -rotate-90 text-xs font-bold">{program.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Table Rows */}
                {institutionsData.map((institution, index) => (
                    <div
                        key={institution.name}
                        className={`flex w-full min-w-[1200px] ${index % 2 === 0 ? "bg-blue-50" : "bg-pink-50"
                            }`}
                    >
                        {/* Institution Name */}
                        <p className="min-w-[350px] text-left font-semibold bg-gradient-to-r from-sky-100 to-pink-100 text-sky-800 pl-2 py-2 border border-sky-800">
                            {institution.name}
                        </p>
                        <div className="flex">
                            {programs.map((program) => (
                                <p
                                    key={program.code}
                                    className="w-16 text-center font-medium py-2 text-gray-800 bg-gradient-to-br from-yellow-100 to-blue-100 border border-gray-300"
                                >
                                    {calculatePoints(institution.name, program.code) || ""}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
