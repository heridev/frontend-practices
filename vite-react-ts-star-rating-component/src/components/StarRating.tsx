import './starRating.css';

interface StarRatingProps {
  starValue: boolean;
  hoverValue: boolean;
  onClick: React.MouseEventHandler<HTMLSpanElement>
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function StarRating({ hoverValue, starValue, onClick, onMouseEnter, onMouseLeave }: StarRatingProps) {
  const symbolToUse = starValue || hoverValue ? "★" : "☆"
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="star">{symbolToUse}</span>
  )
}
