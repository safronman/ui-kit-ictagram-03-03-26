import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export function HomePage() {
  return (
    <section className="flex max-w-2xl flex-col gap-5">
      <Typography variant="h1" asChild={true}>
        <h2>Главная страница демо-приложения</h2>
      </Typography>
      <Typography variant="body14">
        Здесь можно быстро проверить UI-kit в реальном приложении. Для визуальной проверки состояний компонентов
        перейдите на страницу тестов.
      </Typography>
      <div>
        <Button asChild={true}>
          <Link to="/tests">Открыть страницу тестов</Link>
        </Button>
      </div>
    </section>
  );
}
