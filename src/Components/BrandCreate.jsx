import Wrapper from "./wrapper";
import Offcanvas from "./offcanvas";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const BrandCreate = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState({
    name: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrand((brand) => ({ ...brand, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!brand.name || !brand.description) {
      alert("Hãy điền đủ các thông tin sản phẩm!");
      return;
    }
    try {
      await axios.post(
        "https://684e8519f0c9c9848d285a09.mockapi.io/Shoe",
        brand
      );
      alert("Thêm Brand thành công!");
      setBrand({
        name: "",
        description: "",
      });
    } catch (error) {
      console.log("Thêm Brand thất bại");
    }
  };
  return (
    <div>
      <Wrapper />
      <div className="page-content  ">
        <div className="page-container">
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col card ">
                <div className="row ">
                  <div className="card-header border-bottom border-dashed d-flex align-items-center">
                    <h4 className="header-title px-2">Thông tin Brand</h4>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="card-body">
                      <div className="needs-validation" noValidate="">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom03"
                          >
                            Tên
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            placeholder="Adidas"
                            name="Name"
                            value={""}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body">
                      <div className="needs-validation" noValidate="">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom01"
                          >
                            Mô tả
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="Đẹp, ngầu,..."
                            required=""
                            name="Price"
                            value={""}
                            onChange={handleChange}
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <button className="btn btn-primary col-lg-12" type="submit">
                    Submit form
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Offcanvas />
    </div>
  );
};
export default BrandCreate;
