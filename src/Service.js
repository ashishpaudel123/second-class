function Card(props){
    return(
            <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
                <div className="card service text-justify">
                    <img src={props.img} className="img-fluid" />
                    <p>{props.title}</p>
                    <small>{props.description}</small>
                    <button>Learn More</button>
                </div>
            </div> 
    );
}
export default function Service(){
    return(
        <div className='service-bg'>
            <div className='container'>
                <p className="text-center"><span className="real page_heading">Our</span> <span className="estate page_heading">Services</span></p>
                <div className="property_data">
                    <div className='row'>
                        <Card img="s-1.png" title="Buying Home" description="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing elit. Dicta Aliquam Quo Fugiat Autem Doloribus Fugit Laudantium Reiciendis Eos, Doloremque Repellendus."/>
                        <Card img="s-2.png" title="Renting Home" description="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing elit. Dicta Aliquam Quo Fugiat Autem Doloribus Fugit Laudantium Reiciendis Eos, Doloremque Repellendus."/>
                        <Card img="s-3.png" title="Selling Home" description="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing elit. Dicta Aliquam Quo Fugiat Autem Doloribus Fugit Laudantium Reiciendis Eos, Doloremque Repellendus."/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}