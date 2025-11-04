import Wrapper from "./wrapper";
import Offcanvas from "./offcanvas";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const CategoryCreate = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({
    name: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((category) => ({ ...category, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category.name) {
      alert("Hãy điền category cần thêm!");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/category/create", category);
      alert("Thêm category thành công!");

      setCategory({
        name: "",
      });
    } catch (error) {
      console.log("Thêm category thất bại");
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
                    <h4 className="header-title px-2">Thông tin Category</h4>
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <div className="needs-validation" noValidate="">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom03"
                          >
                            Category
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            placeholder="Category"
                            name="name"
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
export default CategoryCreate;
