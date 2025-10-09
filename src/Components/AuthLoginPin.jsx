import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const AuthLoginPin = () => {
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
          <h4 className="fw-semibold mb-2 fs-20">Login with PIN</h4>
          <p className="text-muted mb-4">
            We sent you a code, please enter it below to verify <br />
            your number
            <span className="link-dark fs-13 fw-medium">
              + (12) 345-678-912
            </span>
          </p>
          <form action="index.html" className="text-start mb-3">
            <label className="form-label" htmlFor="code">
              Enter 6 Digit Code
            </label>
            <div className="d-flex gap-2 mt-1 mb-3">
              <input
                type="text"
                maxLength={1}
                className="form-control text-center"
              />
              <input
                type="text"
                maxLength={1}
                className="form-control text-center"
              />
              <input
                type="text"
                maxLength={1}
                className="form-control text-center"
              />
              <input
                type="text"
                maxLength={1}
                className="form-control text-center"
              />
              <input
                type="text"
                maxLength={1}
                className="form-control text-center"
              />
              <input
                type="text"
                maxLength={1}
                className="form-control text-center"
              />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-primary fw-semibold" type="submit">
                Continue
              </button>
            </div>
            <p className="mb-0 text-center">
              Don't received code yet?{" "}
              <a
                href="#!"
                className="link-primary fw-semibold text-decoration-underline"
              >
                Send again
              </a>
            </p>
          </form>
          <p className="text-muted fs-14 mb-0">
            Back To{" "}
            <a href="index.html" className="fw-semibold text-danger ms-1">
              Home!
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
export default AuthLoginPin;