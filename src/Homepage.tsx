import { useAtom } from "jotai";
import { genderAtom } from "@/atoms";
import { Section } from "@/types";
import HomepageProductSlide from "@/components/homepage/HomepageProductSlide";

type HomepageProps = {
  menswearSections: Section[];
  womenswearSections: Section[];
};

export default function Homepage({
  menswearSections,
  womenswearSections,
}: HomepageProps) {
  const [gender] = useAtom(genderAtom);

  const sections = gender === "men" ? menswearSections : womenswearSections;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">{gender}swear</h1>
      {sections.map((section, index) => (
        <HomepageProductSlide key={index} section={section} gender={gender} />
      ))}
    </div>
  );
}
