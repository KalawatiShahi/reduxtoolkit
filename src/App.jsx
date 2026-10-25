import React from 'react'
import Header from './Header'
import Product from './Product'
import { useDispatch } from 'react-redux'
import { clearAllItems } from './redux/slice'


const App = () => {

  const disppatch = useDispatch();

  return (
    <div>
    <Header/>
      <h2>This is a ReduxToolkit</h2>
      <button onClick={()=>disppatch(clearAllItems())} className='btn'>Clear Cart</button>
      <Product/>
    </div>
  )
}

export default App
