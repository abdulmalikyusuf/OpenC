import React from "react";
import { FaEnvelope, FaUnlockAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { NavigationRoutes } from "../../data/routes";


export default () => {
  return (
    <main>
      <section className="bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <div className="container">
          <div className="justify-content-center">
            <div xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3 className="mb-4">Reset password</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
