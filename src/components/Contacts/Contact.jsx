import React from 'react'
import {images} from "../../altro/data"
import "./Contact.scss"

const Contact = () => {
  return (
    <div className='sub-container-contact'>
        <span className="titre"></span>
        <h2 className="subtitle"></h2>

        <div className="grid">
            <div className="left">
                <form >
                    <div className='name'>
                        <label htmlFor=''>Name</label>
                        <input type='text'/>
                    </div>
                    <div className='email'>
                        <label htmlFor=''>Email</label>
                        <input type='email'/>
                    </div>
                    <div className="message">
                        <label htmlFor=''>Message</label>
                        <textarea rows={5}></textarea>
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="first-image">
                        <img src={images.image4} alt=''/>
                    </div>
                     <img src={images.image5} alt='' className='second-image'/>
                     <img src={images.image6} alt='' className='third-image'/>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact