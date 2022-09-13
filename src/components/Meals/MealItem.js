import { useContext } from 'react'
import CartContext from '../../Store/cart-context'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = ({ name, description, price, id }) => {
  const cartContext = useContext(CartContext)
  const formatedPrice = `$${price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    cartContext.addItem({ id, name, amount, price })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  )
}

export default MealItem
