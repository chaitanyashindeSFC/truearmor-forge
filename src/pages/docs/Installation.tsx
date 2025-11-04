import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import DocsLayout from "@/components/DocsLayout";

const Installation = () => {
  const npmInstall = `npm install stfox-tailwind-react-ui@latest`;
  const yarnInstall = `yarn add stfox-tailwind-react-ui`;
  const pnpmInstall = `pnpm add stfox-tailwind-react-ui`;

  const tailwindConfig = `// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/stfox-tailwind-react-ui/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

  const tsConfig = `// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true
  }
}`;

  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Installation
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn how to install TrueArmor UI Components in your React project.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Prerequisites
            </h2>
            <div className="rounded-xl border bg-muted/50 p-6 space-y-3">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Requirements</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• React 18.0 or later</li>
                    <li>• Node.js 16.0 or later</li>
                    <li>• Tailwind CSS 3.0 or later</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Package Installation
            </h2>
            <p className="text-muted-foreground mb-4">
              Install TrueArmor UI using your preferred package manager:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Using npm</h3>
                <CodeBlock code={npmInstall} language="bash" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Using Yarn</h3>
                <CodeBlock code={yarnInstall} language="bash" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Using pnpm</h3>
                <CodeBlock code={pnpmInstall} language="bash" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Configure Tailwind CSS
            </h2>
            <p className="text-muted-foreground mb-4">
              Update your Tailwind configuration to include TrueArmor UI
              components in the content paths:
            </p>
            <CodeBlock code={tailwindConfig} language="javascript" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              TypeScript Configuration
            </h2>
            <p className="text-muted-foreground mb-4">
              If you're using TypeScript, ensure your tsconfig.json includes
              these settings:
            </p>
            <CodeBlock code={tsConfig} language="json" />
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-soft">
            <h3 className="text-lg font-semibold mb-3">🎉 You're all set!</h3>
            <p className="text-muted-foreground mb-4">
              You've successfully installed TrueArmor UI. Now you can start
              importing and using components in your project.
            </p>
            <Link to="/quickstart">
              <Button>
                Continue to Quickstart →
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t">
          <Link to="/docs">
            <Button variant="outline">
              ← Previous
            </Button>
          </Link>
          <Link to="/quickstart">
            <Button variant="outline">
              Next →
            </Button>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Installation;
