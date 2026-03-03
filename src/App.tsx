import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 bg-background p-8">
      <div className="flex gap-3">
        <Button>Shadcn Button</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <Typography variant="h1" asChild={true}>
        <h1>Typography component</h1>
      </Typography>
      <Typography variant="h2" asChild={true}>
        <h2>Typography component</h2>
      </Typography>
    </main>
  );
}

export default App;
