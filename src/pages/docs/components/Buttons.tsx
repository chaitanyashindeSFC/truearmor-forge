import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import DocsLayout from "@/components/DocsLayout";

const Buttons = () => {
  const basicExample = `import { Button } from "stfox-tailwind-react-ui";

function App() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}`;

  const sizesExample = `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`;

  const withIconsExample = `import { Download, ArrowRight } from "lucide-react";

<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>

<Button>
  Continue
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>`;

  const buttonProps = [
    {
      name: "variant",
      type: '"default" | "outline" | "destructive" | "secondary" | "ghost" | "link"',
      default: '"default"',
      description: "The visual style variant of the button",
    },
    {
      name: "size",
      type: '"default" | "sm" | "lg" | "icon"',
      default: '"default"',
      description: "The size of the button",
    },
    {
      name: "onClick",
      type: "() => void",
      default: undefined,
      description: "Function called when button is clicked",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the button is disabled",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Render as a child component (useful with Link)",
    },
  ];

  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Button</h1>
          <p className="text-lg text-muted-foreground">
            Displays a button or a component that looks like a button. Supports
            multiple variants, sizes, and states.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Basic Usage
            </h2>
            <CodeBlock code={basicExample} language="tsx" />

            <div className="mt-6 rounded-xl border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Preview</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Default Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Sizes</h2>
            <p className="text-muted-foreground mb-4">
              Buttons come in three sizes: small, default, and large.
            </p>
            <CodeBlock code={sizesExample} language="tsx" />

            <div className="mt-6 rounded-xl border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Preview</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              With Icons
            </h2>
            <p className="text-muted-foreground mb-4">
              Add icons from lucide-react or any other icon library.
            </p>
            <CodeBlock code={withIconsExample} language="tsx" />

            <div className="mt-6 rounded-xl border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Preview</h3>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <span className="mr-2">📥</span>
                  Download
                </Button>
                <Button variant="outline">
                  Continue
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Disabled State
            </h2>
            <div className="mt-6 rounded-xl border bg-card p-8 shadow-soft">
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled Button</Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Props</h2>
            <PropsTable props={buttonProps} />
          </div>

          <div className="rounded-xl border bg-muted/50 p-6">
            <h3 className="text-lg font-semibold mb-2">💡 Best Practices</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • Use the <code className="px-1 py-0.5 rounded bg-background">default</code> variant
                for primary actions
              </li>
              <li>
                • Use <code className="px-1 py-0.5 rounded bg-background">outline</code> for
                secondary actions
              </li>
              <li>
                • Reserve <code className="px-1 py-0.5 rounded bg-background">destructive</code> for
                delete or dangerous actions
              </li>
              <li>• Include clear, action-oriented button text</li>
              <li>• Consider accessibility when using icon-only buttons</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t">
          <Link to="/docs/components/alerts">
            <Button variant="outline">← Alerts</Button>
          </Link>
          <Link to="/docs/components/cards">
            <Button variant="outline">Cards →</Button>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Buttons;
