import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import EventsListPage from './pages/events-list-page/EventsListPage';
import RegisterPage from './pages/register-page/RegisterPage';
import PageTemplate from './layouts/page-template/PageTemplate';
import MembersPage from './pages/members-page/MemberPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/events',
    element: (
      <>
        <PageTemplate>
          <EventsListPage />
        </PageTemplate>
      </>
    ),
  },
  {
    path: '/events/:id/members',
    element: (
      <PageTemplate>
        <MembersPage />
      </PageTemplate>
    ),
  },
]);
