import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact({ data }) {
  useEffect(()=>{
    AOS.init({delay: 800});
  },[])
  return (
    <>
      <section className="m-lg-5 " id="contact">
        <h1 className={`fingerpaint about-head ${
            data ? "textColor-dark" : "text-dark"
          }`}>Contact me</h1>
        <div data-aos="fade-right" data-aos-once="true" class="container-fluid px-4 mt-5">
          <div class="row pb-5 trispace gx-5 gy-4">
            <div  class="col contact">
              <div 
                style={{ backgroundColor: "#c11625" }}
                className="contact-pill p-2 border rounded-pill d-flex align-center   border-danger"
                onClick={() =>
                  window.open("mailto:mechpraveen755@gmail.com", "_blank")
                }
              >
                <AiOutlineMail
                  color="#c71610"
                 
                  className="me-2 border inside  rounded-circle hint-icon p-2 d-flex justify-content-start"
                />
                <div className="d-flex align-items-center">
                  <p className="hint m-0">mechpraveen755@gmail.com</p>
                </div>
              </div>
            </div>
            <div  className="col contact">
              <div 
                style={{ backgroundColor: "#128C7E" }}
                className="contact-pill p-2 border rounded-pill d-flex align-items-center justify-center border-success"
                onClick={() => window.open("tel://+917200623537", "_blank")}
              >
                <FcPhoneAndroid
                  
                  className="me-5 border inside hint-icon rounded-circle p-2 d-flex justify-content-start"
                />
                <div className="d-flex align-items-center">
                  <p className=" hint m-0">7200623537</p>
                </div>
              </div>
            </div>
            <div  className="col contact">
              <div
                style={{ backgroundColor: "#128C7E" }}
                className="contact-pill p-2 border rounded-pill d-flex align-items-center justify-center border-success"
                onClick={() =>
                  window.open("https://wa.me/+917200623537", "_blank")
                }
              >
                <ImWhatsapp
                  color="#25D366"
                  
                  className="me-5 border inside hint-icon rounded-circle p-2 d-flex justify-content-start"
                />
                <div className="d-flex align-items-center">
                  <p className="hint m-0">7200623537</p>
                </div>
              </div>
            </div>
            <div  className="col contact">
              <div
                style={{ backgroundColor: "#0a66c2" }}
                className="contact-pill p-2 border rounded-pill d-flex align-items-center justify-center border-primary "
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/praveen-kumar-v-/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin
                  color="#0a66c2"
                  
                  className="me-5 border inside hint-icon rounded-circle p-2 d-flex justify-content-start"
                />
                <div className="d-flex align-items-center">
                  <p className="hint m-0">Linkedin</p>
                  {/* <p className="fs-4 m-0">mechpraveen755@gmail.com</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
