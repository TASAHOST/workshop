import React from 'react'

const Menu = ({item}) => {
  return (
    <div className='sectionc-center'>
      {
        item.map((menuitem)=>{
            const {id, title, price, img, desc } = menuitem;
            return(
                <article key={id}className="manu-item">
                    <img src={img} alt={title} className='photo' />
                    <div className='item'>
                        <header>
                            <h4>{title}</h4>
                            <h4 className='price'>{price}</h4>
                        </header>
                        <p className='item-text'></p>
                    </div>info
                </article>
            );
        })
      }
    </div>
  )
}

export default Menu
