export default function Footer(){
    return(
        <footer>
            <div className='footer-bg'>
                <div className='container space-between card py-4'>
                    <div className="row">
                    <Address />
                    <QuickLinks />
                    <ExtraLinks />
                    <FollowUs />
                    </div>
                </div>
            </div>
            <div className='container'>
                <CopyRight />
            </div>
    </footer>
    );
}

function Address(){
    return(
        <div className='col-sm-3'>
            <ul>
            <p className='footer-title'>Branch Location</p>
                <li>Nepal</li>
                <li>India</li>
                <li>China</li>
                <li>Korea</li>
                <li>Canada</li>
            </ul>
        </div>
    );
}
function QuickLinks(){
    return(
        <div className='col-sm-3'>
            <ul>
            <p className='footer-title'>Quick Links</p>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Featured</a></li>
                <li><a href='#'>Agents</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
    );
}

function ExtraLinks(){
    return(
        <div className='col-sm-3'>
            <ul>
            <p className='footer-title'>Extra Links</p>
                <li><a href='#'>My Favourite</a></li>
                <li><a href='#'>My Bookings</a></li>
                <li><a href='#'>My Account</a></li>
            </ul>
        </div>
    );
}
function FollowUs(){
    return(
        <div className='col-sm-3'>
            <ul>
            <p className='footer-title'>Follow Us</p>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>Twitter</a></li>
            <li><a href='#'>Instagram</a></li>
            <li><a href='#'>Linkedin</a></li>
            </ul>
            
        </div>
    );
}
function CopyRight(){
    return(
        <p className='copyright'>Created by <b>Ashish Paudel</b>| All Rights Reserved</p>
    );
}