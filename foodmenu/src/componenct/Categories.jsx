import React from 'react'

const Categories = ({ allcatagories, filteritem }) => {
    return (
        <div className='btn-container'>
            {
                allcatagories.map((catagory, index) => {
                    return (
                        <button className='filter-btn' key={index} onClick={()=>filteritem(catagory)}>{catagory}
                        </button>
                    );
                })}



        </div>
    )
}

export default Categories
