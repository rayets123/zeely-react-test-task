import { CARD_BASE } from '../constants'

export function DefaultCard() {
  return (
    <div className={`${CARD_BASE} cursor-pointer hover:opacity-90 transition-opacity`}>
      <img
        src="/assets/default.png"
        alt="Avatar"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <span
        className="absolute top-[8px] left-[8px] flex items-center justify-center gap-1.5 w-[50px] h-[19px] px-1 py-1.5 rounded-[5px] border bg-white font-bold text-[10px] leading-[60%] uppercase align-bottom"
        style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        <span className="mt-[2px]">DEFAULT</span>
      </span>
    </div>
  )
}
