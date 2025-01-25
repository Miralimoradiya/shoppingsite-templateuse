import React from "react";
import { FormInput } from "../components/formCompo/FormInput";
import { FormTextarea } from "../components/formCompo/FormTextarea";
import { FormButton } from "../components/formCompo/FormButton";
import { SectionHeader } from "../components/content/SectionHeader";

const Contact = () => {
  return (
    <>
      <SectionHeader
        title="Contact Us"
        subtitle="Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet."
      />
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 mx-auto" method="post" role="form">
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <FormInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="form-control rounded"
                />
              </div>
              <div className="col-md-6 mb-3">
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-control rounded"
                />
              </div>
            </div>
            <div className="mb-4">
              <FormInput
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="form-control rounded"
              />
            </div>
            <div className="mb-3">
              <FormTextarea
                id="message"
                name="message"
                placeholder="Message"
                rows="8"
                className="form-control rounded"
              />
            </div>
            <div className="text-end mt-3">
            <div className="row">
              <div className="col text-end mt-2">
              <FormButton label="Let’s Talk" />
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
