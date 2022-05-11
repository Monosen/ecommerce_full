import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { UserNavBar } from '../UserNavBar'
import { CartBody } from '../CartBody'

import { RiShoppingCartLine, RiUser3Fill } from 'react-icons/ri'

export const NavBar = () => {
  const [userNavbar, setUserNavbar] = useState(false)
  const [cartNavbar, setCartNavbar] = useState(false)

  const { token } = useSelector((store) => store.session)

  const handlerUserNavBar = () => {
    setUserNavbar(!userNavbar)
  }

  const handlerCartNavBar = () => {
    setCartNavbar(!cartNavbar)
  }

  return (
    <nav className='fixed top-0 left-0 z-50 w-full py-5 bg-white'>
      <div className='container px-4 mx-auto sm:px-10 md:px-20 lg:max-w-6xl'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='text-2xl capitalize'>
            MonoShop
          </Link>
          <ul>
            <li className='inline-block'>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-red-400 px-4 py-3'
                    : 'px-4 py-3 text-black'}
                to='/'
              >
                Home
              </NavLink>
            </li>
            {token && (
              <li className='inline-block'>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-red-400 px-4 py-3'
                      : 'px-4 py-3 text-black'}
                  to='/dashboard'
                >
                  Dashbord
                </NavLink>
              </li>
            )}
          </ul>
          <div className='flex justify-between w-14'>
            <div>
              <RiShoppingCartLine
                className='text-lg cursor-pointer'
                onClick={handlerCartNavBar}
              />
              <CartBody
                cartNavbar={cartNavbar}
                handlerCartNavBar={handlerCartNavBar}
              />
            </div>

            <div className='relative flex justify-center'>
              <RiUser3Fill
                className={`text-lg cursor-pointer ${
                                    token ? 'text-red-500' : 'text-black'
                                }`}
                onClick={handlerUserNavBar}
              />
              {userNavbar && <UserNavBar />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
