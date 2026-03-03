import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
        <Button disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
        <Button variant="outline" disabled>
          Outline Disabled
        </Button>
        <Button variant="text" disabled>
          Text Disabled
        </Button>
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
