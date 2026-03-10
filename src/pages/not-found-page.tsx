import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export function NotFoundPage() {
  return (
    <section className="flex max-w-xl flex-col gap-5">
      <Typography variant="h1" asChild={true}>
        <h2>404: страница не найдена</h2>
      </Typography>
      <Typography variant="body14">
        Запрошенный маршрут не существует. Вернитесь на главную страницу приложения.
      </Typography>
      <div>
        <Button asChild={true}>
          <Link to="/">На главную</Link>
        </Button>
      </div>
    </section>
  );
}
