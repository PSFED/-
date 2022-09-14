import { useContext, useEffect, useState } from 'react'
import CartContext from '../../Store/cart-context'
import CartIcon from '../Cart/CartIcon'
import style from './HeaderCartButton.module.css'

const HeaderCartButton = ({ onClick }) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false)
  const cartContext = useContext(CartContext)

  const cartItemsNumber = cartContext.items.reduce((cur, item) => {
    return cur + item.amount
  }, 0)

  const buttonClasses = `${style.button} ${isButtonAnimated ? style.bump : ''}`

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return
    }
    setIsButtonAnimated(true)

    const timer = setTimeout(() => {
      setIsButtonAnimated(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [cartContext.items])

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={style.badge}>{cartItemsNumber}</span>
    </button>
  )
}

export default HeaderCartButton
