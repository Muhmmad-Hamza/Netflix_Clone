import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import MoviesData from '../data/Data';


const Card = ({abc}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(MoviesData);

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the data based on the search query
    const filtered = MoviesData.filter(item =>
      item.movname.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

 


  return (
    <div>
      <br/>
        <input
        type="text"
        placeholder=" Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className='searchsetting'
      />
        <div className='container'>
                <div className='row'>

                {
                filteredData.map((sprod) =>{

                    
                return(
                            <div className='col-lg-3 col-md-6 col-12 my-1 p-2  cardback ' >
                    <div className="card" style={{width: "17rem", height: "25vh",boxShadow: "0 8px 8px 0 lightblue"}}>
                        <Link to={`/main/${sprod.id}`}>   <img src={sprod.image} style={{width: "17rem", height: "25vh",padding:"15px",objectFit:"contain", objectPosition:"center"}} className="card-img-top" alt="..." />  </Link>
                            
                        </div>
                    </div>
                )
                })
            }  


                </div>
            </div>
    </div>
  )
}

export default Card
