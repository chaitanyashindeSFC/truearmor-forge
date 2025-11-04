import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/CodeBlock";
import DocsLayout from "@/components/DocsLayout";

const Quickstart = () => {
  const [count, setCount] = useState(0);

  const quickExample = `import { useState } from "react";
import { Button } from "stfox-tailwind-react-ui";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  );
}`;

  const alertExample = `import { Alert } from "stfox-tailwind-react-ui";

function App() {
  return (
    <Alert variant="success">
      Your changes have been saved successfully!
    </Alert>
  );
}`;

  const cardExample = `import { Card } from "stfox-tailwind-react-ui";

function ProductCard() {
  return (
    <Card>
      <h3>Product Name</h3>
      <p>Product description goes here.</p>
      <Button>Buy Now</Button>
    </Card>
  );
}`;

  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Quickstart Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            Start building with TrueArmor UI in minutes. Follow this guide to
            create your first components.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Your First Component
            </h2>
            <p className="text-muted-foreground mb-4">
              Let's create a simple counter using the Button component:
            </p>
            <CodeBlock code={quickExample} language="tsx" />

            <div className="mt-6 rounded-xl border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Live Demo</h3>
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold">Count: {count}</h2>
                <Button onClick={() => setCount(count + 1)}>
                  Increment
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCount(0)}
                  size="sm"
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Common Use Cases
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Alerts</h3>
                <p className="text-muted-foreground mb-4">
                  Display important messages to your users:
                </p>
                <CodeBlock code={alertExample} language="tsx" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Cards</h3>
                <p className="text-muted-foreground mb-4">
                  Organize content in beautiful card layouts:
                </p>
                <CodeBlock code={cardExample} language="tsx" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-gradient-primary p-8 text-white shadow-large">
            <h2 className="text-2xl font-bold mb-3">What's Next?</h2>
            <p className="mb-6">
              Now that you know the basics, explore our comprehensive component
              library to see what else you can build with TrueArmor UI.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/docs/components/buttons">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Browse Components
                </Button>
              </Link>
              <Link to="/docs/theming">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Customize Theme
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t">
          <Link to="/docs/installation">
            <Button variant="outline">
              ← Installation
            </Button>
          </Link>
          <Link to="/docs/components/buttons">
            <Button variant="outline">
              Components →
            </Button>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Quickstart;
