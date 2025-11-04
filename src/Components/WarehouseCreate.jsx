import Wrapper from "./wrapper";
import Offcanvas from "./offcanvas";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const WarehouseCreate = () => {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState({
    name: "",
    warehouseCode: "",
    address: "",
    location: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouse((warehouse) => ({ ...warehouse, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !warehouse.name ||
      !warehouse.warehouseCode ||
      !warehouse.address ||
      !warehouse.location
    ) {
      alert("Hãy điền đủ các thông tin sản phẩm!");
      return;
    }

    try {
      await axios.post(
        "https://684e8519f0c9c9848d285a09.mockapi.io/Shoe",
        warehouse
      );
      alert("Thêm kho thành công!");
      setWarehouse({
        name: "",
        warehouseCode: "",
        address: "",
        location: "",
      });
    } catch (error) {
      console.log("Thêm kho thất bại");
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
                    <h4 className="header-title px-2">Thông tin kho</h4>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="card-body">
                      <div className="needs-validation" noValidate="">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom03"
                          >
                            Tên kho
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            placeholder="Hà Nội 01"
                            name="Name"
                            value={""}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom02"
                          >
                            Mã kho
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom02"
                            placeholder="HaN01"
                            required=""
                            name="Version"
                            value={""}
                            onChange={handleChange}
                          />
                          <div className="valid-feedback">Looks good!</div>
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
                            Địa chỉ
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="Hà Đông, Hà Nội"
                            required=""
                            name="Price"
                            value={""}
                            onChange={handleChange}
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom02"
                          >
                            Khu vực
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="validationCustom02"
                            placeholder="Hà Nội"
                            required=""
                            name="Size"
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
export default WarehouseCreate;
