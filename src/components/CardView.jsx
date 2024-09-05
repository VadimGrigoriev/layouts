import ShopCard from './ShopCard';
import '../styles/CardView.css';

function CardView({cards}) {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <ShopCard card={card} index={index} />
      ))}
    </div>
  )
}

export default CardView;
