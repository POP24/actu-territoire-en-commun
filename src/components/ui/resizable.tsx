import * as React from "react";
import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("flex", className)} {...props} />
);

const ResizablePanel = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("flex-1 min-w-0", className)} {...props} />
);

const ResizableHandle = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("w-1 bg-border", className)} {...props} />
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
