import React from "react";

export default function BrandStory() {
  return (
    <section className="brandstory-container">
      <div className="brandstory-content">
        <h1 className="brandstory-heading">Our Brand Story</h1>
        <div className="brandstory-story-container">
          <p className="brandstory-text">
            Spruha-Day'S empowers women with safe, innovative menstrual care
            solutions. Our mission is to revolutionize feminine hygiene through
            science-backed, eco-conscious products that prioritize both women's
            health and environmental sustainability.
          </p>

          <div className="brandstory-highlights">
            <div className="brandstory-highlight-item">
              <div className="icon">👩‍⚕️</div>
              <h3 className="brandstory-subheading">Our Founder</h3>
              <p>
                Dr. Priya Sharma, a gynecologist with 15+ years experience,
                founded Spruha-Days to address the lack of safe menstrual
                products in the market.
              </p>
            </div>

            <div className="brandstory-highlight-item">
              <div className="icon">🌿</div>
              <h3 className="brandstory-subheading">Clean Ingredients</h3>
              <p>
                We use only certified organic cotton, herbal infusions, and
                graphene technology - free from toxins, chemicals, and synthetic
                materials.
              </p>
            </div>

            <div className="brandstory-highlight-item">
              <div className="icon">🎯</div>
              <h3 className="brandstory-subheading">Our Mission</h3>
              <p>
                To provide every woman with access to comfortable, safe, and
                eco-friendly menstrual care while breaking societal taboos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .brandstory-container {
          margin-top: 0;
          padding: 50px 20px;
          background: linear-gradient(135deg, #fbe9f0, #fff);
          overflow: hidden;
        }
        .brandstory-content {
          max-width: 1200px;
          margin: 0 auto;
          animation: fadeIn 1s ease-in-out;
        }
        .brandstory-heading {
          font-size: 2.8rem;
          color: #e91e63;
          text-align: center;
          margin-bottom: 40px;
          font-weight: 700;
          font-family: "Playfair Display", serif;
          position: relative;
        }
        .brandstory-heading::after {
          content: "";
          display: block;
          width: 60px;
          height: 4px;
          background: #e91e63;
          margin: 10px auto 0;
          border-radius: 2px;
        }
        .brandstory-story-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .brandstory-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #444;
          text-align: center;
          max-width: 850px;
          margin: 0 auto;
          animation: slideUp 0.8s ease-in-out;
        }
        .brandstory-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 40px;
        }
        .brandstory-highlight-item {
          background-color: #fff;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          text-align: center;
          cursor: pointer;
          animation: fadeInUp 0.9s ease-in-out;
        }
        .brandstory-highlight-item:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }
        .brandstory-subheading {
          color: #e91e63;
          font-size: 1.6rem;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
          transition: transform 0.4s ease;
        }
        .brandstory-highlight-item:hover .icon {
          transform: rotate(10deg) scale(1.2);
        }
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        /* Responsive Styles */
        @media (max-width: 768px) {
          .brandstory-heading {
            font-size: 2rem;
          }
          .brandstory-text {
            font-size: 1rem;
          }
          .brandstory-container {
            padding: 30px 15px;
          }
        }
        @media (max-width: 480px) {
          .brandstory-heading {
            font-size: 1.6rem;
          }
          .brandstory-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
