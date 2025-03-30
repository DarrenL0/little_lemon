import React from 'react';
import chef1 from "../../assets/Mario and Adrian A.jpg";

const Branch = () => {
  return (
    <article className="branch" aria-labelledby="branch-heading">
      <div className="pageWidth">
        <section className="branch-content">
          {/* Left Side */}
          <div className="branch-info">
            <h1 id="branch-heading">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Little Lemon is a restaurant founded by two Italian brothers, Mario and Adrian,
              who moved to the United States with the shared dream of owning and operating their
              own dining establishment. Their passion for food and hospitality inspired them to bring
              a taste of their Italian heritage to a new audience. <br /><br />
              Mario, an experienced chef with a deep connection to traditional
              Italian cuisine, carefully curates the menu using cherished family recipes and
              techniques he mastered in Italy. His dedication to authenticity ensures that each
              dish reflects the rich culinary traditions of their homeland.<br /><br />
              Adrian, on the other hand, focuses on the business and marketing aspects of
              the restaurant. He has been instrumental in growing Little Lemon’s presence,
              attracting a diverse customer base, and ensuring the restaurant remains a local
              favorite. Recognizing the evolving tastes of their patrons, he also led the initiative
              to expand the menu beyond classic Italian fare, introducing a variety of Mediterranean-inspired
              dishes. This addition allows Little Lemon to offer a more diverse and exciting dining experience
              while staying true to its roots.
            </p>
          </div>

          {/* Right Side */}
          <div className="branch-images">
            <img
              src={chef1}
              alt="Mario and Adrian, the Italian brothers and chefs behind Little Lemon restaurant"
              className="image1"
              role="img"
              aria-label="Mario and Adrian, the Italian brothers and chefs behind Little Lemon restaurant"
            />
          </div>
        </section>
      </div>
    </article>
  );
}

export default Branch;
