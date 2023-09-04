import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import menu from './data'
import Categories from './componenct/Categories'
import Menu from './componenct/menu'



function App() {
  const [menuitem, setMenuitem] = useState(menu)
  const allcatagories = ['All', ...new Set(menu.map((item)=>item.category))];

  const filteritem =(category) => {
    if(category ==='All'){
    setMenuitem(menu);
    }else{
      const newitem = menu.filter((item)=> item.category === category)
      setMenuitem(newitem);
    }
  }


  return (
    
      <div>
        <h2>workshop Foodmenu</h2>
        <main>
          <section className='menu'>
            <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'></div>
            </div>

          \

            <Categories allcatagories={allcatagories} filteritem={filteritem}/>
            <Menu item={menuitem} />

            <menu/>
          </section>
        </main>
      </div>
      
  )
}

export default App
