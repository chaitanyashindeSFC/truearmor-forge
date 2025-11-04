import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/CodeBlock";
import DocsLayout from "@/components/DocsLayout";

const Theming = () => {
  const cssVariables = `:root {
  --primary: 188 94% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 215 20% 20%;
  --accent: 217 91% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 188 94% 45%;
}`;

  const darkMode = `.dark {
  --primary: 188 94% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 217 33% 18%;
  --secondary-foreground: 210 40% 98%;
  --accent: 217 91% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 63% 31%;
  --destructive-foreground: 210 40% 98%;
  --border: 217 33% 18%;
  --input: 217 33% 18%;
  --ring: 188 94% 45%;
}`;

  const customTheme = `// Example: Brand Colors
:root {
  --primary: 280 100% 65%;      /* Purple */
  --primary-foreground: 0 0% 100%;
  --accent: 340 82% 52%;         /* Pink */
  --accent-foreground: 0 0% 100%;
}`;

  const tailwindConfig = `// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        // ... more colors
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
}`;

  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Theming</h1>
          <p className="text-lg text-muted-foreground">
            Customize the look and feel of TrueArmor UI to match your brand.
            Change colors, spacing, and more using CSS variables and Tailwind.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              CSS Variables
            </h2>
            <p className="text-muted-foreground mb-4">
              TrueArmor UI uses CSS variables for theming. All colors are
              defined in HSL format for maximum flexibility.
            </p>
            <CodeBlock code={cssVariables} language="css" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Dark Mode
            </h2>
            <p className="text-muted-foreground mb-4">
              Override colors for dark mode by defining variables within the{" "}
              <code className="px-1.5 py-0.5 rounded bg-muted">.dark</code>{" "}
              class:
            </p>
            <CodeBlock code={darkMode} language="css" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Custom Brand Colors
            </h2>
            <p className="text-muted-foreground mb-4">
              Create your own color scheme by modifying the CSS variables:
            </p>
            <CodeBlock code={customTheme} language="css" />

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border bg-card p-6 shadow-soft">
                <div className="h-20 rounded-lg bg-primary mb-3"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">
                  Main brand color
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-soft">
                <div className="h-20 rounded-lg bg-accent mb-3"></div>
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs text-muted-foreground">
                  Interactive elements
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-soft">
                <div className="h-20 rounded-lg bg-secondary mb-3"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">
                  Supporting color
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Tailwind Configuration
            </h2>
            <p className="text-muted-foreground mb-4">
              Configure Tailwind to use your CSS variables:
            </p>
            <CodeBlock code={tailwindConfig} language="javascript" />
          </div>

          <div className="rounded-xl border bg-gradient-primary p-8 text-white shadow-large">
            <h2 className="text-2xl font-bold mb-3">Theme Playground</h2>
            <p className="mb-6">
              Want to experiment with different color schemes? Try our
              interactive theme generator to see changes in real-time.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Open Theme Generator (Coming Soon)
            </Button>
          </div>

          <div className="rounded-xl border bg-muted/50 p-6">
            <h3 className="text-lg font-semibold mb-2">💡 Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Use HSL format for all color values</li>
              <li>
                • Test your theme in both light and dark mode
              </li>
              <li>• Ensure sufficient contrast for accessibility (WCAG AA)</li>
              <li>• Keep your brand colors consistent across components</li>
              <li>
                • Use the <code className="px-1 py-0.5 rounded bg-background">--radius</code>{" "}
                variable to control border radius globally
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t">
          <Link to="/docs/components/forms">
            <Button variant="outline">← Forms</Button>
          </Link>
          <Link to="/docs/customization">
            <Button variant="outline">Customization →</Button>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Theming;
