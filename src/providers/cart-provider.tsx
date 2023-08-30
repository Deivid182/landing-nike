import { Provider } from 'react-redux'
import { store } from '../state/store'

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider
      store={store}
    >
      {children}
    </Provider>
  )
}

export default CartProvider