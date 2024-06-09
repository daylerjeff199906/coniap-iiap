import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { SideBar } from '@/modules/admin'

const itemsMenu = []

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border"
    >
      <ResizablePanel
        defaultSize={25}
        minSize={16}
      >
        <main className="w-full p-4 flex flex-col gap-5">
          <SideBar />
        </main>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex items-center justify-center p-6 ">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
