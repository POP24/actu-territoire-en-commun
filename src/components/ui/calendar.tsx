import * as React from "react";
import { cn } from "@/lib/utils";

export type CalendarProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: Date;
  onChange?: (date: Date) => void;
};

function formatDateValue(date?: Date) {
  try {
    return date ? new Date(date).toISOString().slice(0, 10) : "";
  } catch {
    return "";
  }
}

function Calendar({ className, value, onChange, ...props }: CalendarProps) {
  return (
    <div className={cn("p-3 rounded-md border bg-background", className)} {...props}>
      <input
        type="date"
        className="w-full bg-transparent outline-none"
        value={formatDateValue(value)}
        onChange={(e) => {
          const v = e.currentTarget.value;
          if (!v) return onChange?.(new Date());
          onChange?.(new Date(v + "T00:00:00"));
        }}
      />
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
