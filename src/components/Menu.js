import React from 'react'
import MenuItem from './MenuItem'
import Receipt from './Receipt'

const menuItems = [
  {
    name: '2 Chili Dogs',
    price: '$6.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150191/chili-dogs.jpg',
  },
  {
    name: 'Classic Hamburger',
    price: '$5.49',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150440/hamburger.jpg',
  },
  {
    name: 'Glorified Bacon Cheeseburger',
    price: '$6.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150499/bacon-cheese.jpg',
  },
  {
    name: 'Chicken sandwich',
    price: '$7.12',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150467/chicken-sammy.jpg',
  },
  {
    name: 'Classic Dog',
    price: '$4.49',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150520/classic-dog.jpg',
  },
  {
    name: 'Classic cheeseburger',
    price: '$5.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150542/classic-cheese.jpg',
  },
]

function Menu() {
  /* Menu is parent for MenuItem and Receipt as they are both rendered in Menu.
      Need to lift state up as there is a component all 3 use. */

      /* Receipt needs purhcasedItems so it can display the value of 
      the state variable as an array */

      /* menuItem needs purhcasedItems to update array*/

  const [purchasedItems, setPurchasedItems] = React.useState([])

  /* function updatePurchasedItems takes one parameter, purchasedItem */
  const addPurchasedItems = purchasedItem => {
    setPurchasedItems([...purchasedItems, purchasedItem])
  }

  const removePurchasedItems = name => {
    /* if name is not equal to item.name, add it to list*/
    setPurchasedItems(purchasedItems.filter(item => name !== item.name))
  }


  return (
    <section>
      <dl>
        {menuItems.map(menuItem => {
          return (
            <MenuItem
              name={menuItem.name}
              price={menuItem.price}
              picture={menuItem.picture}

              /* passing the name of the function down to MenuItem*/
              addPurchasedItems = {addPurchasedItems}
              removePurchasedItems = {removePurchasedItems}
            />
          )
        })}
      </dl>
      <Receipt purchasedItems={purchasedItems} />
    </section>
  )
}

export default Menu
