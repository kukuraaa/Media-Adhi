import { Hero } from "./section/Hero";
import { JelajahiProyek } from "./section/JelajahiProyek";
import { WujudkanIde } from "./section/WujudkanIde";
import { TentangProject } from "./section/TentangProject";
import { SpesifikasiProject } from "./section/SpesifikasiProject";

export const ProjectDetailPage = () => {
  return (
    <>
      <Hero />

      <section className="w-full">
        <div className="w-[1280px] h-[662px] mx-auto flex gap-[20px]">
          <TentangProject />
          <SpesifikasiProject />
        </div>
      </section>
      <JelajahiProyek />
      <WujudkanIde />
    </>
  );
};