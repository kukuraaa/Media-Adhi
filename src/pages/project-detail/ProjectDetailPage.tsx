import { Hero } from "./section/Hero";
import { JelajahiProyek } from "./section/JelajahiProyek";
import { WujudkanIde } from "./section/WujudkanIde";
import { TentangProject } from "./section/TentangProject";
import { SpesifikasiProject } from "./section/SpesifikasiProject";

export const ProjectDetailPage = () => {
  return (
    <>
      <Hero />

      <section className="w-full px-[24px] lg:px-0 lg:w-[1280px] lg:h-[662px] lg:mx-auto">
        <div className="w-full lg:w-[1280px] h-auto lg:h-[662px] mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[20px]">
          <TentangProject />
          <SpesifikasiProject />
        </div>
      </section>
      <JelajahiProyek />
      <WujudkanIde />
    </>
  );
};