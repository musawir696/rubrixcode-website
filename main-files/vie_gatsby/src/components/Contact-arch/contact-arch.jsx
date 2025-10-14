import React from "react";

const ContactArch = () => {
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
    
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    try {
      await new Promise((r) => setTimeout(r, 500));
      
      if (typeof window !== "undefined") {
        const formValues = new FormData();
        formValues.append('name', formData.name);
        formValues.append('email', formData.email);
        formValues.append('message', formData.message);
        
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

      if (messageRef.current) {
        messageRef.current.innerText =
          "Your Message has been successfully sent. I will contact you soon.";
      }
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
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
    <section
      id="contact-arch"
      className="contact-sec style2 section-padding position-re bg-img"
      style={{ backgroundImage: "url(/img/patrn1.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages" ref={messageRef}></div>
                <br />

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
                          className="nb butn light mt-30 full-width"
                        >
                          <span className="ls3 text-u">Send Massege</span>
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
    </section>
  );
};

export default ContactArch;
