import { CARD_BASE } from '../constants'

interface PlaceholderCardProps {
  bg: string
}

export function PlaceholderCard({ bg }: PlaceholderCardProps) {
  return (
    <div className={`${CARD_BASE} cursor-pointer hover:opacity-90 transition-opacity`}>
      <img
        src={`/assets/${bg}.png`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <img
        src="/assets/avatar-placeholder.png"
        alt="Avatar"
        className="absolute top-[1px] left-[1px]"
      />
    </div>
  )
}
