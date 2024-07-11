import React from "react";
import "./About.css"
import yellowEffectImage from "../../assets/Images/effect1.svg"
const About = () => {
  return (
    <section className="about-section " style={{position:"relative"}}>
      <img src={yellowEffectImage} alt=""  className="effectImage1"/>
      <div className="CompanyInfo">
        <p>Ahmedabad's leading outdoor media provider since 2000, offers innovative billboard solutions in premium, high-traffic locations.</p>
      </div>
      <div>

        <div class="AboutusContainer container">

          <div className="row">
            <div className="col-lg-3" style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
              <div className="headingContainer">
                <h1 className="sectionheading">About us</h1>
                <hr />
              </div>
            </div>
            <div class="col-lg-9">
              <div className="row ParaContent">
                <div class="col-lg-6"><p >Het Graphics started its business in the outdoor media industry in the year 2000 and is known for its innovations and ideas in the industry. We started our journey by introducing Pole Kiosks in the city of Ahmedabad. Currently, we provide several billboard media options such as Gantries, Unipoles, large-format Hoardings, Cantilevers, Pole Kiosks and LEDs.</p></div>
                <div class="col-lg-6"><p >Het Graphics has been successfully providing a one-stop solution in outdoor advertising to all its local, national and international clientele. With our strong media planning team, we have accomplished multiple successful outdoor campaigns throughout the state of Gujarat.</p></div>
                <div class="col-lg-6"><p >With 99% of our media being backlit and 100% of them located in the most premium and high-traffic locations of Ahmedabad city, we are the leading outdoor media provider with 400+ media inventory options. Our web of billboards is spread throughout Ahmedabad city. Our media inventory can be found in cluster-free zones and is visible at direct eye level making it inescapable to notice while commuting.</p></div>
                <div class="col-lg-6"><p >Currently, we deal with all our clientele through our subsidiary company Yellow Spot. YellowSpot emerged as a collaborative effort between Het Graphics and Khushi Advertising. Our strategic alliance brings together two industry leaders, establishing one of Gujarat's most formidable outdoor media houses. Find out more about us on Yellow Spot (link).</p> </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="about-section-footer">

          <h2 className="about-footer-text">Find out more about our subsidiary company
            and book your first inventory now!</h2>
          <button className="nav-btn">YellowSpot</button>
        </div> */}
      </div>
    </section>
  )
}
export default About;