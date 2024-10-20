import { Section } from "@/types.ts";
import HomepageProductSlide from "@/components/homepage/HomepageProductSlide";

type HomepageProps = {
  gender: "men" | "women";
  sections: Section[];
};

export default function Homepage({ gender, sections }: HomepageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">{gender}swear</h1>
      {sections.map((section, index) => (
        <HomepageProductSlide key={index} section={section} gender={gender} />
      ))}
    </div>
  );
}
