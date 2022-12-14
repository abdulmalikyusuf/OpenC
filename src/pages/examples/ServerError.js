import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { NavigationRoutes } from "../../data/routes";
import ErrorImage from "../../assets/img/illustrations/500.svg";


export default function ServerError() {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="align-items-center">
            <div xs={12} lg={5} className="order-2 order-lg-1 text-center text-lg-left">
              <h1 className="text-primary text-white dark:text-white mt-5">
                Something has gone <span className="fw-bolder">seriously</span> wrong
          </h1>
              <p className="lead my-4">
                It's always time for a coffee break. We should be back by the time you finish your coffee.
          </p>
              <button variant="primary" className="animate-hover" to={NavigationRoutes.DashboardOverview.path}>
                <FaChevronLeft className="animate-left-3 me-3 ms-2" />
                Go back home
              </button>
            </div>
            <div xs={12} lg={7} className="order-1 order-lg-2 text-center d-flex align-items-center justify-content-center">
              <img src={ErrorImage} className="img-fluid w-75" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
