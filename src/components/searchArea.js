import './searchArea.css';
function SearchArea(){
    return(
        <div className="slider-area ">   
<div className="slider-active">
<div className="single-slider hero-overly slider-height d-flex align-items-center" id ='searchArea'>   
    <div className="container">
        <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-9">
                <div className="hero__caption">
                    <h1>Welcome to j1 Trekking<span></span> </h1>
                    <p>Where would you like to go?</p>
                </div>
            </div>
        </div>
        {/* <!-- Search Box --> */}
        <div className="row">
            <div className="col-xl-12">
                <form action="#" className="search-box">
                    <div className="input-form mb-30 ml-10 mr-0 pr-0 pl-0">
                        <input type="text" placeholder="Type your keywords ?"/>
                    </div>
                    <div className="search-form mb-30 mr-50 pl-0 ml-55 ">
                        <a href="#">Search</a>
                    </div>	
                    {/* <div className="select-form mb-30">
                        <div className="select-itms">
                            <select name="select" id="select1">
                                <option value="">When</option>
                                <option value="">Services-1</option>
                                <option value="">Services-2</option>
                                <option value="">Services-3</option>
                            </select>
                        </div>
                    </div> */}
                </form>	
            </div>
        </div>
    </div>
</div>
</div>
</div>)
}
export default SearchArea;


