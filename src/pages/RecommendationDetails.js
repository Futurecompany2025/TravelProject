import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Headerbar from '../components/Headbar';
import Footer from '../components/footer';
import RecommendationTitle from '../DetailsComponent/RecommendationTitle';
import DetailsSection from '../DetailsComponent/detailssection';
import './RecommendationDetails.css'; // Make sure to import the CSS file
import { AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Flight, Grade, Hotel, DateRange } from '@mui/icons-material';
import Hero1 from '../assets/img/hero/1.jpg';
import Hero2 from '../assets/img/hero/2.webp';
import Hero3 from '../assets/img/hero/3.jpg';
import Hero4 from '../assets/img/hero/4.jpg';
import Hero5 from '../assets/img/hero/5.jpg';
import Hero6 from '../assets/img/hero/6.jpg';
const recommendationDetails = {
  'three-high-passes-trek': {
    title: 'Everest Three High Passes Trek',
    backgroundImage: Hero1,
    overview: 'Ultra-luxury trek to Everest Base Camp...',
    bookingInfo: {
      title: 'Three High Passes Trek',
      price: 'USD 1200',
      tripadvisor: 'TripAdvisor',
      nepalPhone: '+977 9841666232',
      usaPhone: '+1 651-703-8181',
      ukPhone: '+44 7946748780'
    
  },
    itinerary: [
      'Day 1: Arrival in Kathmandu (1,300m/4,264ft)',
      'Day 2: Kathmandu Valley sightseeing tour and trek preparation (1,300m/4,264ft)',
      'Day 3: Drive from Kathmandu to Pokhara (820m/2,690ft) 6-7 hour',
      'Day 4: Drive to Nayapul (2 hours) and trek to Tikhedhunga (1,480m/4,855ft) 4-5 hour',
      'Day 5: Trek from Tikhedhunga to Ghorepani (2,860m/9,383ft) 6-7 hour',
      'Day 6: Hike to Poon Hill and trek to Tadapani (2,630m/8,628ft) 5-6 hour',
      'Day 7: Trek from Tadapani to Jhinudanda (1,780m/5,839ft) 5-6 hour',
      'Day 8: Trek from Jhinudanda to Landruk (1,565m/5,134ft) 3-4 hours',
      'Day 9: Trek from Landruk to Pothana (1,890m/6,200ft) 3 hour',
      'Day 10: Trek from Pothana to Phedi and drive to Pokhara (820m/2,690ft) 3 hour',
      'Day 11: Drive from Pokhara to Kathmandu (1,300m/4,264ft) 6-7 hour',
      'Day 12: Departure day'
    ],
    includes: 'Sample includes description...',
    costDates: 'Sample cost and dates description...',
    usefulInfo: 'Sample useful info description...',
    gallery: 'Sample gallery description...',
    reviews: 'Sample reviews description...',
    faqs: 'Sample FAQs description...',
    price: 'USD 2395',
    meal: 'Breakfast in Kathmandu & Full meals on trek',
    startEndPoints: 'Kathmandu/Kathmandu',
    transportation: 'Flight and Private Transport',
    accommodations: 'Hotel and Lodge',
    activity: '6-7 hours walking',
    maxAltitude: '(3,942m/12,933ft)',
    distance: '102 KM/63.3 Miles',
    tripGrade: 'Moderate',
    bestTime: 'March to June & September to November'
  },

  'everest-base-camp-trek': {
    title: 'Everest Base Camp Trek',
    backgroundImage: Hero2,
    price: 'USD 1390',
    overview: 'In today time, most people have already realized the Everest base camp Trek is the most iconic trek in the world. It is an adventure that lets you walk through the base camp of the world\'s highest Mountain Everest along rich Sherpa heritages and natural heritages on the way. Undoubtedly on this trip, you will enjoy the views of the 8000-meter summits which include the astonishing Mount Lhotse, Makalu, Ama Dablam, Cho-Oyu, Nuptse, Thamserku, and many more.',
    itinerary: 'Itinerary for Everest Base Camp Trek...',
    includes: 'Includes for Everest Base Camp Trek...',
    costDates: 'Cost & Dates for Everest Base Camp Trek...',
    usefulInfo: 'Useful Info for Everest Base Camp Trek...',
    gallery: 'Gallery for Everest Base Camp Trek...',
    reviews: 'Reviews for Everest Base Camp Trek...',
    faqs: 'FAQs for Everest Base Camp Trek...',
    bookingInfo: {
      title: ' Everest Base Camp Trek',
      price: 'USD 1200',
      tripadvisor: 'TripAdvisor',
      nepalPhone: '+977 9841666232',
      usaPhone: '+1 651-703-8181',
      ukPhone: '+44 7946748780'
    
  },
  },
  'annapurna-panorama-trek': {
    title: 'Annapurna Panorama Trek',
    backgroundImage: Hero3,
    price: 'USD 1040',
    overview: 'The Annapurna Panorama Trek is a short yet immensely rewarding trek that offers stunning views of the Annapurna range. This trek is perfect for those who want to experience the beauty of the Himalayas without the strenuous efforts required for longer treks. You will pass through beautiful rhododendron forests, quaint Gurung villages, and enjoy panoramic views of Annapurna South, Machapuchare, and Dhaulagiri.',
    itinerary: 'Itinerary for Annapurna Panorama Trek...',
    includes: 'Includes for Annapurna Panorama Trek...',
    costDates: 'Cost & Dates for Annapurna Panorama Trek...',
    usefulInfo: 'Useful Info for Annapurna Panorama Trek...',
    gallery: 'Gallery for Annapurna Panorama Trek...',
    reviews: 'Reviews for Annapurna Panorama Trek...',
    faqs: 'FAQs for Annapurna Panorama Trek...',
    bookingInfo: {
      title: 'Annapurna Panorama Trek',
      price: 'USD 1200',
      tripadvisor: 'TripAdvisor',
      nepalPhone: '+977 9841666232',
      usaPhone: '+1 651-703-8181',
      ukPhone: '+44 7946748780'
    
  },
  },
  'ultra-luxury-trek-to-everest-base-camp': {
    title: 'Ultra-Luxury Trek to Everest Base Camp',
    backgroundImage: Hero4,
    price: 'USD 5220',
    overview: 'Experience the grandeur of the Himalayas with the finest luxuries on this Ultra-Luxury Trek to Everest Base Camp. This trek offers top-notch accommodations, gourmet meals, and personalized services, ensuring you experience the beauty of Everest in the most comfortable way possible. Despite the luxury, this trek still requires a good level of fitness and preparation for high-altitude trekking.',
    itinerary: 'Itinerary for Ultra-Luxury Trek to Everest Base Camp...',
    includes: 'Includes for Ultra-Luxury Trek to Everest Base Camp...',
    costDates: 'Cost & Dates for Ultra-Luxury Trek to Everest Base Camp...',
    usefulInfo: 'Useful Info for Ultra-Luxury Trek to Everest Base Camp...',
    gallery: 'Gallery for Ultra-Luxury Trek to Everest Base Camp...',
    reviews: 'Reviews for Ultra-Luxury Trek to Everest Base Camp...',
    faqs: 'FAQs for Ultra-Luxury Trek to Everest Base Camp...',
    bookingInfo: {
      title: 'Ultra-Luxury Trek to Everest Base Camp',
      price: 'USD 1200',
      tripadvisor: 'TripAdvisor',
      nepalPhone: '+977 9841666232',
      usaPhone: '+1 651-703-8181',
      ukPhone: '+44 7946748780'
    
  },
  },
  'upper-mustang-trek': {
    title: 'Upper Mustang Trek',
    backgroundImage: Hero5,
    price: 'USD 2395',
    overview: 'The Upper Mustang Trek is a journey into the remote Trans-Himalayan region of Nepal, offering a unique opportunity to experience the lifestyle and culture of the Tibetan-like people. This trek takes you through the stark desert landscape, ancient monasteries, and the walled city of Lo Manthang, providing a glimpse into the mystical world of Mustang.',
    itinerary: 'Itinerary for Upper Mustang Trek...',
    includes: 'Includes for Upper Mustang Trek...',
    costDates: 'Cost & Dates for Upper Mustang Trek...',
    usefulInfo: 'Useful Info for Upper Mustang Trek...',
    gallery: 'Gallery for Upper Mustang Trek...',
    reviews: 'Reviews for Upper Mustang Trek...',
    faqs: 'FAQs for Upper Mustang Trek...',
    bookingInfo: {
      title: 'Upper Mustang Trek',
      price: 'USD 1200',
      tripadvisor: 'TripAdvisor',
      nepalPhone: '+977 9841666232',
      usaPhone: '+1 651-703-8181',
      ukPhone: '+44 7946748780'
    
  },
  },
  'everest-base-camp-trek-with-gokyo-lake': {
    title: 'Everest Base Camp Trek with Gokyo Lake & Cho la pass',
    backgroundImage: Hero6,
    price: 'USD 1730',
    overview: 'The Everest Base Camp Trek with Gokyo Lake and Cho La Pass offers a thrilling experience, combining the classic trek to Everest Base Camp with the stunning Gokyo Valley. This trek provides breathtaking views of the turquoise Gokyo Lakes, the massive Ngozumpa Glacier, and a challenging crossing of the Cho La Pass. It is perfect for trekkers looking for an adventurous and diverse route in the Everest region.',
    itinerary: 'Itinerary for Everest Base Camp Trek with Gokyo Lake...',
    includes: 'Includes for Everest Base Camp Trek with Gokyo Lake...',
    costDates: 'Cost & Dates for Everest Base Camp Trek with Gokyo Lake...',
    usefulInfo: 'Useful Info for Everest Base Camp Trek with Gokyo Lake...',
    gallery: 'Gallery for Everest Base Camp Trek with Gokyo Lake...',
    reviews: 'Reviews for Everest Base Camp Trek with Gokyo Lake...',
    faqs: 'FAQs for Everest Base Camp Trek with Gokyo Lake...',
    bookingInfo: {
      title: 'Everest Base Camp Trek with Gokyo Lake and Cho La Pass',
      price: 'USD 1200',
      nepalPhone: '+977 9841666232',
      usaPhone: '+1 651-703-8181',
      ukPhone: '+44 7946748780'
    
  },
  }
};
  // Other recommendations...
const RecommendationDetails = () => {
  const { slug } = useParams();
  const recommendation = recommendationDetails[slug];
  if (!recommendation) {
    return <div>Recommendation not found</div>;
  }

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div>
        <RecommendationTitle title={recommendation.title} backgroundImage={recommendation.backgroundImage} />
        <div className="recommendation-details">
          <div className="recommendation-column">
            <div className="recommendation-item">
              <AttachMoney />
              <span>Price starts from</span>
              <span>{recommendation.price}</span>
            </div>
            <div className="recommendation-item">
              <DirectionsWalk />
              <span>Activity:</span>
              <span>{recommendation.activity}</span>
            </div>
          </div>
          <div className="recommendation-column">
            <div className="recommendation-item">
              <CalendarToday />
              <span>Meal:</span>
              <span>{recommendation.meal}</span>
            </div>
            <div className="recommendation-item">
              <Height />
              <span>Max Altitude:</span>
              <span>{recommendation.maxAltitude}</span>
            </div>
          </div>
          <div className="recommendation-column">
            <div className="recommendation-item">
              <LocationOn />
              <span>Start & End Point:</span>
              <span>{recommendation.startEndPoints}</span>
            </div>
            <div className="recommendation-item">
              <LocationOn />
              <span>Distance:</span>
              <span>{recommendation.distance}</span>
            </div>
          </div>
          <div className="recommendation-column">
            <div className="recommendation-item">
              <Flight />
              <span>Transportation:</span>
              <span>{recommendation.transportation}</span>
            </div>
            <div className="recommendation-item">
              <Grade />
              <span>Trip Grade:</span>
              <span>{recommendation.tripGrade}</span>
            </div>
          </div>
          <div className="recommendation-column">
            <div className="recommendation-item">
              <Hotel />
              <span>Accommodations:</span>
              <span>{recommendation.accommodations}</span>
            </div>
            <div className="recommendation-item">
              <DateRange />
              <span>Best Time:</span>
              <span>{recommendation.bestTime}</span>
            </div>
          </div>
        </div>
        <div className="details-scroll-box">
          <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
          <div className="scroll-box-title" onClick={() => scrollToSection('itinerary')}>Itinerary</div>
          <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
          <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
          <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
          <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
          <div className="scroll-box-title" onClick={() => scrollToSection('faqs')}>FAQs</div>
        </div>
        {recommendation.bookingInfo && (
         <div className="booking-info-box">
         <h2>{recommendation.bookingInfo.title}</h2>
         <p>Price starts from <span className="tour-price">{recommendation.bookingInfo.price}</span></p>
         <button className="book-now-btn">Book Now</button>
         <button className="make-inquiry-btn">Make Inquiry</button>
         <div className="tripadvisor-box">
         </div>
         <div className="contact-box">
           <h3>Speak to Expert</h3>
           <p><span role="img" aria-label="Nepal">🇳🇵</span> Nepal: {recommendation.bookingInfo.nepalPhone}</p>
           <p><span role="img" aria-label="USA">🇺🇸</span> USA: {recommendation.bookingInfo.usaPhone}</p>
           <p><span role="img" aria-label="UK">🇬🇧</span> UK: {recommendation.bookingInfo.ukPhone}</p>
         </div>
       </div>
     )}
        <DetailsSection
        
  overviewId="overview"
  overview={recommendation.overview}
  itineraryId="itinerary"
  itinerary={recommendation.itinerary}
  includesId="includes"
  includes={recommendation.includes}
  costDatesId="cost-dates"
  costDates={recommendation.costDates}
  usefulInfoId="useful-info"
  usefulInfo={recommendation.usefulInfo}
  galleryId="gallery"
  gallery={recommendation.gallery}
  faqsId="faqs"
  faqs={recommendation.faqs}
/>
        <Footer />
      </div>
    </div>
  );
};
export default RecommendationDetails;