import './starRating.css';

interface StarRatingProps {
  starValue: boolean;
  onClick: React.MouseEventHandler<HTMLSpanElement>
}

export default function StarRating({ starValue, onClick }: StarRatingProps) {
  const symbolToUse = starValue ? "★" : "☆"
  return (
    <span onClick={onClick} className="star">{symbolToUse}</span>
  )
}
