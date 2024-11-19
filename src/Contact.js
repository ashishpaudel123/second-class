export default function Contact(){
    return(
        <div className='contact-bg'>
        <div className='container'>
            <div className='row'>
            <p className="text-center"><span className="estate page_heading">Contact</span> <span className="real page_heading"> Us</span></p>
            <Card 
            image="phone.png"
            contact_via="Phone Number" 
            contact_info="+977 9848232145"
            />

            <Card 
            image="msg.png"
            contact_via="Email Address" 
            contact_info="realestate@gmail.com"
            />

            <Card 
            image="location.png"
            contact_via="Office Address" 
            contact_info="Koteshwor,Kathmandu,Nepal-10060"
            />
            </div>
            <div className='message'>
                <div className='row'>
                    <div className='col-8'>
                    <Form />
                    </div>
                    <div className='col-4'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.927050714861!2d85.3295185858164!3d27.694684219032315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1730872815004!5m2!1sen!2snp" className='w-100 h-100' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

function Card(props){
    return(
        <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
            <div className='card text-center py-4 mb-5'>
                <img src={props.image} className='img-fluid contact-img' width={50} />
                <h4 className='mt-3 '>{props.contact_via}</h4>
                <small>{props.contact_info}</small>
            </div>
        </div>
    );
}

function Form(props){
    return(
        <>
        <form className='contact'>
        <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                <input type='text' placeholder='name' className='form-control'></input>
                <input type='email' placeholder='email'className='form-control'></input>
                </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                <input type='text' placeholder='subject' className='form-control'></input>
                <input type='text' placeholder='number' className='form-control'></input><br></br>
            </div>
            </div>
            <div className='row'>
            <div className="col">
            <textarea name="message" rows={5} className='form-control'>Enter your message here...</textarea>
            </div>
            </div>
            <br />
            <span><button type="submit" className='border-0 px-4 py-1 mt-3 '>Send Message</button></span>
        </form>
        </>
    );
}