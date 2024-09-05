function ShopCard({card, index}) {
  return (
    <div className="shop-card" key={index}>
      <div className="card-header">
        <h3 className="card-name">{card.name}</h3>
        <p className="card-color">{card.color}</p>
      </div>
      <div className="card-img">
        <img src={card.img} alt={card.name} />
      </div>
      <div className="card-footer">
        <span className="card-price">${card.price}</span>
        <button className="card-button">ADD TO CARD</button>
      </div>
    </div>
  )
}

export default ShopCard;
