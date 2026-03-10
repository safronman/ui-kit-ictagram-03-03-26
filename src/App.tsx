import { NavLink, Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/home-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { TestsPage } from '@/pages/tests-page';

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 bg-background p-8">
      <header className="flex items-center justify-between gap-4 border-b pb-4">
        <h1 className="text-h3">UI Kit Demo</h1>
        <nav className="flex items-center gap-3">
          <NavLink
            to="/"
            end={true}
            className={({ isActive }) =>
              isActive ? 'text-body-14-medium text-primary-500 underline' : 'text-body-14-medium text-foreground'
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/tests"
            className={({ isActive }) =>
              isActive ? 'text-body-14-medium text-primary-500 underline' : 'text-body-14-medium text-foreground'
            }
          >
            Тесты
          </NavLink>
        </nav>
      </header>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
