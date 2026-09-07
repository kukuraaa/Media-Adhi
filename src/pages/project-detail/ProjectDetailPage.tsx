import { Hero } from "./section/Hero";
import { JelajahiProyek } from "./section/JelajahiProyek";
import { WujudkanIde } from "./section/WujudkanIde";
import { TentangProject } from "./section/TentangProject";
import { SpesifikasiProject } from "./section/SpesifikasiProject";

export const ProjectDetailPage = () => {
  return (
    <>
      <Hero />

      <section className="w-full md:max-lg:w-[720px] md:max-lg:h-[1477px] max-md:w-[448px] max-md:h-[1851px] px-[24px] lg:px-0 lg:w-[1280px] lg:h-[662px] lg:mx-auto">
        <div className="w-full md:max-lg:w-[720px] md:max-lg:h-[1477px] max-md:w-[448px] max-md:h-[1851px] lg:w-[1280px] h-auto lg:h-[662px] mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[20px]">
          <TentangProject />
          <SpesifikasiProject />
        </div>
      </section>
      <JelajahiProyek />
      <WujudkanIde />
    </>
  );
};