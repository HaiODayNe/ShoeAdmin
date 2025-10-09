import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const PageFAQ = () => {
    return (<div >
        <Wrapper />
    <div className="page-content">
  <div className="page-container">
    <div className="row">
      <div className="col-xl-3">
        <div className="docs-nav">
          <ul className="nav bg-transparent flex-column fs-15 ps-2">
            <li className="nav-item">
              <a href="#general" className="nav-link">
                General
              </a>
            </li>
            <li className="nav-item">
              <a href="#integration" className="nav-link">
                Integration
              </a>
            </li>
            <li className="nav-item">
              <a href="#payment" className="nav-link">
                Payment
              </a>
            </li>
            <li className="nav-item">
              <a href="#shipping" className="nav-link">
                Shipping
              </a>
            </li>
            <li className="nav-item">
              <a href="#return" className="nav-link">
                Return
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-9">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-3 anchor" id="general">
              General FAQ's
            </h4>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is a session tracking dashboard?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    A session tracking dashboard is a visual tool used to
                    monitor and analyze user sessions on a website or
                    application. It provides insights into user behavior,
                    including their interactions, paths, and engagement patterns
                    during their visits.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Why is session tracking important for a website or app?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    For online stores, session tracking is essential to manage
                    the contents of a user’s shopping cart. Without session
                    tracking, the items in the cart could be lost as the user
                    navigates through the site.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What metrics can I track in a session tracking dashboard?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    In a session tracking dashboard, you can track a variety of
                    metrics to gain insights into user behavior, website
                    performance, and overall user experience. Here are some key
                    metrics you can monitor:
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How can I use session tracking data to improve my website or
                    app?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Use scroll depth and time-on-page metrics to determine which
                    content is engaging users the most. Focus on creating
                    similar content or improving under performing pages.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What are some common challenges with session tracking?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Session tracking, while invaluable for understanding user
                    behavior and optimizing website or app performance, comes
                    with several challenges. One major issue is ensuring data
                    privacy and compliance with regulations like GDPR and CCPA.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-3 anchor" id="integration">
              Integration
            </h4>
            <div className="accordion" id="accordionExample2">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    How can I ensure data accuracy in my session tracking
                    dashboard?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Set an appropriate session timeout period to avoid splitting
                    a single session into multiple sessions or merging distinct
                    sessions into one. Typically, a 30-minute timeout is
                    standard, but this can be adjusted based on
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Can I track user sessions across multiple platforms and
                    devices?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Yes, you can track user sessions across multiple platforms
                    and devices, but it requires implementing a few strategies
                    and using the right tools to ensure accurate tracking.
                    Here’s how you can achieve this:
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    What is integration, and why is it important for our session
                    tracking dashboard?
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Session management involves managing requests between a user
                    and web-based app or service. Learn about best practices of
                    session management and the attacks
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    Which systems or platforms can be integrated with our
                    session tracking dashboard?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Integrating your session tracking dashboard with various
                    systems and platforms can provide a more comprehensive view
                    of user behavior and streamline data management. Here are
                    some commonly integrated systems and platforms
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    Is technical expertise required to perform an integration?
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Session tracking, while invaluable for understanding user
                    behavior and optimizing website or app performance, comes
                    with several challenges. One major issue is ensuring data
                    privacy and compliance with regulations like GDPR and CCPA.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-3 anchor" id="payment">
              Payment
            </h4>
            <div className="accordion" id="accordionExample3">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="true"
                    aria-controls="collapseEleven"
                  >
                    When will payment be processed for my order?
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample3"
                >
                  <div className="accordion-body">
                    Payment is processed during the checkout procedure when you
                    finalize your order. A confirmation screen displaying the
                    order number signifies that payment has been successfully
                    completed.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwelve"
                    aria-expanded="false"
                    aria-controls="collapseTwelve"
                  >
                    What is the process for payment on my order?
                  </button>
                </h2>
                <div
                  id="collapseTwelve"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample3"
                >
                  <div className="accordion-body">
                    We welcome payments via Visa®, MasterCard®, American
                    Express®, and PayPal®. Rest assured, all information
                    transmitted to our servers is encrypted, ensuring the utmost
                    security for your credit card details.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThirteen"
                    aria-expanded="false"
                    aria-controls="collapseThirteen"
                  >
                    What steps should I take if I encounter difficulties while
                    placing an order?
                  </button>
                </h2>
                <div
                  id="collapseThirteen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample3"
                >
                  <div className="accordion-body">
                    If you encounter any technical issues with our website,
                    please reach out to us via our support portal.
                    Alternatively, you can contact us toll-free at 1-000-000-000
                    or email us at order@companymail.com.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFourteen"
                    aria-expanded="false"
                    aria-controls="collapseFourteen"
                  >
                    Which license is required for an end product exclusively
                    accessible to paying users?
                  </button>
                </h2>
                <div
                  id="collapseFourteen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample3"
                >
                  <div className="accordion-body">
                    If you have paying users or you are developing any SaaS
                    products then you need an Extended License. For each
                    products, you need a license. You can get free lifetime
                    updates as well.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFifteen"
                    aria-expanded="false"
                    aria-controls="collapseFifteen"
                  >
                    How does billing work?
                  </button>
                </h2>
                <div
                  id="collapseFifteen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample3"
                >
                  <div className="accordion-body">
                    Plans are per workspace, not per account. You can upgrade
                    one workspace, and still have any number of free workspaces.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-3 anchor" id="shipping">
              Shipping
            </h4>
            <div className="accordion" id="accordionExample4">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSixteen"
                    aria-expanded="true"
                    aria-controls="collapseSixteen"
                  >
                    What is the shipping method for delivering my order?
                  </button>
                </h2>
                <div
                  id="collapseSixteen"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample4"
                >
                  <div className="accordion-body">
                    For large items, we use a third-party logistics company to
                    deliver your product, providing you with scheduled "room of
                    choice" delivery service. For smaller items, we offer
                    complimentary parcel delivery.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeventeen"
                    aria-expanded="false"
                    aria-controls="collapseSeventeen"
                  >
                    How much does delivery for my order cost?
                  </button>
                </h2>
                <div
                  id="collapseSeventeen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample4"
                >
                  <div className="accordion-body">
                    Scheduled delivery is priced at either $69 or $99 per order,
                    depending on the destination postal code. Parcel delivery,
                    on the other hand, is complimentary.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEighteen"
                    aria-expanded="false"
                    aria-controls="collapseEighteen"
                  >
                    What steps should I take if my product arrives in a damaged
                    condition?
                  </button>
                </h2>
                <div
                  id="collapseEighteen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample4"
                >
                  <div className="accordion-body">
                    We will swiftly replace any product damaged during transit.
                    Simply reach out to our support team to inform us of the
                    issue within 48 hours of the product's arrival.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNineteen"
                    aria-expanded="false"
                    aria-controls="collapseNineteen"
                  >
                    What steps must I take to commence selling?
                  </button>
                </h2>
                <div
                  id="collapseNineteen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample4"
                >
                  <div className="accordion-body">
                    We will swiftly replace any product damaged during transit.
                    Simply reach out to our support team to inform us of the
                    issue within 48 hours of the product's arrival.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwenty"
                    aria-expanded="false"
                    aria-controls="collapseTwenty"
                  >
                    Can other info be added to an invoice?
                  </button>
                </h2>
                <div
                  id="collapseTwenty"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample4"
                >
                  <div className="accordion-body">
                    At the moment, the only way to add additional information to
                    invoices is to add the information to the workspace's name
                    manually.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-3 anchor" id="return">
              Return
            </h4>
            <div className="accordion" id="accordionExample5">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwenty-one"
                    aria-expanded="true"
                    aria-controls="collapseTwenty-one"
                  >
                    Is it possible for me to initiate a return for my product?
                  </button>
                </h2>
                <div
                  id="collapseTwenty-one"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body">
                    You may initiate a return for your product within 15 days of
                    delivery by reaching out to our support team. All returned
                    merchandise must be in its original packaging with all
                    accompanying items intact.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwenty-two"
                    aria-expanded="false"
                    aria-controls="collapseTwenty-two"
                  >
                    Is it possible to cancel my order?
                  </button>
                </h2>
                <div
                  id="collapseTwenty-two"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body">
                    For scheduled delivery orders, cancellation is permissible
                    up to 72 hours before your chosen delivery date for a full
                    refund. Unfortunately, parcel delivery orders cannot be
                    cancelled. Nevertheless, upon request, a free return label
                    can be provided .
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwenty-three"
                    aria-expanded="false"
                    aria-controls="collapseTwenty-three"
                  >
                    Where can I check the status of my return?
                  </button>
                </h2>
                <div
                  id="collapseTwenty-three"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body">
                    Find the item in Your Orders Choose Return/Refund Status
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwenty-four"
                    aria-expanded="false"
                    aria-controls="collapseTwenty-four"
                  >
                    What is the duration of the warranty?
                  </button>
                </h2>
                <div
                  id="collapseTwenty-four"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body">
                    Find the item in Your Orders Choose Return/Refund Status
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwenty-five"
                    aria-expanded="false"
                    aria-controls="collapseTwenty-five"
                  >
                    What is your cancellation policy?
                  </button>
                </h2>
                <div
                  id="collapseTwenty-five"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body">
                    We understand that things change. You can cancel your plan
                    at any time and we'll refund you the difference already
                    paid.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* container */}
  {/* Footer Start */}
  <footer className="footer">
    <div className="page-container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start">
          © Arclon - By{" "}
          <span className="fw-bold text-decoration-underline text-uppercase text-reset fs-12">
            Coderthemes
          </span>
        </div>
        <div className="col-md-6">
          <div className="text-md-end footer-links d-none d-md-block">
            <a href="javascript: void(0);">About</a>
            <a href="javascript: void(0);">Support</a>
            <a href="javascript: void(0);">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end Footer */}
</div>
        <Offcanvas />
    </div>
    )
}
export default PageFAQ;