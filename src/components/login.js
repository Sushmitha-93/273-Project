import React from "react";

const Login = () => {
  function handleSubmit1(e) {
    e.preventDefault();
  }
  return (
    <>
      <button
        type="button"
        class="btn btn-primary navBtn-round"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        <b>Login</b>
      </button>
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModal2Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <form style={{ width: "350px" }} onSubmit={handleSubmit1}>
            <div class="modal-content px-4 py-3">
              <div class="modal-header">
                <h3 class="modal-title px-2" id="exampleModal2Label">
                  Log In
                </h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="username" class="form-label px-2">
                    <b>Username</b>
                  </label>
                  <input
                    type="email"
                    class="form-control round"
                    id="username"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label px-2">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    class="form-control round"
                    id="password"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  class="btn btn-primary round btn-lg mx-auto btn-block col "
                  data-bs-dismiss="modal"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
