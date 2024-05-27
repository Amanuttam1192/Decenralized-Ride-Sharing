function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
               RideShare
              </li>
              <li>
                Big range of vehicles for all your needs. We
                have the perfect ride for your needs to be shared.
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; 8953917106
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                one@rentacar.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; amanuttam23@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin/in/hristijanmicevski/"
                >
                  Created by PSB-6 ©
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Locations</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">About us</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Apply as a Driver</li>
              <li>
                <p>We provide a full time eployment oppurtunity for our drivers with proper incentives.</p>
              </li>
              <li>
                <input type="text" placeholder="Consent if Interested"></input>
              </li>
              <li>
              <a href="https://662dca82a1df6c638338b154--sage-axolotl-208152.netlify.app/" target="_blank"><button class="submit-email">Submit</button></a>

              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
