import { useContext } from 'react'
import CartContext from '../../Store/cart-context'
import CartIcon from '../Cart/CartIcon'
import style from './HeaderCartButton.module.css'

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext)
  const cartItemsNumber = cartContext.items.reduce((cur, item) => {
    return cur + item.amount
  }, 0)

// const buttonClasses = `${style.button}`

  return (
    <button className={style.button} onClick={onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={style.badge}>{cartItemsNumber}</span>
    </button>
  )
}

export default HeaderCartButton
