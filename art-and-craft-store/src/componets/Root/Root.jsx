import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Website</h1>
      </header>
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
