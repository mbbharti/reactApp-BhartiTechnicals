import React, { useState } from 'react';


const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
      mobile: "",
      email: "",
      query: "",
  });

  const eventChange = (event) => {
    const { name, val } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: val,
      }
    })
    console.log(data);
  };
  const submitForm = (e) => {
    e.preventDefault();
    alert(`Form Submmited Successfully`);
    setData({
      fullName: "",
      mobile: "",
      email: "",
      query: "",
    });
  };

  return (
    <>
      <div className="mt-5">
        <h1 className="text-center">
          Contact us
        </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 mb-5 col-10 mx-auto">
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                  name="fullName" value={data.fullName} onChange={eventChange} placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"
                  name="mobile" value={data.mobile} onChange={eventChange} placeholder="Enter Your Contact number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                  name="email" value={data.email} onChange={eventChange} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control textArea" id="exampleFormControlTextarea1" rows="3" name="query" value={data.query} onChange={eventChange}></textarea>
              </div>
              <div class="col-12 align-items-center submitButtonForm">
                <button type="submit" class="btn btn-outline-primary submitButton" >Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
