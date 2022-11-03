import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '@layouts/RootLayout';
import {
  BestCombinationDetailPage,
  BestCombinationListPage,
  BestCombinationPickPage,
  HomePage,
  RandomPickPage,
  LoginPage,
  MyPage,
  CustomCombination,
  RankingPage,
} from '@pages/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/best-combination-pick" element={<BestCombinationPickPage />} />
      <Route path="/best-combination-list" element={<BestCombinationListPage />} />
      <Route path="/best-combination-detail">
        <Route index element={<BestCombinationDetailPage />} />
        <Route path=":combinationId" element={<BestCombinationDetailPage />} />
      </Route>
      <Route path="/random-pick" element={<RandomPickPage />} />
      <Route path="/custom-combination" element={<CustomCombination />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/ranking" element={<RankingPage />} />
    </Route>
  )
);

export default router;
