import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MoviesData from '../data/Data'

const DetailPage = () => {

    const navigate = useNavigate();
    let {id} = useParams();
    let fData = MoviesData.find(x => x.id == id)
  return (
    <div style={{
      backgroundColor: "linear-gradient(103.24deg, rgba(0, 8, 29, 0.9) 73.83%, rgba(0, 8, 29, 0.3) 96.1%) !important",
      color: "white"}}>

        <div className='container-fluid' style={{background :"linear-gradient(103.24deg, rgba(0, 8, 29, 0.9) 85.83%, rgba(0, 8, 29, 0.3) 99.1%),url('https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/aeda5289-8647-4509-b537-5236f7852c43/PK-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg' )", width:"100%", minHeight:"100vh", color:"white", objectFit:"contain", objectPosition:"left bottom"}}>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
                <div className='cotainer-fluid  ' >
                    <div className='row'>
                        <div className='col-6'>
                                <img src={fData.image} height={"600px"}  width={"400px"} />
                        </div>
                        <div className='col-6 textargust'>
                                <div className='row rowname' ><h1>{fData.movname}</h1></div><br/>
                                <div className='row'><p><strong>NetFlix Rating: </strong>{fData.rating}</p></div><br/>
                                <div className='row'><strong><p>{fData.des}</p></strong></div><br/>
                                <button className='btn btn-warning px-5'>Download</button>&emsp;
                                <button className='btn btn-danger px-3' onClick={()=>navigate('/')}>Back to Home</button>
                                
                        </div>
                    </div>
                </div>
                </div>           
    </div>
  )
}

export default DetailPage
