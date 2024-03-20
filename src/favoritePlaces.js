
import service1 from './assets/img/service/services1.jpg';
import service2 from './assets/img/service/services2.jpg';
import service3 from './assets/img/service/services3.jpg';
import service4 from './assets/img/service/services4.jpg';
import service5 from './assets/img/service/services5.jpg';
import service6 from './assets/img/service/services6.jpg';
function FavouritePlaces(){
    return( <div style={{backgroundColor:'#e8ebf3'}} className="favourite-place place-padding">
    <div className="container">
     
        <div className="row">
            <div className="col-lg-12">
                <div className="section-tittle text-center">
                    <span>FEATURED TOURS Packages</span>
                    <h2>Favourite Places</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-place mb-30">
                    <div className="place-img">
                        
                        
                        <img src={service1} alt="service"/>
                    </div>
                    <div className="place-cap">
                        <div className="place-cap-top">
                            <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                            <h3><a href="#">The Dark Forest Adventure</a></h3>
                            <p className="dolor">$1870 <span>/ Per Person</span></p>
                        </div>
                        <div className="place-cap-bottom">
                            <ul>
                                <li><i className="far fa-clock"></i>3 Days</li>
                                <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-place mb-30">
                    <div className="place-img">
                        <img src={service2} alt=""/>
                    </div>
                    <div className="place-cap">
                        <div className="place-cap-top">
                            <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                            <h3><a href="#">The Dark Forest Adventure</a></h3>
                            <p className="dolor">$1870 <span>/ Per Person</span></p>
                        </div>
                        <div className="place-cap-bottom">
                            <ul>
                                <li><i className="far fa-clock"></i>3 Days</li>
                                <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-place mb-30">
                    <div className="place-img">
                        <img src={service3} alt=""/>
                    </div>
                    <div className="place-cap">
                        <div className="place-cap-top">
                            <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                            <h3><a href="#">The Dark Forest Adventure</a></h3>
                            <p className="dolor">$1870 <span>/ Per Person</span></p>
                        </div>
                        <div className="place-cap-bottom">
                            <ul>
                                <li><i className="far fa-clock"></i>3 Days</li>
                                <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-place mb-30">
                    <div className="place-img">
                        <img src={service4} alt=""/>
                    </div>
                    <div className="place-cap">
                        <div className="place-cap-top">
                            <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                            <h3><a href="#">The Dark Forest Adventure</a></h3>
                            <p className="dolor">$1870 <span>/ Per Person</span></p>
                        </div>
                        <div className="place-cap-bottom">
                            <ul>
                                <li><i className="far fa-clock"></i>3 Days</li>
                                <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-place mb-30">
                    <div className="place-img">
                        <img src={service5} alt=""/>
                    </div>
                    <div className="place-cap">
                        <div className="place-cap-top">
                            <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                            <h3><a href="#">The Dark Forest Adventure</a></h3>
                            <p className="dolor">$1870 <span>/ Per Person</span></p>
                        </div>
                        <div className="place-cap-bottom">
                            <ul>
                                <li><i className="far fa-clock"></i>3 Days</li>
                                <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-place mb-30">
                    <div className="place-img">
                        <img src={service6} alt=""/>
                    </div>
                    <div className="place-cap">
                        <div className="place-cap-top">
                            <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                            <h3><a href="#">The Dark Forest Adventure</a></h3>
                            <p className="dolor">$1870 <span>/ Per Person</span></p>
                        </div>
                        <div className="place-cap-bottom">
                            <ul>
                                <li><i className="far fa-clock"></i>3 Days</li>
                                <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}
export default FavouritePlaces;