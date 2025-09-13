import * as React from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Drawer = ({ children, ...props }: React.ComponentProps<typeof Dialog>) => (
  <Dialog {...props}>{children}</Dialog>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DialogTrigger;
const DrawerContent = React.forwardRef<React.ElementRef<typeof DialogContent>, React.ComponentPropsWithoutRef<typeof DialogContent>>((props, ref) => (
  <DialogContent ref={ref} className={cn("sm:max-w-[425px]", props.className)} {...props} />
));
const DrawerHeader = DialogHeader;
const DrawerTitle = DialogTitle;
const DrawerDescription = DialogDescription;
const DrawerPortal = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const DrawerOverlay = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const DrawerClose = (props: React.ComponentProps<"button">) => <button {...props} />;
const DrawerFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-2", className)} {...props} />
);

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
