function ShopItem({item, index}) {
  return (
    <div className="shop-item" key={index}>
      <div className="item-img">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="item-main">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-color">{item.color}</p>
        <span className="item-price">${item.price}</span>
      </div>
      <div className="item-actions">
        <button className="item-button">ADD TO CARD</button>
      </div>
    </div>
  )
}

export default ShopItem;
