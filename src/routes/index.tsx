
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { HomePage } from '../pages/home/HomePage'
import { BillboardDetailPage } from '../pages/billboard-detail/BillboardDetailPage'
import { ProjectDetailPage } from '../pages/project-detail/ProjectDetailPage'
import { ArticlesPage } from '../pages/articles/ArticlesPage'
import { ArticleDetailPage } from '../pages/article-detail/ArticleDetailPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'billboard/:id',
          element: <BillboardDetailPage />,
        },
        {
          path: 'project/:id',
          element: <ProjectDetailPage />,
        },
        {
          path: 'articles',
          element: <ArticlesPage />,
        },
        {
          path: 'article/:id',
          element: <ArticleDetailPage />,
        },
      ],
    },
  ],
  {
    basename: '/Media-Adhi',
  }
)
