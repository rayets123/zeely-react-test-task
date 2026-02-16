interface GenerateButtonProps {
  onGenerate: () => void
}

export function GenerateButton({ onGenerate }: GenerateButtonProps) {
  return (
    <button
      type="button"
      onClick={onGenerate}
      aria-label="Generate background for 1 credit"
      className="w-full flex items-center justify-center leading-[171%] gap-2 bg-black text-white py-3 px-4 rounded-[100px] font-medium hover:bg-gray-800 transition-colors mb-[41px] cursor-pointer"
    >
      <img src="/assets/ai.svg" alt="" className="shrink-0 w-[16px] h-[16px] object-contain" aria-hidden />
      Generate BG for 1 credit
    </button>
  )
}
