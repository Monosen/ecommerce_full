import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { ProductCart } from '../ProductCart'

import { handlerAddAllProductsInCart } from '../../../redux/actions/cart.action'

import { IoMdClose } from 'react-icons/io'

export const CartBody = ({ cartNavbar, handlerCartNavBar }) => {
  const [cartServer, setCartServer] = useState({})
  const dispatch = useDispatch()

  const { token } = useSelector((store) => store.session)
  const { cart, total } = useSelector((store) => store.cart)

  useEffect(() => {
    const handlerAllProductCart = async () => {
      if (token) {
        const { data } = await axios.get('/api/v1/orders/get-cart', {
          headers: { Authorization: `Bearer ${token}` }
        })
        const { cart } = data.data
        console.log(cart)
        setCartServer(cart)
        dispatch(handlerAddAllProductsInCart({ cart: cart.products }))
      }
    }
    handlerAllProductCart()
  }, [cartNavbar])

  return (
    <>
      <section
        className={`fixed top-0 right-0 flex w-full h-screen transition-all duration-500 ease-in-out z-50 ${
                    cartNavbar ? 'right-0' : '-right-full'
                }`}
      >
        <button
          className='w-5/12 h-screen bg-transparent cursor-default'
          onClick={handlerCartNavBar}
        />
        <div className='flex flex-col justify-between w-7/12 h-full px-3 py-4 text-black bg-gray-50'>
          <div>
            <header className='flex items-center justify-between pb-3 border-b'>
              <p className='uppercase'>SHOPPING CART</p>
              <IoMdClose
                onClick={handlerCartNavBar}
                className='text-lg'
              />
            </header>
            <div>
              {cartServer?.products
                ? cartServer.products.map((product) => (
                  <ProductCart
                    key={product.id}
                    id={product.id}
                    name={product?.name}
                    price={product?.price}
                    quantity={product?.quantity}
                  />
                ))
                : cart.map((product) => (
                  <ProductCart
                    key={product.id}
                    id={product.id}
                    name={product?.name}
                    price={product?.price}
                    quantity={product?.quantity}
                  />
                ))}
            </div>
          </div>
          <footer>
            <div className='flex justify-between py-2 my-5 border-b'>
              <p>Subtotal:</p>
              <p>
                $
                {cartServer?.totalPrice
                  ? cartServer.totalPrice
                  : total}
              </p>
            </div>
            <div className='flex flex-col w-full'>
              <button className='py-3 mb-4 text-lg text-black uppercase border border-red-600 rounded-md'>
                view cart
              </button>
              <button className='py-3 text-lg text-white uppercase bg-red-400 rounded-md'>
                checkout
              </button>
            </div>
          </footer>
        </div>
      </section>

      {cartNavbar && (
        <span className='fixed inset-0 z-40 bg-black opacity-70' />
      )}
    </>
  )
}
