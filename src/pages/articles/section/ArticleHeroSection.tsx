import React, { useState } from 'react';

interface FilterTab {
  id: string;
  label: string;
  width: string;
}

const FILTER_TABS: FilterTab[] = [
  { id: 'semua', label: 'Semua', width: 'w-[92px]' },
  { id: 'digital-marketing', label: 'Digital Marketing', width: 'w-[153px]' },
  { id: 'teknologi', label: 'Teknologi', width: 'w-[109px]' },
  { id: 'informasi-harga', label: 'Informasi Harga & Layanan', width: 'w-[214px]' },
  { id: 'artikel', label: 'Artikel', width: 'w-[89px]' },
];

export const ArticleHeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('semua');

  return (
    <section className="w-full max-w-[448px] md:max-w-none md:w-[720px] lg:w-[1280px] h-[275px] md:h-[202px] lg:h-[202px] mx-auto flex flex-col items-center gap-[40px] px-[16px] md:px-0">
      
      <div className="w-full max-w-[448px] md:w-[546px] h-[147px] md:h-[122px] flex flex-col items-center gap-[20px]">
        <h1 className="w-[285px] h-[52px] text-[#212121] text-[43px] font-semibold leading-[100%] tracking-[-0.04em] text-center flex items-center justify-center m-0 p-0">
          Artikel & Berita
        </h1>
        <p className="w-full max-w-[448px] md:w-[546px] h-[75px] md:h-[50px] text-[#212121] text-[14px] font-normal leading-[180%] tracking-[0em] text-center m-0 p-0">
          Temukan wawasan dan update terbaru seputar periklanan luar ruang, branding, dan aktivasi brand untuk memperkuat visibilitas bisnis Anda.
        </p>
      </div>

      <div className="w-[448px] md:w-[689px] h-[88px] md:h-[40px] flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center gap-[8px]">
        {FILTER_TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                ${tab.width} h-[40px] rounded-[100px] flex items-center justify-center gap-[10px] shrink-0
                text-[14px] font-medium leading-[100%] tracking-[-0.04em] transition-all duration-200
                ${
                  isActive
                    ? 'bg-[#013F8B] text-white border-none'
                    : 'bg-transparent text-[#013F8B] border border-[#013F8B]/60'
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

    </section>
  );
};

export default ArticleHeroSection;