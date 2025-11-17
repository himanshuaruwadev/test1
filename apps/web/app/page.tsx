import { loadEnv } from "@turborepo/config/env";
import { Button } from "@turborepo/ui";

const env = loadEnv();

const features = [
  "Shared UI components via @turborepo/ui",
  "Centralized environment and types via @turborepo/config",
  "Linting and formatting using shared ESLint/Prettier configs",
  "Turborepo pipelines for dev, lint, and build",
  "Tailwind CSS for rapid styling"
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <header className="rounded-xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">Welcome</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Turborepo Next.js Starter</h1>
        <p className="mt-4 text-lg text-slate-700">
          Build faster with a type-safe monorepo that shares configuration, UI, and tooling across
          apps.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button>Primary CTA</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
          >
            <p className="text-base font-semibold text-slate-900">{feature}</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Environment</h2>
        <p className="mt-2 text-slate-700">Running in <strong>{env.NODE_ENV}</strong> mode.</p>
      </section>
    </div>
  );
}
