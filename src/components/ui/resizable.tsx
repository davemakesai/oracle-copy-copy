import React from "react"
import { GripVertical } from "lucide-react"
import {
  PanelGroup, // Changed from ResizablePanelGroup
  Panel,      // Changed from ResizablePanel
  PanelResizeHandle // Changed from ResizableHandle
} from "react-resizable-panels"
import { cn } from "@/lib/utils"

const ResizablePanelGroupRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PanelGroup>) => ( // Changed to PanelGroup
  <PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)
ResizablePanelGroupRoot.displayName = PanelGroup.displayName // Changed to PanelGroup.displayName

const ResizablePanelRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Panel>) => ( // Changed to Panel
  <Panel className={cn(className)} {...props} />
)
ResizablePanelRoot.displayName = Panel.displayName // Changed to Panel.displayName

const ResizableHandleRoot = ({
  className,
  withHandle,
  ...props
}: React.ComponentPropsWithoutRef<typeof PanelResizeHandle> & { // Changed to PanelResizeHandle
  withHandle?: boolean
}) => (
  <PanelResizeHandle // Changed to PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-4 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </PanelResizeHandle>
)
ResizableHandleRoot.displayName = PanelResizeHandle.displayName // Changed to PanelResizeHandle.displayName

export {
  ResizablePanelGroupRoot as ResizablePanelGroup,
  ResizablePanelRoot as ResizablePanel,
  ResizableHandleRoot as ResizableHandle,
}