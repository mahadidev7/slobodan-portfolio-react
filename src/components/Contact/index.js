import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qhsyp45', 'template_udrfz1d', form.current, 'kI6t75eZd4HGe0wdN')
        .then((result) => {
            console.log(result.text);
            alert("successfully message send");
        }, (error) => {
            console.log(error.text);
            console.log("error");
        });
    };

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover')
       }, 4000);
   }, []);

  return (

    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                      strArray={['C','o','n','t','a','c','t','', 'm','e']}
                      idx={15}
                      letterClass={letterClass}
                     />
                </h1>
                <p>High level experience in web design and frontend development knowledge, producing quality work. Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.</p>

                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='user_name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name='user_email' placeholder='Email' required />
                            </li>
                            {/* <li>
                                <input type="text" name='subject' placeholder='Subject' required />
                            </li> */}
                            
                            <li>
                                <textarea
                                 name='message' placeholder='Message' required
                                ></textarea>
                            </li>
                            <li>
                                <input
                                 type="submit" className='flat-button'
                                 value="SEND"
                                 />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <div className='info-map'>
                Comilla Adarsha Sadar
                <br/>
                Comilla,
                <br/>
                Comilla Grand track road, 3500 <br />
                Bangladesh <br />
                <span>mahadidev7@gmail.com</span>
            </div>

            <div className='map-wrap'>
                <MapContainer center={[23.4607, 91.1809]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[23.4607, 91.1809]}>
                    <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
    </>
  )
}

export default Contact