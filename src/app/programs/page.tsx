import Programs from "@/components/programs/Programs";
import  programsData  from "@/data/programs.json";


const page = ({ params, searchParams }: any) => {

  const search = searchParams?.search || "";
  return (
    <div>
      

      <Programs
        programs={
          programsData
            .filter(
              (prg) => prg.code.includes(search) || prg.name.includes(search)
            )
            .slice(0, 12) as any
        }
      />
    </div>
  );
};

export default page;
