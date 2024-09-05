import ShopItem from './ShopItem';
import '../styles/ListView.css'

function ListView({items}) {
  return (
    <div className="list-view">
      {items.map((item, index) => (
        <ShopItem  item={item} index={index} />
      ))}
    </div>
  )
}

export default ListView;
