import * as React from "react";
import { cn } from "@/lib/utils";

export type ChartConfig = Record<string, { label?: React.ReactNode; color?: string }>;

type ChartContextProps = { config: ChartConfig };
const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used within a <ChartContainer />");
  return ctx;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { config: ChartConfig; children: React.ReactNode }
>(({ className, children, config, ...props }, ref) => (
  <ChartContext.Provider value={{ config }}>
    <div ref={ref} className={cn("w-full", className)} {...props}>
      {children}
    </div>
  </ChartContext.Provider>
));
ChartContainer.displayName = "Chart";

// Placeholders to keep API compatibility
const ChartTooltip: React.FC<any> = () => null;
const ChartLegend: React.FC<any> = () => null;

export { ChartContainer, ChartTooltip, ChartLegend, useChart };
