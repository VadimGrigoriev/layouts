import { useState } from 'react';
import {products} from '../data/products'
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardView from './CardView';

function Store() {
  const [selectedIcon, setSelectedIcon] = useState("view_module");

  const onSwitch = () => {
    console.log('click')
    setSelectedIcon(selectedIcon === "view_module" ? "view_list" : "view_module");
  }

  return (
    <div className='container'>
      <IconSwitch 
        className="icon"
        icon={selectedIcon}
        onClick={onSwitch} />
      {selectedIcon === "view_module" 
        ? (<ListView items={products} />)
        : (<CardView cards={products} />)}
    </div>
  );
}

export default Store;
