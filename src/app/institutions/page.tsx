import Institution from "@/components/institutions/Institution";
import institutionsData from "@/data/institutions.json";

const page = ({ params, searchParams }: any) => {
  const search = searchParams?.search || "";
  return (
    <div>
      <Institution
        institutions={
          institutionsData
            .filter(
              (instn) =>
                instn.name
                  .toString()
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                instn.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 12) as any
        }
      />
    </div>
  );
};

export default page;
