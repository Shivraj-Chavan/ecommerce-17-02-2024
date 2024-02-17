import React from 'react'
import StarIcon from '@mui/icons-material/Star';
export default function Home() {
  return (

    <>
    <div className='container-fluid d-flex flex-wrap' style={{background:"#e3edf6"}}>

        <div className='col-xl-6 d-flex  justify-content-start align-items-center'>
            <div>
            <p>Starting At $999</p>
            <h1>The best notebook <br></br>collection 2024</h1>
            <h3>Exclusive offer -10% off this week</h3>
            <button className='btn btn-primary'>Shop Now</button>
            </div>
        </div>
        <div className='col-xl-6 '>
            <img src="https://shopify-xrh7.onrender.com/hero.png" className='img-fluid'/>
        </div>

    </div>

    <div className='py-4 container-fluid d-flex flex-wrap justify-content-center'>
        <div className='box'>1</div>
        <div className='box'>1</div>
        <div className='box'>1</div>
        <div className='box'>1</div>
    </div>
    <div className='container-fluid'>
    <h1 className='ps-3'>Trending Products</h1>
    </div>

    <div className='container-fluid d-flex flex-wrap justify-content-evenly'>
      
      
      
        <div className='mycart card'>
            <div className='top'>
                <img className='img-fluid' src="	https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"/>
            </div>
            <div className='bottom d-flex'>
            <div className='left'>
                <p>smartphones</p>
                <p>iPhone 9</p>         
                <p>$477.85</p>
                <p>$549-12.96%</p>
            </div>
            <div className='right d-flex justify-content-center align-items-end'>
                <button className='mb-3'>Add To Cart</button>
            </div>
            </div>
        </div>
        <div className='mycart card'>
            <div className='top'>
                <img className='img-fluid' src="	https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"/>
            </div>
            <div className='bottom d-flex'>
            <div className='left'>
                <p>smartphones</p>
                <p>iPhone 9</p>         
                <p>$477.85</p>
                <p>$549-12.96%</p>
            </div>
            <div className='right d-flex justify-content-center align-items-end'>
                <button className='mb-3'>Add To Cart</button>
            </div>
            </div>
        </div>
        <div className='mycart card'>
            <div className='top'>
                <img className='img-fluid' src="	https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"/>
            </div>
            <div className='bottom d-flex'>
            <div className='left'>
                <p>smartphones</p>
                <p>iPhone 9</p>         
                <p>$477.85</p>
                <p>$549-12.96%</p>
            </div>
            <div className='right d-flex justify-content-center align-items-end'>
                <button className='mb-3'>Add To Cart</button>
            </div>
            </div>
        </div>
        <div className='mycart card'>
            <div className='top'>
                <img className='img-fluid' src="	https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"/>
            </div>
            <div className='bottom d-flex'>
            <div className='left'>
                <p>smartphones</p>
                <p>iPhone 9</p>         
                <p>$477.85</p>
                <p>$549-12.96%</p>
            </div>
            <div className='right d-flex justify-content-center align-items-end'>
                <button className='mb-3'>Add To Cart</button>
            </div>
            </div>
        </div>




    </div>


    </>
  
  )
}
