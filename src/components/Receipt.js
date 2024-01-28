import React from 'react'

const Receipt = props => {
  const [showing, setShowing] = React.useState(false)
  const toggleShowing = () => setShowing(!showing)
  return (
    <>
      <button className="show-receipt" onClick={toggleShowing}>
        Show receipt {/* this is what the button says */}
      </button>

      <section className={`receipt ${showing ? 'showing' : ''}`}>
        {/* result is that this section will always have CSS receipt
        class, and if showing is true, then it will also have CSS showing
        class */}

        <h2>Your order</h2>
        <dl> {/* type of list */}
          {/* need to pass in array of objects with name and price*/}
          {props.purchasedItems.map(purchasedItem => (
            <div class="receipt-item">
              <dt>{purchasedItem.name}</dt> {/* title */}
              <dd>{purchasedItem.price}</dd> {/* description */}
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}

export default Receipt
