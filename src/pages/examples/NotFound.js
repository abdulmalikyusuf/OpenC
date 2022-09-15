import React from "react";
import { FaChevronLeft } from "react-icons/fa";

import { Link } from 'react-router-dom';

import { NavigationRoutes } from "../../data/routes";
import NotFoundImage from "../../assets/img/illustrations/404.svg";


export default function NotFound() {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div>
            <div xs={12} className="text-center d-flex align-items-center justify-content-center">
              <div>
                <a href={NavigationRoutes.DashboardOverview.path}>
                  <img src={NotFoundImage} className="img-fluid w-75" />
                </a>
                <h1 className="text-primary mt-5">
                  Page not <span className="fw-bolder">found</span>
                </h1>
                <p className="lead my-4">
                  Oops! Looks like you followed a bad link. If you think this is a
                  problem with us, please tell us.
                </p>
                <button variant="primary" className="animate-hover" to={NavigationRoutes.DashboardOverview.path}>
                  <FaChevronLeft className="animate-left-3 me-3 ms-2" />
                  Go back home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
