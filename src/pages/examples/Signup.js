import React from "react";
import { Link } from 'react-router-dom';

import { NavigationRoutes } from "../../data/routes";
import BgImage from "../../assets/img/illustrations/signin.svg";


export default function Signup() {
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <div className="container">
          <div className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <div xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <a href={NavigationRoutes.Signin.path} className="fw-bold">
                      {` Login here `}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
