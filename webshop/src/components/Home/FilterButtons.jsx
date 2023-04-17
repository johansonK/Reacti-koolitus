import React from 'react'


function FilterButtons({dbProducts, setProducts, categories}) {

const filterProducts = (categoryClicked) => {
    const filteredProducts = dbProducts.filter((product) => product.category === categoryClicked);
    setProducts(filteredProducts);
}

  return (
    <div>
       {
        categories.map(category => <button onClick={() => filterProducts (category.name)}>{category.name}</button>)
      }

    </div>
  )
}

/*<button onClick={() => filterProducts ("camping")}>Camping</button>
      <button onClick={() => filterProducts ("tent")}>Tent</button>
      <button onClick={() => filterProducts ("belts")}>Belts</button>
      <button onClick={() => filterProducts ("jeans")}>Jeans</button>*/

export default FilterButtons