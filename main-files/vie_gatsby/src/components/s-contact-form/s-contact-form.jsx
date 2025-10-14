import React from "react";

const SContactForm = ({ noLine }) => {
  const messageRef = React.useRef(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({});

  const validateEmail = (email) => {
    if (!email) {
      return "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return "Invalid email address";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    try {
      // Simulate sending message
      await new Promise((r) => setTimeout(r, 500));
      
      // Only attempt to send if we're in the browser
      if (typeof window !== "undefined") {
        const formValues = new FormData();
        formValues.append('name', formData.name);
        formValues.append('email', formData.email);
        formValues.append('message', formData.message);
        
        // Try to send via fetch instead of axios (more SSR-friendly)
        try {
          const response = await fetch('/contact.php', {
            method: 'POST',
            body: formValues,
          });
          
          if (response.ok) {
            console.log('Form submitted successfully');
          }
        } catch (err) {
          console.error('Error sending message:', err.message);
        }
      }

      // Show success message
      if (messageRef.current) {
        messageRef.current.innerText =
          "Your Message has been successfully sent. I will contact you soon.";
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      // Clear message after 2 seconds
      setTimeout(() => {
        if (messageRef.current) {
          messageRef.current.innerText = "";
        }
      }, 2000);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <section className="contact-sec section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Contact Us
              </h6>
              <h3 className="wow color-font">
                Let's Get in Touch And Make Magic Together.
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages" ref={messageRef}></div>
                <div className="controls">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && (
                          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <button
                          type="submit"
                          className="nb butn bord curve mt-30"
                        >
                          <span>Send Massege</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {!noLine ? <div className="line bottom left"></div> : ""}
    </section>
  );
};

export default SContactForm;
