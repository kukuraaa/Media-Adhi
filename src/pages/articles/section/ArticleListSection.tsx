import React from 'react';
import { Link } from 'react-router-dom';

import admin from '../../../assets/admin.png';
import cube from '../../../assets/cube.png';
import katakata from '../../../assets/katakata.png';
import lapetop from '../../../assets/lapetop.png';
import galaksi from '../../../assets/galaksi.png';
import moses from '../../../assets/moses.png';
import gatauapa from '../../../assets/gatauapa.png';

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
  desc: string;
  author: string;
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Pemasangan Seri Vertical Light Box Illuminated...',
    category: 'Digital Marketing',
    image: lapetop,
    desc: 'Media Adhi Persada (MAP) kembali dipercaya oleh brand terkemuka, Gudang Garam International, untuk mengekseku...',
    author: 'Admin',
    date: '5 Agustus 2026',
    readTime: '10 Menit Baca',
  },
  {
    id: 2,
    title: 'Peluncuran Iklan Banner LED untuk Restoran Se...',
    category: 'Digital Marketing',
    image: moses,
    desc: 'Restoran Sederhana meluncurkan iklan banner LED di pusat kota untuk menarik perhatian pelanggan. Kampanye ini diran...',
    author: 'Admin',
    date: '5 Agustus 2026',
    readTime: '10 Menit Baca',
  },
  {
    id: 3,
    title: 'Kampanye Iklan Video untuk Toko Fashion Online',
    category: 'Digital Marketing',
    image: gatauapa,
    desc: 'Toko Fashion Online meluncurkan kampanye iklan video interaktif yang menampilkan koleksi terbaru mereka. Dengan...',
    author: 'Admin',
    date: '5 Agustus 2026',
    readTime: '10 Menit Baca',
  },
  {
    id: 4,
    title: 'Pemasangan Seri LED Screen di Mall XYZ',
    category: 'Digital Marketing',
    image: moses,
    desc: 'Media Adhi Persada (MAP) telah mendapatkan kepercayaan lagi dari kliennya, Mall XYZ, untuk meluncurkan kampanye pe...',
    author: 'Admin',
    date: '5 Agustus 2026',
    readTime: '10 Menit Baca',
  },
  {
    id: 5,
    title: 'Pemasangan Seri LED Screen di Mall XYZ',
    category: 'Digital Marketing',
    image: gatauapa,
    desc: 'Media Adhi Persada (MAP) telah mendapatkan kepercayaan lagi dari kliennya, Mall XYZ, untuk meluncurkan kampanye pe...',
    author: 'Admin',
    date: '5 Agustus 2026',
    readTime: '10 Menit Baca',
  },
  {
    id: 6,
    title: 'Pemasangan Seri LED Screen di Mall XYZ',
    category: 'Digital Marketing',
    image: katakata,
    desc: 'Media Adhi Persada (MAP) telah mendapatkan kepercayaan lagi dari kliennya, Mall XYZ, untuk meluncurkan kampanye pe...',
    author: 'Admin',
    date: '5 Agustus 2026',
    readTime: '10 Menit Baca',
  },
  {
    id: 7,
    title: 'Pemasangan Seri Vertical Light Box Illuminated...',
    category: 'Digital Marketing',
    image: galaksi,
    desc: 'Media Adhi Persada (MAP) kembali dipercaya oleh brand terkemuka, Gudang Garam International, untuk mengekseku...',
    author: 'Admin',
    date: '5 Agustus 2026',
    readTime: '10 Menit Baca',
  },
  {
    id: 8,
    title: 'Pemasangan Seri Vertical Light Box Illuminated...',
    category: 'Digital Marketing',
    image: cube,
    desc: 'Media Adhi Persada (MAP) kembali dipercaya oleh brand terkemuka, Gudang Garam International, untuk mengekseku...',
    author: 'Admin',
    date: '5 Agustus 2026',
    readTime: '10 Menit Baca',
  },
  {
    id: 9,
    title: 'Pemasangan Seri Vertical Light Box Illuminated...',
    category: 'Digital Marketing',
    image: lapetop,
    desc: 'Media Adhi Persada (MAP) kembali dipercaya oleh brand terkemuka, Gudang Garam International, untuk mengekseku...',
    author: 'Admin',
    date: '5 Agustus 2026',
    readTime: '10 Menit Baca',
  },
];

export const ArticleListSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto py-8 px-4 lg:px-0">

      <div className="w-full h-[52px] flex flex-row items-center justify-between mb-[32px]">

        <h2 className="w-[287px] h-[52px] flex items-center font-['Inter'] font-semibold text-[43px] leading-none tracking-[-0.04em] text-[#212121]">
          Artikel Terbaru
        </h2>

        <div className="w-[473px] h-[48px] flex flex-row items-center gap-[24px]">

          <button
            type="button"
            className="w-[108px] h-[38px] rounded-full border border-[#013F8B] px-[24px] py-[12px] flex flex-row items-center gap-[8px] justify-center transition-colors hover:bg-[#013F8B]/5 shrink-0"
          >
            <svg
              className="w-[18px] h-[18px] text-[#013F8B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h18M6 10h12M9 16h6"
              />
            </svg>

            <span className="font-['Inter'] font-medium text-[14px] text-[#013F8B]">
              Filter
            </span>
          </button>

          <div className="w-[341px] h-[48px] rounded-[16px] bg-[#FFFFFF] border border-gray-300 px-[16px] py-[8px] flex flex-row items-center gap-[10px] shrink-0">

            <svg
              className="w-[24px] h-[24px] text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent border-none outline-none font-['Inter'] text-[14px] text-gray-700 placeholder-gray-400 p-0 focus:ring-0"
            />

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[60px]">

        {articles.map((article) => (

          <Link
  key={article.id}
  to="/article/1"
  className="w-full max-w-[413.33px] h-[559px] flex flex-col gap-[24px] mx-auto cursor-pointer"
>

            <div className="w-full h-[333px] rounded-[8px] overflow-hidden p-[16px] bg-gray-50 shrink-0">

              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-[8px]"
              />

            </div>

            <div className="w-full h-[202px] flex flex-col gap-[12px] justify-between">

              <div className="flex flex-col gap-[12px]">

                <div className="w-[134px] h-[40px] rounded-full bg-[#D2E2F7] border border-[#D2E2F7] px-[18px] py-[8px] flex items-center justify-center shrink-0">

                  <span className="font-['Inter'] font-normal text-[12px] leading-[180%] text-[#03418D]">
                    {article.category}
                  </span>

                </div>

                <h3 className="font-['Inter'] font-medium text-[18px] leading-[140%] tracking-[-0.02em] text-[#000000]/95 line-clamp-1">
                  {article.title}
                </h3>

                <p className="font-['Inter'] font-normal text-[14px] leading-[180%] text-[#777777] line-clamp-2 overflow-hidden h-[54px]">
                  {article.desc}
                </p>

              </div>

              <div className="flex flex-row items-center gap-[12px] h-[47px] shrink-0">

                <img
                  src={admin}
                  alt={article.author}
                  className="w-[47px] h-[47px] rounded-full object-cover shrink-0"
                />

                <div className="flex flex-col justify-center">

                  <span className="font-['Inter'] font-medium text-[14px] leading-[120%] text-[#111111] mb-[4px]">
                    {article.author}
                  </span>

                  <div className="flex flex-row items-center gap-[8px]">

                    <span className="font-['Inter'] font-normal text-[12px] text-[#111111]">
                      {article.date}
                    </span>

                    <span className="w-[4px] h-[4px] rounded-full bg-[#111111] inline-block"></span>

                    <span className="font-['Inter'] font-normal text-[12px] text-[#111111]">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default ArticleListSection;