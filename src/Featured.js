export default function Featured(){
    return(
        <div className='featured-bg'>
            <div className='container'>
                <div className='row'>
                    <p className="text-center"><span className="estate page_heading">Featured</span> <span className="real page_heading"> Properties</span></p>
                    <Card 
                    img="bed.jpg"
                    posted_date="3 days ago"
                    purpose="Rent"
                    cost="$25,000/Mo"
                    property_name="Modern Aparments"
                    address="Koteshwor,Kathmandu,Nepal-10060"
                    area={3500}
                    bed={2}
                    bath={1}
                    />

                    <Card 
                    img="hall.jpg"
                    posted_date="1 days ago"
                    purpose="Rent"
                    cost="10,000/Mo"
                    property_name="Modern Aparments"
                    address="Baneshwor,Kathmandu,Nepal-10060"
                    area={4000}
                    bed={4}
                    bath={2}
                    />

                    <Card 
                    img="livingRoom.jpg"
                    posted_date="1 hrs ago"
                    purpose="Rent"
                    cost="$15,000/Mo"
                    property_name="Modern Aparments"
                    address="Baneshwor,Kathmandu,Nepal-10060"
                    area={5500}
                    bed={10}
                    bath={4}
                    />

                    <Card 
                    img="bed.jpg"
                    posted_date="3 days ago"
                    purpose="Rent"
                    cost="$25,000/Mo"
                    property_name="Modern Aparments"
                    address="Koteshwor,Kathmandu,Nepal-10060"
                    area={3500}
                    bed={2}
                    bath={1}
                    />

                    <Card 
                    img="hall.jpg"
                    posted_date="1 days ago"
                    purpose="Rent"
                    cost="10,000/Mo"
                    property_name="Modern Aparments"
                    address="Baneshwor,Kathmandu,Nepal-10060"
                    area={4000}
                    bed={4}
                    bath={2}
                    />

                    <Card 
                    img="livingRoom.jpg"
                    posted_date="1 hrs ago"
                    purpose="Rent"
                    cost="$15,000/Mo"
                    property_name="Modern Aparments"
                    address="Baneshwor,Kathmandu,Nepal-10060"
                    area={5500}
                    bed={10}
                    bath={4}
                    />

                    <Card 
                    img="bed.jpg"
                    posted_date="3 days ago"
                    purpose="Rent"
                    cost="$25,000/Mo"
                    property_name="Modern Aparments"
                    address="Koteshwor,Kathmandu,Nepal-10060"
                    area={3500}
                    bed={2}
                    bath={1}
                    />

                    <Card 
                    img="hall.jpg"
                    posted_date="1 days ago"
                    purpose="Rent"
                    cost="10,000/Mo"
                    property_name="Modern Aparments"
                    address="Baneshwor,Kathmandu,Nepal-10060"
                    area={4000}
                    bed={4}
                    bath={2}
                    />

                    <Card 
                    img="livingRoom.jpg"
                    posted_date="1 hrs ago"
                    purpose="Rent"
                    cost="$15,000/Mo"
                    property_name="Modern Aparments"
                    address="Baneshwor,Kathmandu,Nepal-10060"
                    area={5500}
                    bed={10}
                    bath={4}
                    />
                </div>
            </div>
        </div>
    );
}

function Card(props){
    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <div className="card mt-4">
                <div className='featured_img'>
                    <a href='#'><img src={props.img} className="img-fluid" /></a>
                    <div className='featured_elements'>
                        <div>
                            <span className='date'>{props.posted_date}</span>
                            <span className='purpose'>{props.purpose}</span>
                        </div>
                        
                    </div>
                </div>
                <div className='rent'>
                    <span>{props.cost}</span>
                    <div>
                        <a href="#"><i className="fa-solid fa-heart" id="heart"></i></a>
                        <a href="#"><i className="fa-solid fa-message" id="message"></i></a>
                        <a href="#"><i className="fa-solid fa-phone" id="phone"></i></a>
                    </div>
                </div>
                <a href='#'><h5 className='property-name'>{props.property_name}</h5></a>
                <small className='address'>{props.address}</small>
                <div className='property-data'>
                    <span><i className="fa-solid fa-expand"></i> {props.area}Sqft</span>
                    <span><i className="fa-solid fa-bed"></i> {props.bed}Beds</span>
                    <span><i className="fa-solid fa-bath"></i> {props.bath}Baths</span>
                </div>
                <div className='row request-view'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 p-1'>
                    <button className="w-100">Request Info</button>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 p-1'>
                    <button className="w-100">View Details</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}