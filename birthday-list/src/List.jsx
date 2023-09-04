import React from 'react'


const List = (props) => {
    const { people } = props;

console.log(people);

    return (
        <div>
            { //สลายโครงสร้าง
                people.map((person) => {
                    const { id, name, age, image } = person;
                    return (
                        <article className='person' key={id}>
                            <img src={image} alt="" />
                            <div>
                                <h4>
                                    {name}
                                </h4>
                                <p>{age} year old</p>
                            </div>
                        </article>
                    )
                })
            }


        </div>
    )
}

export default List


