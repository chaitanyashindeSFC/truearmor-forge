import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Terminal, CheckCircle2, XCircle } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import DocsLayout from "@/components/DocsLayout";

const Alerts = () => {
  const basicExample = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

function App() {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}`;

  const variantsExample = `<Alert variant="default">
  <Terminal className="h-4 w-4" />
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>This is a default alert.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <XCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong!</AlertDescription>
</Alert>`;

  const alertProps = [
    {
      name: "variant",
      type: '"default" | "destructive"',
      default: '"default"',
      description: "The visual style variant of the alert",
    },
    {
      name: "className",
      type: "string",
      default: undefined,
      description: "Additional CSS classes to apply",
    },
  ];

  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Alert</h1>
          <p className="text-lg text-muted-foreground">
            Displays a callout for user attention. Useful for important
            messages, warnings, or success confirmations.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Basic Usage
            </h2>
            <CodeBlock code={basicExample} language="tsx" />

            <div className="mt-6 space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Variants
            </h2>
            <p className="text-muted-foreground mb-4">
              Alerts support different variants to convey different types of
              information.
            </p>
            <CodeBlock code={variantsExample} language="tsx" />

            <div className="mt-6 space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                  This is a default alert for general information.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong! Please try again.
                </AlertDescription>
              </Alert>

              <Alert className="border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-200">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your changes have been saved successfully!
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Please review your information before submitting.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Props</h2>
            <PropsTable props={alertProps} />
          </div>

          <div className="rounded-xl border bg-muted/50 p-6">
            <h3 className="text-lg font-semibold mb-2">💡 Best Practices</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Use icons to make alerts more scannable</li>
              <li>• Keep alert messages concise and actionable</li>
              <li>• Use destructive variant sparingly for errors only</li>
              <li>• Consider dismissible alerts for non-critical messages</li>
              <li>• Ensure sufficient color contrast for accessibility</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t">
          <Link to="/docs">
            <Button variant="outline">← Introduction</Button>
          </Link>
          <Link to="/docs/components/buttons">
            <Button variant="outline">Buttons →</Button>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Alerts;
