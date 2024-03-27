import service1 from '../assets/img/service/services1.jpg';
import service2 from '../assets/img/service/services2.jpg';
import service3 from '../assets/img/service/services3.jpg';
function Destinations(){
    return(
        <div style={{backgroundColor:'#e8ebf3'}} className="favourite-place place-padding">
        <div className="container">
         
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-tittle text-center">
                        <span>FEATURED Places</span>
                        <h2>Our Destinations</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div  className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-place mb-70">
                        <div className="place-img">
                            
                            
                            <img style={{ height: '450px', borderRadius:'25px 25px 25px 25px' }} src={service1} alt="service"/>
                        </div>
                      
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-place mb-30">
                        <div className="place-img position-relative" >
                        <img style={{ height: '450px', borderRadius:'25px 25px 25px 25px' }} src={service2} alt="service"/>
                        <div style={{position:'absolute', top:'78%',}}>
    <h3 style={{color:'white', fontSize:'3em',  fontWeight:'500'}}> Nepal</h3>
</div>
<div style={{position:'absolute', top:'90%',}}>
    <h4 style={{color:'white', fontWeight:'500'}}> Explore the Nepal</h4>
</div>
                        </div>
                      
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-place mb-30">
                        <div className="place-img position-relative">
                        <img style={{ height: '450px', borderRadius:'25px 25px 25px 25px' }} src={service3} alt="service"/>

                        </div>
                      
                    </div>
                </div>

                
                {/* <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-place mb-30">
                        <div className="place-img">
                        <img style={{ height: '450px', borderRadius:'25px 25px 25px 25px' }} src={service4} alt="service"/>
                        </div>
                 
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-place mb-30">
                        <div className="place-img">
                        <img style={{ height: '450px', borderRadius:'25px 25px 25px 25px' }} src={service5} alt="service"/>
                        </div>
                 
                    </div>
                </div> */}
                {/* <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-place mb-30">
                        <div className="place-img">
                        <img style={{ height: '450px', borderRadius:'25px 25px 25px 25px' }} src={service6} alt="service"/>      <img src={service6} alt=""/>
                        </div>
                    
                    </div>
                </div> */}
            </div>
        </div>
    </div>

    )
}
export default Destinations;