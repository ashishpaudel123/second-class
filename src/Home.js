export default function Home(props){
    return(
        <>
            <div className="home-bg">
                <form>
                    <div className="form_box">
                        <div className='home'>
                        <h2 className='home-title'>Find Your Perfect Home</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-2">
                                <button className='for'>For Sale</button>
                                <div>
                                <input type='text' placeholder='Neighborhood' className='form-control' />
                            </div>
                            <div>
                                <input type='text' placeholder='City' />
                            </div>
                            <div>
                                <select name="minimum-price" id="min">
                                    <option value="minimum_price">Minimum Price</option>
                                    <option value="$10,000">$10,000</option>
                                    <option value="$20,000">$15,000</option>
                                    <option value="$30,000">$20,000</option>
                                    <option value="$50,000">$25,000</option>
                                </select>
                            </div>
                            <div>
                                <select name="maximum_price" id="max">
                                    <option value="minimum_price">Minimum Price</option>
                                    <option value="$30,000">$30,000</option>
                                    <option value="$40,000">$40,000</option>
                                    <option value="$50,000">$50,000</option>
                                    <option value="$60,000">$60,000</option>
                                </select>
                            </div>
                            <div>
                                <select name="property_status" id="status">
                                    <option value="status">Property Status</option>
                                    <option value="Ready To Move">Ready To Move</option>
                                    <option value="Under Construction">Under Construction</option>
                                    <option value="Furnished">Furnished</option>
                                    <option value="Semi Furnished">Semi Furnished</option>
                                    <option value="Unfurnished">Unfurnished</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-2">
                                <button className='for'>For Rent</button>
                                <div>
                                    <select name="property_type" id="type">
                                        <option value="minimum_price">Property Type</option>
                                        <option value="flat">Flat</option>
                                        <option value="house">House</option>
                                        <option value="shop">Shop</option>
                                        <option value="warehouse">Warehouse</option>
                                        <option value="Land">Land</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="bhk" id="bhk">
                                        <option value="BHK">BHK</option>
                                        <option value="1BHK">1BHK</option>
                                        <option value="2BHK">2BHK</option>
                                        <option value="3BHK">3BHK</option>
                                        <option value="4BHK">4BHK</option>
                                        <option value="5BHK">5BHK</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="aminities" id="aminities">
                                        <option value="aminities">Aminities</option>
                                        <option value="parking_space">Parking space</option>
                                        <option value="swimming_pool">Swimming Pool</option>
                                        <option value="playground">Playground</option>
                                        <option value="security">Security</option>
                                        <option value="all">All</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="bedroom" id="bedroom">
                                        <option value="bedroom">Bedroom</option>
                                        <option value="1 bedroom">1 Bedroom</option>
                                        <option value="2 bedroom">2 Bedroom</option>
                                        <option value="3 bedroom">3 Bedroom</option>
                                        <option value="4 edroom">4 Bedroom</option>
                                        <option value="5 edroom">5 Bedroom</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="bathroom" id="bathroom">
                                        <option value="bathroom">Bathroom</option>
                                        <option value="bathroom">1 Bathroom</option>
                                        <option value="bathroom">2 Bathroom</option>
                                        <option value="bathroom">3 Bathroom</option>
                                        <option value="bathroom">4 Bathroom</option>
                                        <option value="bathroom">5 Bathroom</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                            <div className='col'>
                                <button type="submit" className='search'>Search Property </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}