import { Button } from '@/components/ui/button'
import { BackgroundGeneratorSidebar } from '@/components/BackgroundGeneratorSidebar'
import { useSidebarStore } from '@/store/sidebar-store'

function App() {
  const openSidebar = useSidebarStore((state) => state.openSidebar)

  return (
    <div className="min-h-screen w-full min-w-0 flex items-center justify-center bg-background p-8 overflow-x-hidden">
      <Button onClick={openSidebar} className="text-base px-8 cursor-pointer">
        Change background
      </Button>
      <BackgroundGeneratorSidebar />
    </div>
  )
}

export default App
