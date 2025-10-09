import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const AuthLogout = () => {
    return (<div >
        <Wrapper />
   <div className="h-100">
  <div className="auth-bg d-flex min-vh-100">
  <div className="row g-0 justify-content-center w-100 m-xxl-5 px-xxl-4 m-3">
    <div className="col-xxl-3 col-lg-5 col-md-6">
      <a
        href="index.html"
        className="auth-brand d-flex justify-content-center mb-2"
      >
        <img
          src="assets/images/logo-dark.png"
          alt="dark logo"
          height={26}
          className="logo-dark"
        />
        <img
          src="assets/images/logo.png"
          alt="logo light"
          height={26}
          className="logo-light"
        />
      </a>
      <p className="fw-semibold mb-4 text-center text-muted fs-15">
        Admin Panel Design by Coderthemes
      </p>
      <div className="card overflow-hidden text-center p-xxl-4 p-3 mb-0">
        <h4 className="fw-semibold mb-2 fs-18">You are Logged Out</h4>
        <div className="text-center">
          <div className="mt-4">
            <div className="logout-checkmark">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
              >
                <circle
                  className="path circle"
                  fill="none"
                  stroke="#4bd396"
                  strokeWidth={6}
                  strokeMiterlimit={10}
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <polyline
                  className="path check"
                  fill="none"
                  stroke="#4bd396"
                  strokeWidth={6}
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  points="100.2,40.2 51.5,88.8 29.8,67.5 "
                />
              </svg>
            </div>
          </div>
          <h3 className="mt-2">See you again !</h3>
          <p className="text-muted"> You are now successfully sign out. </p>
        </div>
        <div className="d-block mt-2">
          <button className="btn btn-primary fw-semibold" type="submit">
            Support Center
          </button>
        </div>
        <p className="text-muted fs-14 mt-3 mb-0">
          Back to{" "}
          <a href="auth-login.html" className="text-danger fw-semibold ms-1">
            Login !
          </a>
        </p>
      </div>
      <p className="mt-4 text-center mb-0">
        © Arclon - By{" "}
        <span className="fw-bold text-decoration-underline text-uppercase text-reset fs-12">
          Coderthemes
        </span>
      </p>
    </div>
  </div>
</div>

</div>
        <Offcanvas />
    </div>
    )
}
export default AuthLogout;