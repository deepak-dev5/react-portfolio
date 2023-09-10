import Loader from "react-loaders";
import "./index.scss";
import "../AnimatedLetters";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  const refForm = useRef();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5coqwot",
        "template_ljld5gj",
        refForm.current,
        "GfLT-hXtxBlOKKNK3"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>

          <h2>Let's Work Together</h2>
          <p>
            I'm excited about the prospect of working together. Please don't
            hesitate to get in touch with your project details, job
            opportunities, or any questions you may have. I'm here to help you
            achieve your development goals.
            {/* <br />
            Thank you for considering me for your next project or job
            opportunity. I'm looking forward to the possibility of working
            together and making your software development vision a reality.{" "}
            <br />
            Sincerely, Deepak */}
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Deepak Singh
          <br />
          King Faisal Road
          <br />
          Riyadh <br />
          <span>deepakkrsingh196@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[24.66574, 46.705917]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[24.66574, 46.705917]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
