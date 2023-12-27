import { Outlet } from 'react-router-dom';
import { StyledLayout } from './style';

import Header from '../header';
import Footer from '../footer';

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
