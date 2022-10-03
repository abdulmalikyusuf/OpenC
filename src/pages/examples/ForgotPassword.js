import React from "react";


export default function ForgotPassword() {
  return (
    <main>
      <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <div className="justify-content-center">
            <div xs={12} className="d-flex align-items-center justify-content-center">
              <div className="signin-inner my-3 my-lg-0 bg-white dark:bg-gray-700 shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3>Forgot your password?</h3>
                <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                <form>
                  <div className="mb-4">
                    <label htmlFor="email">Your Email</label>
                      <input required autoFocus type="email" placeholder="john@company.com" />
                  </div>
                  <button variant="primary" type="submit" className="w-100">
                    Recover password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
