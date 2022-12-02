import { Suspense, lazy } from 'react';
import loadable from '@loadable/component';
import { lazily } from 'react-lazily';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '@layouts/RootLayout';
import { bestCombinationDetailLoader } from '@pages/index';

const {
  HomePage,
  RankingPage,
  LoginPage,
  CustomCombination,
  BestCombinationListPage,
  MyPage,
  // RandomPickPage,
  // BestCombinationPickPage,
  BestCombinationDetailPage,
  NotFound,
} = lazily(() => import('@pages/index'));
const RandomPickPage = loadable(() => import('@pages/RandomPickPage'));
const { BestCombinationPickPage } = lazily(() => import('@pages/index'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<div>loading...</div>}>
          <RootLayout />
        </Suspense>
      }>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="best-combination-pick" element={<BestCombinationPickPage />} />
      <Route path="best-combination" errorElement={<NotFound />}>
        <Route index element={<BestCombinationListPage />} />
        <Route path="ranking" element={<RankingPage />} />
        <Route path=":combinationId" element={<BestCombinationDetailPage />} loader={bestCombinationDetailLoader} />
      </Route>
      <Route path="random-pick" element={<RandomPickPage />} />
      <Route path="custom-combination" element={<CustomCombination />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default router;
