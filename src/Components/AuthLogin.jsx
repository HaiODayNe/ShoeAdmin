import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const AuthLogin = () => {
    return (<div >
        <Wrapper />
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
        <h4 className="fw-semibold mb-3 fs-18">Log in to your account</h4>
        <form action="index.html" className="text-start mb-3">
          <div className="mb-3">
            <label className="form-label" htmlFor="example-email">
              Email
            </label>
            <input
              type="email"
              id="example-email"
              name="example-email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="example-password">
              Password
            </label>
            <input
              type="password"
              id="example-password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox-signin"
              />
              <label className="form-check-label" htmlFor="checkbox-signin">
                Remember me
              </label>
            </div>
            <a
              href="auth-recoverpw.html"
              className="text-muted border-bottom border-dashed"
            >
              Forget Password
            </a>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary fw-semibold" type="submit">
              Login
            </button>
          </div>
        </form>
        <p className="text-muted fs-14 mb-0">
          Don't have an account?
          <a href="auth-register.html" className="fw-semibold text-danger ms-1">
            Sign Up !
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

        <Offcanvas />
    </div>
    )
}
export default AuthLogin;