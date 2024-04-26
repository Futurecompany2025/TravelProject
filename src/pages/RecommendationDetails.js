import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Headerbar from '../components/header';
import RecommendationTitle from '../DetailsComponent/RecommendationTitle';
import DetailsSection from '../DetailsComponent/detailssection';
import Itinerary from '../DetailsComponent/Itinerary'; 
import Overview from '../DetailsComponent/Overview'; 
import Include from '../DetailsComponent/Include';
import CostAndDates from '../DetailsComponent/CostAndDates';
import UsefulInfoMap from '../DetailsComponent/UsefulInfoMap';
import Gallery from '../DetailsComponent/Gallery';
import Reviews from '../DetailsComponent/Reviews';
import FAQs from '../DetailsComponent/FAQs';
import Hero1 from '../assets/img/hero/1.jpg';
import Hero2 from '../assets/img/hero/2.webp';
import Hero3 from '../assets/img/hero/3.jpg';
import Hero4 from '../assets/img/hero/4.jpg';
import Hero5 from '../assets/img/hero/5.jpg';
import Hero6 from '../assets/img/hero/6.jpg';

const RecommendationDetails = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { slug } = useParams();
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
      Overview: 'To be more specific, the Everest region of Nepal offers a challenging and thrilling trekking experience on the Everest Three High Passes Trek. As the name suggests, you will cross three challenging mountains on this Everest 3 high passes trek: Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m). These passes offer spectacular views of the Himalayas, especially when viewed from different angles on this tour.',
      includeData: [
        {
          title: 'Arrival and Departure Transfer Service',
          description: 'Transfer service from the airport for arrival and departure.'
        },
        {
          title: '3 nights accommodation in Kathmandu',
          description: '3 nights accommodation in Kathmandu with breakfast (at 3-Star Standard Hotel) on a twin-sharing basis.'
        },
        {
          title: 'Airport transfer for domestic flights (Ramechap transfer from October to November and April to May)',
          description: 'Airport transfer for domestic flights (Ramechap transfer from October to November and April to May).'
        },
        {
          title: 'Flight tickets to and from Lukla',
          description: 'Flight tickets to and from Lukla.'
        },
        // Add more items similarly
      ],
      itineraryData: [
        {
          day: 1,
          destination: "Arrival in Kathmandu (1,300m/4,264ft)",
          description: "Upon your arrival at Tribhuvan International Airport in Kathmandu, you will be greeted by our representative and transferred to your hotel. Take the rest of the day to relax and acclimatize to the city's atmosphere.",
        },
        {
          day: 2,
          destination: "Fly from Kathmandu to Lukla & trek to Phakding (2,800m/9,187ft)",
          description: "Early in the morning, you will take a scenic flight from Kathmandu to Lukla, the gateway to the Everest region. From Lukla, you will start your trek to Phakding, a small village situated along the Dudh Koshi River. Enjoy the breathtaking views of the Himalayas and immerse yourself in the serene surroundings.",
        },
      ]
    },
    'everest-base-camp-trek': {
      title: 'Everest Base Camp Trek',
      backgroundImage: Hero2,
      price: 'USD 1390',
      meal: 'Breakfast in Kathmandu & Full meals on a trek',
      startEndPoints: 'Kathmandu/Kathmandu',
      transportation: 'Flight and Private Transport',
      accommodations: 'Hotel and Lodge',
      activity: '6-7 hours walking each day',
      maxAltitude: '5,550mt/18208ft',
      distance: '166 KM/130 Miles',
      tripGrade: 'Challenging',
      bestTime: 'March to May & September to November',
      Overview: 'This is the overview of Everest Three High Passes Trek.',
      includeData: [
        {
          title: 'Arrival and Departure Transfer Service',
          description: 'Transfer service from the airport for arrival and departure.'
        },
        {
          title: 'Accommodation in Kathmandu',
          description: '3 nights accommodation in Kathmandu with breakfast (at 3-Star Standard Hotel) on a twin-sharing basis.'
        },
        // Add more items similarly
      ],
      itineraryData: [
        {
          day: 1,
          destination: "Arrival in Kathmandu (1,300m/4,264ft)",
          description: "Upon your arrival at Tribhuvan International Airport in Kathmandu, you will be greeted by our representative and transferred to your hotel. Take the rest of the day to relax and acclimatize to the city's atmosphere.",
        },
        {
          day: 2,
          destination: "Fly from Kathmandu to Lukla & trek to Phakding (2,800m/9,187ft)",
          description: "Early in the morning, you will take a scenic flight from Kathmandu to Lukla, the gateway to the Everest region. From Lukla, you will start your trek to Phakding, a small village situated along the Dudh Koshi River. Enjoy the breathtaking views of the Himalayas and immerse yourself in the serene surroundings.",
        },
      ]
    },
    'annapurna-panorama-trek': {
      title: 'Annapurna Panorama Trek',
      backgroundImage: Hero3,
      duration: '12 Days',
      price: 'USD 1040',
      meal: 'Breakfast in Kathmandu & Full meals on a trek',
      startEndPoints: 'Kathmandu/Kathmandu',
      transportation: 'Flight and Private Transport',
      accommodations: 'Hotel and Lodge',
      activity: '6-7 hours walking each day',
      maxAltitude: '5,550mt/18208ft',
      distance: '166 KM/130 Miles',
      tripGrade: 'Challenging',
      bestTime: 'March to May & September to November', // Added comma here
      Overview: 'This is the overview of Annapurna Panorama Trek.',
      itineraryData: [
        // Add itinerary data for Annapurna Panorama Trek
      ]
    },
    'ultra-luxury-trek-to-everest-base-camp': {
      title: 'Ultra-Luxury Trek to Everest Base Camp',
      backgroundImage: Hero4,
      duration: '13 Days',
      price: 'USD 5220',
      meal: 'Breakfast in Kathmandu & Full meals on a trek',
      startEndPoints: 'Kathmandu/Kathmandu',
      transportation: 'Flight and Private Transport',
      accommodations: 'Hotel and Lodge',
      activity: '6-7 hours walking each day',
      maxAltitude: '5,550mt/18208ft',
      distance: '166 KM/130 Miles',
      tripGrade: 'Challenging',
      bestTime: 'March to May & September to November', // Added comma here
      Overview: 'This is the overview of Ultra-Luxury Trek to Everest Base Camp.',
      itineraryData: [
        // Add itinerary data for Ultra-Luxury Trek to Everest Base Camp
      ]
    },
    // Add more recommendation details similarly
  };

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
        />
     <div style={{ display: "flex", justifyContent: "space-between", overflowX: "auto" }}>
  <div style={{ fontSize: "15px", padding: "5px 8px", margin: "0 0px" }} onClick={() => scrollToSection("overview")}>Overview</div>
  <div style={{ fontSize: "15px", padding: "5px 8px", margin: "0 0px" }} onClick={() => scrollToSection("itinerary")}>Itinerary</div>
  <div style={{ fontSize: "15px", padding: "5px 8px", margin: "0 0px" }} onClick={() => scrollToSection("include")}>Include</div>
  <div style={{ fontSize: "15px", padding: "5px 8px", margin: "0 5px" }} onClick={() => scrollToSection("cost-dates")}>Cost & Dates</div>
  <div style={{ fontSize: "15px", padding: "5px 8px", margin: "0 5px" }} onClick={() => scrollToSection("useful-info")}>Useful Info</div>
  <div style={{ fontSize: "15px", padding: "5px 8px", margin: "0 5px" }} onClick={() => scrollToSection("map")}>Map</div>
  <div style={{ fontSize: "15px", padding: "5px 8px", margin: "0 5px" }} onClick={() => scrollToSection("gallery")}>Gallery</div>
  <div style={{ fontSize: "15px", padding: "5px 8px", margin: "0 5px" }} onClick={() => scrollToSection("reviews")}>Reviews</div>
  <div style={{ fontSize: "15px", padding: "5px 8px", margin: "0 5px" }} onClick={() => scrollToSection("faqs")}>FAQs</div>
</div>


<div id="overview">
  <Overview overview={recommendation.Overview} />
</div>

<div id="itinerary">
          <Itinerary itineraryData={recommendation.itineraryData} />
        </div>
        <div id="include">
  {recommendation.includeData ? (
    <Include items={recommendation.includeData} />
  ) : (
    <div>No include data available</div>
  )}
</div>



<div id="cost-dates">
  {recommendation.costAndDates ? (
    <CostAndDates dates={recommendation.costAndDates} />
  ) : (
    <div>No cost and dates information available</div>
  )}
</div>

        <div id="useful-info-map">
          <UsefulInfoMap />
        </div>

       

        <div id="gallery">
  {recommendation.images ? (
    <Gallery images={recommendation.images} />
  ) : (
    <div>No images available</div>
  )}
</div>


<div id="reviews">
  {recommendation.reviews ? (
    <Reviews reviews={recommendation.reviews} />
  ) : (
    <div>No reviews available</div>
  )}
</div>


        <div id="faqs">
  {recommendation.faqs ? (
    <FAQs faqs={recommendation.faqs} />
  ) : (
    <div>No FAQs available</div>
  )}
</div>

      </div>
    </div>
  );
};

export default RecommendationDetails;
