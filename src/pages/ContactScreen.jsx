import React, { useState, useEffect  } from 'react'
import Header from '../components/common/Header'
import ContactForm from '../components/contact/ContactForm'
import AlertBox from '../components/contact/AlertBox'
import AOS from "aos";
const ContactScreen = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false,

    });
    AOS.refresh();
  }, []);
  const [result, setResult] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  return (
    <div id='contact' className='w-full pt-20 pb-20 scroll-smooth '>
      <div data-aos="fade-up">
        <AlertBox result={result} showAlert={showAlert} />
      </div>
      <div data-aos="fade-up">
        <ContactForm setResult={setResult} setShowAlert={setShowAlert} />
      </div>
    </div>
  )
}

export default ContactScreen