import React, { useEffect, useState } from 'react'

export default function Products() {

    const [data,setdata]=useState([])
    const [change,setchange]=useState([])

    const fetchapi=async()=>{

           const response=await fetch("https://shivraj-chavan.github.io/api/electronics.json")
              const  result=await response.json()
              setdata(result)
    }

    useEffect(()=>{

        fetchapi()

    })

        const checkcat=(x)=>{

                if(x=="all products"){
                    setchange(data)
                }
                else{

                   const ans= data.filter((value,index)=>{
                           return  value.category === x
                    })

                    setchange(ans)
                }   

        }



    return (
        <div className='container-fluid d-flex'>
            <div className="col-xl-3 ">
                <ul className="list-group">
                    <li className="list-group-item" onClick={()=>{checkcat("all products")}}>All products</li>
                    <li className="list-group-item" onClick={()=>{checkcat("mobile")}}>Mobile</li>
                    <li className="list-group-item" onClick={()=>{checkcat("laptop")}}>Laptop</li>
                    <li className="list-group-item" onClick={()=>{checkcat("airdopes")}}>Airbuds</li>
                    <li className="list-group-item" onClick={()=>{checkcat("watch")}}>Watch</li>
                    <li className="list-group-item" onClick={()=>{checkcat("tv")}}>Tv</li>
                </ul>
            </div>

            <div className='col-xl-9 d-flex flex-wrap justify-content-evenly align-items-center '>


            {
                change.map((value,index)=>{
                    return(
                        <div className='mycart card mb-3'>
                        <div className='top'>
                            <img className='img-fluid' src={value.images[0]}/>
                        </div>
                        <div className='bottom d-flex'>
                        <div className='left'>
                            <p>{value.title}</p>
                            <p>{value.category}</p>         
                            <p>${value.price}</p>
                            <p>$549-12.96%</p>
                        </div>
                        <div className='right d-flex justify-content-center align-items-end'>
                            <button className='mb-3 btn text-white' style={{backgroundColor:"#d62b9d"}}>Add To Cart</button>
                        </div>
                        </div>
                    </div>
                    )
                })
            }




            </div>
        </div>
    )
}
