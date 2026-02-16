import { CARD_SIZE } from '../constants'

export function LoadingCard() {
  return (
    <div className={`${CARD_SIZE} rounded-[12px] bg-black flex flex-col items-center shrink-0`}>
      <div className="flex-1 flex items-center justify-center mt-7 min-h-[70px]">
        <div className="relative w-[70px] h-[70px] shrink-0 flex items-center justify-center">
          <svg
            viewBox="0 0 36 36"
            preserveAspectRatio="none"
            className="absolute inset-0 w-[70px] h-[70px] -rotate-90"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#34d399"
              strokeWidth="1"
              strokeDasharray="25 100"
              strokeLinecap="round"
            />
          </svg>
          <span className="relative text-white font-medium text-[14px] leading-[100%] text-center mt-1">
            25%
          </span>
        </div>
      </div>
      <span className="text-white font-semibold text-[12px] leading-[100%] text-center pb-[13px]">
        1 minute left
      </span>
    </div>
  )
}
