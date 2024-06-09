import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { SideBar } from '@/modules/admin'


export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border"
    >
      <ResizablePanel
        defaultSize={16}
        minSize={16}
        maxSize={18}
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
        <div className="flex items-center justify-center p-6 h-full">
          {children}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
