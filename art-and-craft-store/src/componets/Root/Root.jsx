import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Root = () => {
  return (
    <div>
      <Header />
      <main>
        {/* This is where the nested routes will be rendered */}
        <Outlet />
      </main>
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Root;
