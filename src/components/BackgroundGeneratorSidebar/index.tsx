import { useState, useCallback } from 'react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useSidebarStore } from '@/store/sidebar-store'
import { PLACEHOLDER_BGS } from './constants'
import { shuffleArray } from './utils'
import { BackgroundIdeaSection } from './BackgroundIdeaSection'
import { GenerateButton } from './GenerateButton'
import { LoadingCard, DefaultCard, PlaceholderCard } from './cards'

export function BackgroundGeneratorSidebar() {
  const { isOpen, closeSidebar } = useSidebarStore()
  const [cardBackgrounds, setCardBackgrounds] = useState<string[]>([...PLACEHOLDER_BGS])

  const handleGenerate = useCallback(() => {
    setCardBackgrounds((prev) => shuffleArray(prev))
  }, [])

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeSidebar()}>
      <SheetContent
        className="w-[400px] max-w-[400px] overflow-y-auto overflow-x-hidden pl-5 pr-3 py-8 bg-white sidebar-scroll"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] leading-[120%] font-bold">Change background</h2>
        </div>

        <BackgroundIdeaSection />
        <GenerateButton onGenerate={handleGenerate} />

        <div>
          <h3 className="text-sm font-bold mb-[9px] leading-[120%]">Your backgrounds</h3>
          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(3, 112px)' }}>
            <LoadingCard />
            <DefaultCard />
            {cardBackgrounds.map((bg, i) => (
              <PlaceholderCard key={i} bg={bg} />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
