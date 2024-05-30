import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Headerbar from '../components/Headbar';
import Footer from '../components/footer'; 
import RecommendationTitle from '../DetailsComponent/RecommendationTitle';
import DetailsSection from '../DetailsComponent/detailssection';
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
    price: 'USD 1790',
    meal: 'Breakfast in Kathmandu & Full meals on a trek',
    startEndPoints: 'Kathmandu/Kathmandu',
    transportation: 'Flight and Private Transport',
    accommodations: 'Hotel and Lodge',
    activity: '6-7 hours walking each day',
    maxAltitude: '5,550mt/18208ft',
    distance: '166 KM/130 Miles',
    tripGrade: 'Challenging',
    bestTime: 'March to May & September to November',
    overview: 'Ultra-luxury trek to Everest Base Camp offers a more comfortable and indulgent experience compared to traditional treks. While the trek itself is challenging and takes you through some of the most breathtaking landscapes in the world, luxury treks aim to provide high-end accommodations, personalized services, and additional amenities to make the journey more enjoyable. We do provide more comfortable beds, private bathrooms with hot showers, and other amenities to ensure a more pleasant experience. On this luxury trek to Everest Base Camp, you will have private guides and porters who are dedicated to you. It allows for a more personalized experience, and the guides can cater to your specific interests and preferences. It\'s important to note that while a luxury trek to Everest Base Camp offers enhanced comfort, the physical challenges of the trek remain, and participants should still be prepared for high-altitude conditions and variable weather. Trek Ways Nepal offers a full board package which is worry-free package with the best possible accommodation. Come and enjoy the Himalayas with our warmest hospitality.',
    itinerary: 'Sample itinerary description...',
    includes: 'Sample includes description...',
    costDates: 'Sample cost and dates description...',
    usefulInfo: 'Sample useful info description...',
    gallery: 'Sample gallery description...',
    reviews: 'Sample reviews description...',
    faqs: 'Sample FAQs description...'
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
    faqs: 'FAQs for Everest Base Camp Trek...'
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
    faqs: 'FAQs for Annapurna Panorama Trek...'
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
    faqs: 'FAQs for Ultra-Luxury Trek to Everest Base Camp...'
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
    faqs: 'FAQs for Upper Mustang Trek...'
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
    faqs: 'FAQs for Everest Base Camp Trek with Gokyo Lake...'
  }
};

const RecommendationDetails = () => {
  const { slug } = useParams();
  const recommendation = recommendationDetails[slug];

  if (!recommendation) {
    return <div>Recommendation not found</div>;
  }

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div>
        <RecommendationTitle title={recommendation.title} backgroundImage={recommendation.backgroundImage} />
        <DetailsSection
          price={recommendation.price}
          meal={recommendation.meal}
          startEndPoints={recommendation.startEndPoints}
          transportation={recommendation.transportation}
          accommodations={recommendation.accommodations}
          activity={recommendation.activity}
          maxAltitude={recommendation.maxAltitude}
          distance={recommendation.distance}
          tripGrade={recommendation.tripGrade}
          bestTime={recommendation.bestTime}
          overview={recommendation.overview}
          itinerary={recommendation.itinerary}
          includes={recommendation.includes}
          costDates={recommendation.costDates}
          usefulInfo={recommendation.usefulInfo}
          gallery={recommendation.gallery}
          reviews={recommendation.reviews}
          faqs={recommendation.faqs}
        />
        <Footer />
        {/* Add more sections or components here */}
      </div>
    </div>
  );
};
export default RecommendationDetails;
