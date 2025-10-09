import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const AuthConfirmMail = () => {
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
          <h4 className="fw-semibold mb-4 fs-20">Verify Your Account</h4>
          <img
            src="assets/images/png/mail-confirm.png"
            alt="img"
            width={86}
            className="mx-auto d-block"
          />
          <p className="text-muted fs-14 mt-2">
            {" "}
            A email has been send to <b>youremail@domain.com</b>. Please check
            for an email from company and click on the included link to reset
            your password.{" "}
          </p>
          <a href="index.html" className="btn d-block btn-primary mt-3">
            Back to Home
          </a>
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
export default AuthConfirmMail;