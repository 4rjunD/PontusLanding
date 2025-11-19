import { cn } from "@/lib/utils";
import {
  IconRoute,
  IconBolt,
  IconCurrencyDollar,
  IconWorld,
  IconShield,
  IconChartLine,
  IconClock,
  IconDatabase,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Multi Rail Aggregation",
      description:
        "Real time data aggregation across traditional banking, digital payment rails, stablecoin networks, and Layer 2 protocols for comprehensive market visibility.",
      icon: <IconRoute />,
    },
    {
      title: "Intelligent Optimization",
      description:
        "Advanced algorithms analyze cost, speed, and reliability to automatically identify the optimal payment route for every transaction.",
      icon: <IconBolt />,
    },
    {
      title: "Cost Reduction",
      description:
        "Dramatically reduce cross border payment expenses by 50 to 80 percent through intelligent route selection and fee minimization strategies.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Global Coverage",
      description:
        "Access optimized payment corridors across 150 plus countries with comprehensive support for major currencies and emerging markets.",
      icon: <IconWorld />,
    },
    {
      title: "Enterprise Security",
      description:
        "Secure through contractual agreements with enterprise clients. All routes executed through licensed financial partners with full regulatory compliance.",
      icon: <IconShield />,
    },
    {
      title: "Real Time Analytics",
      description:
        "Comprehensive market intelligence including FX rates, swap quotes, gas fees, bridge costs, liquidity depth, and historical reliability metrics.",
      icon: <IconChartLine />,
    },
    {
      title: "Faster Settlement",
      description:
        "Reduce payment processing times from multiple days to hours or minutes by leveraging faster digital rails and optimized routing paths.",
      icon: <IconClock />,
    },
    {
      title: "Weighted Graph Routing",
      description:
        "Sophisticated graph based optimization engine that maps all available payment paths and calculates the most efficient route for each transaction.",
      icon: <IconDatabase />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
