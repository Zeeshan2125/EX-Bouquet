import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Ex Bouquet</h1>
          <p>
            where floral dreams come to life! We are a premier destination for exquisite and enchanting bouquets that are meticulously crafted to evoke emotions and create lasting memories. With our passion for flowers and dedication to exceptional customer service, we strive to be your go-to source for all your floral needs. <br></br><br></br>
            At Ex Bouquet, we believe in the power of flowers to convey love, celebrate special moments, and bring joy to everyday life. Our talented team of experienced florists curates stunning arrangements using the freshest and most vibrant blooms sourced from local growers. Each bouquet is thoughtfully designed to capture the essence of nature's beauty and reflect the unique personality of the recipient.<br></br><br></br>

            Whether you're looking for a romantic bouquet for a special occasion, a vibrant arrangement to brighten someone's day, or a stylish centerpiece for a corporate event, we have a wide selection to suit every taste and preference. Our commitment to quality means that every bouquet is carefully handcrafted with attention to detail, ensuring that you receive a truly exceptional and breathtaking floral creation.<br></br><br></br>

            We understand that every customer has unique needs and desires, which is why we offer personalized consultations to bring your vision to life. Our knowledgeable and friendly team is always ready to assist you in selecting the perfect bouquet, offering expert advice on flower combinations, colors, and styles. We take pride in creating customized arrangements that surpass your expectations and leave a lasting impression.<br></br><br></br>

            At Ex Bouquet, we value the importance of customer satisfaction. We go the extra mile to ensure that your experience with us is nothing short of extraordinary. From seamless online ordering to prompt delivery, we strive to provide a hassle-free and delightful shopping experience. Your happiness is our top priority, and we are committed to exceeding your expectations every step of the way.<br></br><br></br>

            With our unwavering dedication to quality, creativity, and exceptional service, Ex Bouquet has become a trusted name in the floral industry. We are proud to serve individuals, businesses, and event planners, bringing beauty and elegance to every occasion.<br></br><br></br>

            Discover the artistry of flowers at Ex Bouquet and let us help you express your emotions and create unforgettable moments. Explore our exquisite collection online, visit our store, or contact us today to experience the magic of our stunning bouquets.<br></br><br></br>

            Remember, at Ex Bouquet, we are not just selling flowers; we are helping you express your emotions and create moments that will be cherished forever. Let the beauty of flowers be the language of your heart.
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
