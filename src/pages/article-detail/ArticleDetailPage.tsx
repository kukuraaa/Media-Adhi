import { HeroArtikel } from "./section/HeroArtikel";
import { TentangArtikel } from "./section/TentangArtikel";
import { ManfaatArtikel } from "./section/ManfaatArtikel";
import { ArtikelLainnya } from "./section/ArtikelLainnya";
import { ArtikelBerita } from "./section/ArtikelBerita";
import Berlangganan from "./section/Berlangganan";

export const ArticleDetailPage = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-[80px] pt-[80px]">
        
        <div className="flex flex-col lg:flex-row gap-[40px] items-start relative w-full">
      
          <div className="w-full lg:w-[857px] shrink-0 flex flex-col">
            <HeroArtikel />
            
            <div className="mt-[80px]">
              <TentangArtikel />
            </div>

            <div className="mt-[80px]">
              <ManfaatArtikel />
            </div>  
          </div>

          <div className="w-full lg:w-[383px] lg:h-[3244px] shrink-0">
            <div className="lg:sticky lg:top-[32px] lg:pt-[48px]">
              <ArtikelLainnya />
            </div>
          </div>

        </div>
      </div>

      <ArtikelBerita />
      <Berlangganan />
    </div>
  );
};