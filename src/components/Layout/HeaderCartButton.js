import style from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = () => {
  return (
    <button className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={style.badge}>2</span>
    </button>
  )
}

export default HeaderCartButton
