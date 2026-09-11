import React from 'react';
import { ArticleHeroSection } from './section/ArticleHeroSection';
import ArticleListSection from './section/ArticleListSection';


export const ArticlesPage: React.FC = () => {
  return (
    <main className="w-full bg-white min-h-screen py-12 flex flex-col gap-12">
      <ArticleHeroSection />
      <ArticleListSection />
    </main>
  );
};

export default ArticlesPage;