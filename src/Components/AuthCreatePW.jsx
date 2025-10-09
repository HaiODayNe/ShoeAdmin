import Wrapper from "./wrapper";
import Offcanvas from "./offcanvas";
const AuthCreatePW = () => {
  return (
    <div>
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
                <h4 className="fw-semibold mb-2 fs-20">Create New Password</h4>
                <p className="text-muted mb-2">
                  Please create your new password.
                </p>
                <p className="mb-4">
                  Need password suggestion ?{" "}
                  <a
                    href="#!"
                    className="link-dark fw-semibold text-decoration-underline"
                  >
                    Suggestion
                  </a>
                </p>
                <form action="index.html" className="text-start mb-3">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="new-password">
                      Create New Password{" "}
                      <small className="text-info ms-1">
                        Must be at least 8 characters
                      </small>
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      name="new-password"
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="re-password">
                      Reenter New Password
                    </label>
                    <input
                      type="password"
                      id="re-password"
                      name="re-password"
                      className="form-control"
                      placeholder="Reenter Password"
                    />
                  </div>
                  <div className="mb-2 d-grid">
                    <button
                      className="btn btn-primary fw-semibold"
                      type="submit"
                    >
                      Create New Password
                    </button>
                  </div>
                </form>
                <p className="text-muted fs-14 mb-0">
                  Back To{" "}
                  <a
                    href="auth-login.html"
                    className="fw-semibold text-danger ms-1"
                  >
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
  );
};
export default AuthCreatePW;
