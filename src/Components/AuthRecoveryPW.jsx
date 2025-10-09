import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const AuthRecoveryPW = () => {
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
        <h4 className="fw-semibold mb-3 fs-18">Reset Your Password</h4>
        <p className="text-muted mb-4">
          Enter your email address and we'll send you an email with instructions
          to reset your password.
        </p>
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
          <div className="d-grid">
            <button className="btn btn-primary fw-semibold" type="submit">
              Reset Password
            </button>
          </div>
        </form>
        <p className="text-muted fs-14 mb-0">
          Back To{" "}
          <a href="auth-login.html" className="fw-semibold text-danger ms-1">
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
export default AuthRecoveryPW;