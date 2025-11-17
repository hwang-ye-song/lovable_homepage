import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const designTokens = {
    colors: {
      primary: {
        DEFAULT: "hsl(200, 95%, 50%)",
        foreground: "hsl(0, 0%, 100%)",
        light: "hsl(200, 95%, 65%)",
        dark: "hsl(200, 95%, 35%)",
        usage: "Main brand color, CTA buttons, links, primary UI elements"
      },
      secondary: {
        DEFAULT: "hsl(220, 60%, 20%)",
        foreground: "hsl(0, 0%, 100%)",
        light: "hsl(220, 50%, 30%)",
        dark: "hsl(220, 70%, 12%)",
        usage: "Headers, footers, secondary backgrounds, navigation"
      },
      accent: {
        DEFAULT: "hsl(180, 100%, 50%)",
        foreground: "hsl(220, 60%, 10%)",
        light: "hsl(180, 100%, 65%)",
        glow: "hsl(180, 100%, 50%)",
        usage: "Highlights, hover states, focus indicators, notifications"
      },
      grayscale: {
        50: "hsl(220, 15%, 98%)",
        100: "hsl(220, 15%, 95%)",
        200: "hsl(220, 15%, 88%)",
        300: "hsl(220, 15%, 75%)",
        400: "hsl(220, 15%, 60%)",
        500: "hsl(220, 15%, 45%)",
        600: "hsl(220, 15%, 35%)",
        700: "hsl(220, 15%, 25%)",
        800: "hsl(220, 15%, 15%)",
        900: "hsl(220, 15%, 8%)",
        usage: "Text hierarchy, borders, backgrounds, neutral UI elements"
      }
    },
    typography: {
      fonts: {
        heading: {
          family: "Space Grotesk",
          fallback: "system-ui, sans-serif",
          weights: [400, 500, 600, 700],
          usage: "Page titles, section headings, hero text"
        },
        body: {
          family: "Inter",
          fallback: "system-ui, sans-serif",
          weights: [300, 400, 500, 600, 700],
          usage: "Paragraphs, UI text, captions, all body content"
        }
      },
      scale: {
        headings: {
          h1: { size: "3.5rem", lineHeight: "1.2", letterSpacing: "-0.02em", weight: 600 },
          h2: { size: "3rem", lineHeight: "1.2", letterSpacing: "-0.02em", weight: 600 },
          h3: { size: "2.5rem", lineHeight: "1.2", letterSpacing: "-0.02em", weight: 600 },
          h4: { size: "2rem", lineHeight: "1.2", letterSpacing: "-0.02em", weight: 600 },
          h5: { size: "1.5rem", lineHeight: "1.2", letterSpacing: "-0.02em", weight: 600 },
          h6: { size: "1.25rem", lineHeight: "1.2", letterSpacing: "-0.02em", weight: 600 }
        },
        body: {
          lg: { size: "1.125rem", lineHeight: "1.75", letterSpacing: "0", weight: 400 },
          base: { size: "1rem", lineHeight: "1.5", letterSpacing: "0", weight: 400 },
          sm: { size: "0.875rem", lineHeight: "1.5", letterSpacing: "0", weight: 400 },
          xs: { size: "0.75rem", lineHeight: "1.5", letterSpacing: "0", weight: 400 },
          caption: { size: "0.6875rem", lineHeight: "1.5", letterSpacing: "0.025em", weight: 400 }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="font-heading text-3xl font-semibold text-primary">
              AI & Robotics Academy
            </h1>
            <Badge variant="secondary" className="text-sm">Design System</Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="mb-4 font-heading text-4xl font-semibold text-foreground">
            Design System Tokens
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive design tokens for the AI & Robotics Academy website. All values are defined as CSS variables and can be referenced throughout the application.
          </p>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h3 className="mb-8 font-heading text-3xl font-semibold text-foreground">
            Color Palette
          </h3>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Primary Colors */}
            <Card className="p-6">
              <h4 className="mb-4 font-heading text-xl font-semibold">Primary - Electric Blue</h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-primary-dark border border-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Dark</p>
                    <code className="text-xs text-muted-foreground">{designTokens.colors.primary.dark}</code>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-primary border border-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Default</p>
                    <code className="text-xs text-muted-foreground">{designTokens.colors.primary.DEFAULT}</code>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-primary-light border border-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Light</p>
                    <code className="text-xs text-muted-foreground">{designTokens.colors.primary.light}</code>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{designTokens.colors.primary.usage}</p>
            </Card>

            {/* Secondary Colors */}
            <Card className="p-6">
              <h4 className="mb-4 font-heading text-xl font-semibold">Secondary - Deep Navy</h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-secondary-dark border border-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Dark</p>
                    <code className="text-xs text-muted-foreground">{designTokens.colors.secondary.dark}</code>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-secondary border border-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Default</p>
                    <code className="text-xs text-muted-foreground">{designTokens.colors.secondary.DEFAULT}</code>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-secondary-light border border-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Light</p>
                    <code className="text-xs text-muted-foreground">{designTokens.colors.secondary.light}</code>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{designTokens.colors.secondary.usage}</p>
            </Card>

            {/* Accent Colors */}
            <Card className="p-6">
              <h4 className="mb-4 font-heading text-xl font-semibold">Accent - Bright Cyan</h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-accent border border-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Default</p>
                    <code className="text-xs text-muted-foreground">{designTokens.colors.accent.DEFAULT}</code>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-accent-light border border-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Light</p>
                    <code className="text-xs text-muted-foreground">{designTokens.colors.accent.light}</code>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{designTokens.colors.accent.usage}</p>
            </Card>
          </div>

          {/* Grayscale */}
          <Card className="p-6 mt-8">
            <h4 className="mb-4 font-heading text-xl font-semibold">Grayscale - Neutral Tones</h4>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mb-4">
              {Object.entries(designTokens.colors.grayscale).filter(([key]) => key !== 'usage').map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className={`w-full h-16 rounded-lg border border-gray-300`} style={{ backgroundColor: value }}></div>
                  <p className="text-xs mt-2 font-medium">{key}</p>
                  <code className="text-[10px] text-muted-foreground block">{value.split(',')[2]}</code>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{designTokens.colors.grayscale.usage}</p>
          </Card>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h3 className="mb-8 font-heading text-3xl font-semibold text-foreground">
            Typography & Fonts
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Font Families */}
            <Card className="p-6">
              <h4 className="mb-4 font-heading text-xl font-semibold">Font Families</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Headings</p>
                  <p className="font-heading text-2xl mb-1">{designTokens.typography.fonts.heading.family}</p>
                  <code className="text-xs text-muted-foreground">font-heading</code>
                  <p className="text-sm text-muted-foreground mt-2">Weights: {designTokens.typography.fonts.heading.weights.join(', ')}</p>
                  <p className="text-sm text-muted-foreground">{designTokens.typography.fonts.heading.usage}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Body Text</p>
                  <p className="font-body text-2xl mb-1">{designTokens.typography.fonts.body.family}</p>
                  <code className="text-xs text-muted-foreground">font-body</code>
                  <p className="text-sm text-muted-foreground mt-2">Weights: {designTokens.typography.fonts.body.weights.join(', ')}</p>
                  <p className="text-sm text-muted-foreground">{designTokens.typography.fonts.body.usage}</p>
                </div>
              </div>
            </Card>

            {/* Heading Scale */}
            <Card className="p-6">
              <h4 className="mb-4 font-heading text-xl font-semibold">Heading Scale</h4>
              <div className="space-y-4">
                {Object.entries(designTokens.typography.scale.headings).map(([tag, styles]) => (
                  <div key={tag}>
                    <p className="font-heading" style={{ fontSize: styles.size, lineHeight: styles.lineHeight, letterSpacing: styles.letterSpacing, fontWeight: styles.weight }}>
                      {tag.toUpperCase()} - Sample Heading
                    </p>
                    <div className="text-xs text-muted-foreground mt-1">
                      <code>{styles.size} / {styles.lineHeight} / {styles.letterSpacing} / {styles.weight}</code>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Body Scale */}
            <Card className="p-6 md:col-span-2">
              <h4 className="mb-4 font-heading text-xl font-semibold">Body Text Scale</h4>
              <div className="grid gap-6 md:grid-cols-5">
                {Object.entries(designTokens.typography.scale.body).map(([name, styles]) => (
                  <div key={name}>
                    <p className="font-medium text-muted-foreground text-xs mb-2">{name.toUpperCase()}</p>
                    <p className="font-body mb-2" style={{ fontSize: styles.size, lineHeight: styles.lineHeight, letterSpacing: styles.letterSpacing, fontWeight: styles.weight }}>
                      Sample text for {name} size
                    </p>
                    <div className="text-[10px] text-muted-foreground">
                      <code className="block">{styles.size}</code>
                      <code className="block">LH: {styles.lineHeight}</code>
                      <code className="block">LS: {styles.letterSpacing}</code>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* CSS Variables Reference */}
        <section className="mb-16">
          <Card className="p-8 bg-gray-50 border-2">
            <h3 className="mb-6 font-heading text-2xl font-semibold text-foreground">
              CSS Variables Reference
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h5 className="font-heading text-lg font-semibold mb-3">Colors</h5>
                <pre className="text-xs bg-background p-4 rounded-lg overflow-x-auto border">
{`--primary: 200 95% 50%
--primary-light: 200 95% 65%
--primary-dark: 200 95% 35%

--secondary: 220 60% 20%
--secondary-light: 220 50% 30%
--secondary-dark: 220 70% 12%

--accent: 180 100% 50%
--accent-light: 180 100% 65%

--gray-[50-900]: 220 15% [value]%`}
                </pre>
              </div>
              <div>
                <h5 className="font-heading text-lg font-semibold mb-3">Typography</h5>
                <pre className="text-xs bg-background p-4 rounded-lg overflow-x-auto border">
{`--font-heading: 'Space Grotesk'
--font-body: 'Inter'

--text-h1: 3.5rem
--text-h2: 3rem
--text-h3: 2.5rem
--text-h4: 2rem
--text-h5: 1.5rem
--text-h6: 1.25rem

--text-lg: 1.125rem
--text-base: 1rem
--text-sm: 0.875rem
--text-xs: 0.75rem`}
                </pre>
              </div>
            </div>
          </Card>
        </section>

        {/* JSON Export */}
        <section>
          <Card className="p-8 bg-secondary text-secondary-foreground">
            <h3 className="mb-4 font-heading text-2xl font-semibold">
              JSON Design Tokens
            </h3>
            <p className="text-sm mb-4 opacity-90">
              Complete design system exported as JSON for use in design tools and development
            </p>
            <pre className="text-xs bg-secondary-dark p-6 rounded-lg overflow-x-auto max-h-96">
              {JSON.stringify(designTokens, null, 2)}
            </pre>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            AI & Robotics Academy Design System · 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
