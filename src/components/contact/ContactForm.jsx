import React, { useState } from 'react'

const ContactForm = ({ setResult, setShowAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    })  


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("");
    
        const form = event.target;
        const formData = new FormData(form);
    
        const name = formData.get("name")?.toString().trim() || "";
        const email = formData.get("email")?.toString().trim() || "";
        const message = formData.get("message")?.toString().trim() || "";
    
        const newErrors = {
          name: name === "",
          email: !/\S+@\S+\.\S+/.test(email),
          message: message === "",
        };
        setErrors(newErrors);
    
        if (Object.values(newErrors).includes(true)) {
          setResult("❌ Please fix the highlighted fields.");
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3000);
          return;
        }
    
        setResult("Sending....");
        formData.append("access_key", "20720aa8-5d0e-4355-b66c-a1b5076e21d8");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("✅ Form submitted successfully!");
          form.reset();
          setErrors({ name: false, email: false, message: false });
        } else {
          setResult(`❌ ${data.message}`);
        }
    
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      };
    
    return (
        <div className='w-full flex flex-col items-center'>
            {/* Custom Header */}
            <div className="flex flex-col items-center mb-2">
                <h1 className="text-2xl font-bold text-black mb-1">contact me</h1>
                <div className="w-15 h-1 bg-black"></div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-6 mt-8 mb-12">
                {/* Facebook */}
                <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/50 hover:shadow-lg transition-all duration-300"
                >
                    <img src="/assets/icons/facebook.png" alt="facebook" className='w-8 h-8' />
                </a>

                {/* Instagram */}
                <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/50 hover:shadow-lg transition-all duration-300"
                >
                    <img src="/assets/icons/instagram.png" alt="instagram" className='w-8 h-8' />
                </a>

                {/* GitHub */}
                <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/50 hover:shadow-lg transition-all duration-300"
                >
                    <img src="/assets/icons/github.png" alt="github" className='w-8 h-8' />
                </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className='flex flex-col gap-6'>
                    {/* Name and Email Row */}
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex-1'>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Name'
                                className={`w-full px-4 py-3 bg-white/30 backdrop-blur-xl shadow-md rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-300
                                     ${errors.name ? 'border-red-500' : ''}`}
                                required
                            />
                        </div>
                        <div className='flex-1'>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                className={`w-full px-4 py-3 bg-white/30 backdrop-blur-xl shadow-md rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-300
                                     ${errors.email ? 'border-red-500' : ''}`}
                                required
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Message'
                            rows="4"
                            className={`w-full px-4 py-3 bg-white/30 backdrop-blur-xl shadow-md rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-300 resize-none
                                     ${errors.message ? 'border-red-500' : ''}`}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className='flex justify-center'>
                        <button 
                            type="submit" 
                            className='px-8 py-3 bg-black/80 hover:bg-black text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2'
                        >
                            Send Message
                            
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm