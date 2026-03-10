import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export function TestsPage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Typography variant="h1" asChild={true}>
          <h2>Страница тестов компонентов</h2>
        </Typography>
        <Typography variant="body14">
          Используйте эту страницу для ручной проверки состояний и визуального сравнения UI-компонентов.
        </Typography>
      </div>

      <section className="flex flex-col gap-3">
        <Typography variant="h2" asChild={true}>
          <h3>Button</h3>
        </Typography>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text</Button>
          <Button disabled={true}>Primary Disabled</Button>
          <Button variant="secondary" disabled={true}>
            Secondary Disabled
          </Button>
          <Button variant="outline" disabled={true}>
            Outline Disabled
          </Button>
          <Button variant="text" disabled={true}>
            Text Disabled
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Typography variant="h2" asChild={true}>
          <h3>Typography</h3>
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography variant="large">Large Typography</Typography>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="body16">Body 16</Typography>
          <Typography variant="body16Bold">Body 16 Bold</Typography>
          <Typography variant="body14">Body 14</Typography>
          <Typography variant="body14Medium">Body 14 Medium</Typography>
          <Typography variant="body14Bold">Body 14 Bold</Typography>
          <Typography variant="body12">Body 12</Typography>
          <Typography variant="body12Semibold">Body 12 Semibold</Typography>
          <Typography variant="muted">Muted text</Typography>
          <Typography variant="lead">Lead text</Typography>
        </div>
      </section>
    </section>
  );
}
