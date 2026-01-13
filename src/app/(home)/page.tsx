import Link from 'next/link';
import { Cards, Card } from 'fumadocs-ui/components/card';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 px-4 py-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Welcome to Bubbly Maps
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover and contribute to the world's largest open-source water fountain mapping platform.
          Find clean drinking water locations across Australia with community-driven reviews and contributions.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          
          <a
            href="/docs"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Get Started
          </a>

          <Link
            href="https://bubblymaps.org"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Visit Bubbly Maps
          </Link>
        </div>

        <Cards className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Quick Start"
            description="Learn how to self-host Bubbly Maps and get your instance running locally."
            href="/docs"
          />
          <Card
            title="Guides"
            description="Step-by-step guides for adding waypoints, contributing, and using the platform."
            href="/docs/guides"
          />
          <Card
            title="APIs"
            description="Explore the API endpoints for integrating with Bubbly Maps data."
            href="/docs/apis"
          />
        </Cards>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>
            Built with ❤️ by Linus.
          </p>
        </div>
      </div>
    </div>
  );
}
