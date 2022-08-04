import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');


  useEffect(() => {
    setTimeout(() => {
       setLetterClass('text-animate-hover')
   }, 4000);
}, []);

  return (
    <>
      <div className='container about-page'>
          <div className='text-zone'>
              <h1>
                  <AnimatedLetters
                  letterClass={letterClass}
                      strArray={['A','b','o','u','t',' ', 'm','e']}
                      idx={15}
                  />
              </h1>
              <p>High level experience in web design and frontend development knowledge, producing quality work.</p>
              <p>Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure quas, doloribus blanditiis quo exercitationem officiis voluptatem consectetur incidunt molestias facere earum tenetur minus sunt hic quis vitae enim suscipit velit accusamus, a temporibus ut recusandae sint. Iusto repellat beatae corporis molestias ut aspernatur libero commodi pariatur quis adipisci provident magnam, ex neque, voluptatibus odio velit maxime. Vel neque rerum dolore sed, ducimus a enim eligendi eaque quae? Recusandae nesciunt quasi repellat aspernatur vitae dolore quidem sapiente cupiditate. Dolorem animi deserunt sint ipsum! Laudantium accusantium unde excepturi facilis cumque, nisi quae laborum ad quasi nesciunt dolorem beatae quibusdam laboriosam libero harum suscipit nostrum earum quaerat tempore aliquam itaque, porro blanditiis quia voluptatibus! Obcaecati, odit distinctio!
              </p>
          </div>

          <div className="stage-cute-cont">
            <div className="cubespinner">
              <div className="fece1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="fece2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="fece3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="fece4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="fece5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="fece6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4" />
              </div>
            </div>
          </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About