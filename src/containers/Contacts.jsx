import React from 'react';
import iconTwitter from '../static/twitter-icon.png'
import iconGoogle from '../static/google-icon.png'
import '../styles/components/Contacts.css'
const Contacts = () => {
   return (
      <div className="Contacts">
         <div>
            <h1> Integrantes el proyecto.</h1>
         </div>
         <div className="Contacts-members">
            <div className="members">
               <div className="member-img">
                  <img src="https://i.ibb.co/LdyZNhX/IMG-20191116-WA0017.jpg" alt="" />

               </div>
               <div className="members-info">
                  <div>
                     <h2>Arturo Jiménez</h2>
                     <p>
                        Desarrollador web
                  </p>
                  </div>
                  <div className="members-icon">
                     <img src={iconTwitter} alt="twitter" />
                     <img src={iconGoogle} alt="google" />
                  </div>
               </div>
            </div>
            <div className="members">
               <div className="member-img">
                  <img src="https://i.ibb.co/sHCBTGb/zam.jpg" alt="" />

               </div>

               <div className="members-info">
                  <div>
                     <h2>María de Jesús Zambrano</h2>
                     <p>
                        Desarrolladora web
                     </p>
                  </div>
                  <div className="members-icon">
                     <img src={iconTwitter} alt="twitter" />
                     <img src={iconGoogle} alt="google" />
                  </div>
               </div>
            </div>
            <div className="members">
               <div className="member-img">
                  <img src="https://i.ibb.co/g3bhD4s/juda.jpg" alt="judith" />
               </div>
               <div className="members-info">
                  <div>
                     <h2>Judith Peña C.</h2>
                     <p>
                        Desarrolladora web
                  </p>
                  </div>
                  <div className="members-icon">
                     <img src={iconTwitter} alt="twitter" />
                     <img src={iconGoogle} alt="google" />
                  </div>
               </div>
            </div>
            <div className="members">
               <div className="member-img">
                  <img src="https://i.ibb.co/xfXf2Hy/adan.jpg" alt="adan" />
               </div>
               <div className="members-info">
                  <div>
                     <h2>Adan Rodgríguez </h2>
                     <p>
                        Desarrollador web
                  </p>
                  </div>
                  <div className="members-icon">
                     <img src={iconTwitter} alt="twitter" />
                     <img src={iconGoogle} alt="google" />
                  </div>
               </div>
            </div>
            <div className="members">
               <div className="member-img">
                  <img src="https://i.ibb.co/S3xQTFg/leonel.jpg" alt="adan" />
               </div>
               <div className="members-info">
                  <div>
                     <h2>Leonel De Luna</h2>
                     <p>
                        Desarrollador web
                  </p>
                  </div>
                  <div className="members-icon">
                     <img src={iconTwitter} alt="twitter" />
                     <img src={iconGoogle} alt="google" />
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}

export default Contacts;