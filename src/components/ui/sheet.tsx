import * as SheetPrimitive from "@radix-ui/react-dialog"
import * as React from "react"
import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-[1] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetContentClassName =
  "fixed z-[1] inset-y-0 right-0 h-full w-full max-w-[400px] gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetContentClassName, className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close
        className="absolute h-[24px] w-[24px] right-3 top-8 data-[state=open]:bg-secondary cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Close sidebar"
      >
        <img src="/assets/close.svg" alt="" className="w-full h-full" aria-hidden />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

export { Sheet, SheetContent }
