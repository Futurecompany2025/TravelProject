
function Headerbar(){
    return(
<div className="header-area">
<div className="main-header ">
    <div className="header-top top-bg d-none d-lg-block">
       <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-lg-8">
                <div className="header-info-left">
                    <ul>  
                    <li><i class="fa fa-phone" aria-hidden="true"></i>+9779865461367</li>                        
                        <li><i class="fa fa-envelope" aria-hidden="true"></i>j1trek@gmail.com</li>
                        <li><i class="fa fa-envelope" aria-hidden="true"></i></li>
                        <button style={{backgroundColor:'var(--secondary-color)', borderRadius:'25px', padding: '11px 19px', fontFamily: 'Mukta', fontSize: '17px', height: '43px', border: 'none', outline: 'none', color: 'white', textAlign: 'center', display: 'inline-block', boxSizing: 'border-box'}}>Make enquiry</button>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="header-info-right f-right">
                    <ul className="header-social">    
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                       <li> <a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                </div>
            </div>
           </div>
       </div>
    </div >
   <div className="header-bottom  header-sticky">
        <div className="container">
            <div className="row align-items-center">
                {/* <!-- Logo --> */}
                <div className="col-xl-2 col-lg-2 col-md-1">
                </div>
                {/* <!-- Mobile Menu --> */}
                <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                </div>
            </div>
        </div>
   </div>
</div>
</div>)
}

export default Headerbar;