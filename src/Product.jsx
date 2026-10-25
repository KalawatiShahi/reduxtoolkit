import { useDispatch } from 'react-redux'
import { addItem, removeItem } from './redux/slice'


const Product = () => {
    const dispatch = useDispatch()
  return (
    <div className='product-cart'>
      <div>
        <img  className='mouse' src='https://resource.logitech.com/w_776,h_437,ar_16:9,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m100/m100-charcoal-feature-2.jpg'/>
      </div>
      <div className='product-info'>
        <h1>Wireless Mouse</h1>
        <p className='price'>Rs.1500</p>
        <p className='discription'>Mouse is moved on a flat surface to
         control the movement of the pointer on a screen.
         A mouse usually has two or three buttons. </p>
         <button className='btn' onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
         <button className='removebtn' onClick={()=>dispatch(removeItem(1))}>Remove Item</button>
      </div>
    </div>
  )
}

export default Product
