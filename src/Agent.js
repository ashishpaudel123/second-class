export default function Agent(){
    return(
        <div className='agent'>
            <div className='container'>
                <div className='row'>
                    <p className="text-center"><span className="real page_heading">Professional</span> <span className="estate page_heading"> Agents</span></p>
                    <Card agent_name="Kushal Raj" profile_photo="pic-1.png"/>
                    <Card agent_name="Manoj Khadka" profile_photo="pic-2.png"/>
                    <Card agent_name="Arjun Devkota" profile_photo="pic-3.png"/>
                    <Card agent_name="Prakash Gautam" profile_photo="pic-4.png"/>
                    <Card agent_name="Manoj Khadka" profile_photo="pic-2.png"/>
                    <Card agent_name="Kushal Raj" profile_photo="pic-1.png"/>

                </div>
            </div>
        </div>

        
    );
}

function Card(props){
    return(
        <div className='col-12 col-sm-6 col-md-4 col-lg-4 mt-4'>
            <div className='card px-4 py-4 text-center contact-card'>
                <img src={props.profile_photo} className='img-fluid agent-photo' />
                <h4 className='mt-2 mb-0'>{props.agent_name}</h4>
                <small className='fs-5 tomato '>Agent</small>
                <div className='contact_parent'>
                    <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
                    <a href='#'><i class="fa-brands fa-x-twitter"></i></a>
                    <a href='#'><i class="fa-brands fa-instagram"></i></a>
                    <a href='#'><i class="fa-regular fa-envelope"></i></a>
                </div>
            </div>
        </div>
    );
}