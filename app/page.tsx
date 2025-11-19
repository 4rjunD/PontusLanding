"use client"

import { useEffect } from "react"
import { Hero } from "@/components/ui/hero-1";
import { Header } from "@/components/ui/header";
import { Features } from "@/components/blocks/features-8";
import ComparisonTable from "@/components/ui/comparison-table";
import { Timeline } from "@/components/ui/timeline";
import { FeaturesCreditCardShowcase } from "@/components/ui/features-credit-card-showcase";
import { Footer } from "@/components/ui/hover-footer";

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#compare') {
        const compareSection = document.getElementById('compare');
        if (compareSection) {
          setTimeout(() => {
            compareSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleExploreClick = () => {
    const compareSection = document.getElementById('compare');
    if (compareSection) {
      compareSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section id="hero">
        <Hero
          eyebrow="AI PAYMENT ROUTING"
          eyebrowHref="https://cal.com/arjun-dixit-0nwkzi/30min"
          title="The Cheapest Way to Send Money"
          subtitle="Compare rates across all payment routes. Our AI uses machine learning and real-time optimization to analyze every available payment rail and automatically find the cheapest, fastest, and most reliable path for your international transfers."
          ctaLabel="Explore Routes"
          ctaHref="#compare"
          onCtaClick={handleExploreClick}
        />
      </section>
      <section id="features" className="bg-black">
        <Features />
      </section>
      <section id="compare" className="container mx-auto px-6 py-24 md:px-8 bg-black">
        <ComparisonTable />
      </section>
      <section id="timeline" className="bg-black">
        <Timeline
          data={[
            {
              title: "Entry 1: You start a $10,000 USD to INR transfer",
              content: (
                <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                  <p>
                    You need to send $10,000 to a supplier in India.
                  </p>
                  <p>
                    Most businesses default to their bank for this type of transfer, and this is where hidden fees begin. The bank applies a wide FX spread, adds transfer fees, and delays settlement.
                  </p>
                  <div className="space-y-2">
                    <p><strong>Cost:</strong> $350 to $700</p>
                    <p><strong>Effective Fee:</strong> 3 to 7%</p>
                    <p><strong>Speed:</strong> 3 to 7 days</p>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 italic">
                    You are losing hundreds of dollars before your money even leaves the country.
                  </p>
                </div>
              ),
            },
            {
              title: "Entry 2: You check Wise as an alternative",
              content: (
                <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                  <p>
                    Wise gives transparent pricing and lower fees. It is a massive improvement over banks, but it still follows a fixed rail that may not always be the cheapest or fastest given real time market conditions.
                  </p>
                  <div className="space-y-2">
                    <p><strong>Cost:</strong> Approximately $35</p>
                    <p><strong>Effective Fee:</strong> Approximately 0.35%</p>
                    <p><strong>Speed:</strong> 1 to 2 days</p>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 italic">
                    Better than the bank, but still not optimal, and limited to one predefined route.
                  </p>
                </div>
              ),
            },
            {
              title: "Entry 3: You explore stablecoin rails",
              content: (
                <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                  <p>
                    You could convert USD to USDC, move it through a low cost chain, bridge it if needed, and then off ramp to INR. This is cheap and fast, but manually doing it requires managing multiple platforms, wallets, slippage, and timing.
                  </p>
                  <div className="space-y-2">
                    <p><strong>Cost:</strong> Approximately $15</p>
                    <p><strong>Effective Fee:</strong> Approximately 0.15%</p>
                    <p><strong>Speed:</strong> Minutes</p>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 italic">
                    The cheapest rail exists, but it is too fragmented and operationally messy for most businesses to manage reliably.
                  </p>
                </div>
              ),
            },
            {
              title: "Entry 4: Pontus finds the optimal route for you",
              content: (
                <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                  <p>
                    Pontus analyzes every available rail, including bank, Wise, stablecoins, Layer 2 networks, and local corridors, in real time. It constructs a weighted graph and chooses the best path based on cost, speed, and reliability.
                  </p>
                  <p>
                    For this transfer, Pontus routes through a hybrid path using the most efficient digital and regional rails.
                  </p>
                  <div className="space-y-2">
                    <p><strong>Cost:</strong> Approximately $18</p>
                    <p><strong>Effective Fee:</strong> Approximately 0.18%</p>
                    <p><strong>Speed:</strong> Minutes to Hours</p>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 italic">
                    You save up to $332 compared to using your bank, and the payment settles dramatically faster.
                  </p>
                </div>
              ),
            },
            {
              title: "Final Entry: Your savings are clear",
              content: (
                <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                  <p>
                    By comparing every route on the network and choosing the optimal one, Pontus consistently cuts transfer costs by 50 to 80%.
                  </p>
                  <p>For this $10,000 USD to INR example:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Bank: $350 to $700</li>
                    <li>Wise: $35</li>
                    <li>Stablecoin rail: $15</li>
                    <li>Pontus Optimized: Approximately $18 total</li>
                  </ul>
                  <p className="font-semibold text-neutral-700 dark:text-neutral-200">
                    Total savings on this transfer: $332 plus
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-400 italic">
                    You get enterprise grade efficiency with zero complexity.
          </p>
        </div>
              ),
            },
          ]}
        />
      </section>
      <section id="showcase" className="bg-black">
        <FeaturesCreditCardShowcase />
      </section>
      <Footer />
      </main>
  );
}
