import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { NavBar, SideBar } from '@/modules/admin'

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border"
    >
      <ResizablePanel
        defaultSize={12}
        minSize={12}
        maxSize={14}
      >
        <main className="w-full p-4 flex flex-col gap-5">
          <SideBar />
        </main>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={75}
        className="h-[calc(100vh-4px)]"
      >
        <NavBar />
        <main className="container">{children}</main>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
