import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const AuthLockScreen = () => {
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
          <h4 className="fw-semibold mb-4 fs-20">Welcome Back</h4>
          <div className="text-center">
            <img
              src="assets/images/users/avatar-1.jpg"
              alt=""
              className="avatar-xl rounded-circle img-thumbnail"
            />
            <div className="mt-2 mb-3">
              <h4 className="fw-semibold">Hi ! Tom Werner.</h4>
              <p className="mb-0 fst-italic text-muted">
                Enter your password to access the admin.
              </p>
            </div>
          </div>
          <form action="index.html" className="text-start mb-3">
            <div className="mb-3">
              <label className="form-label" htmlFor="lock-password">
                Enter Password
              </label>
              <input
                type="password"
                id="lock-password"
                name="lock-password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-2 d-grid">
              <button className="btn btn-primary fw-semibold" type="submit">
                Access to Screen
              </button>
            </div>
          </form>
          <p className="text-muted fs-14 mb-0">
            Not you? return{" "}
            <a href="auth-login.html" className="fw-semibold text-danger ms-1">
              Login !
            </a>
          </p>
        </div>
        <p className="mt-3 text-center mb-0">
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
export default AuthLockScreen;