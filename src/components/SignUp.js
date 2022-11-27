import React from "react";

const SignUp = () => {
  function handleSubmit1(e) {
    e.preventDefault();
  }
  return (
    <>
      <button
        type="button"
        class="btn btn-light navBtn-round"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        <b>Sign Up</b>
      </button>
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <form style={{ width: "350px" }} onSubmit={handleSubmit1}>
            <div class="modal-content px-3 py-3">
              <div class="modal-header ">
                <h3 class="modal-title" id="exampleModal1Label">
                  Sign Up
                </h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <small>
                  Reddit is anonymous, so your username is what you’ll go by
                  here. Choose wisely—because once you get a name, you can’t
                  change it.
                </small>
                <br />
                <br />
                <div class="mb-3">
                  <label for="username" class="form-label">
                    <b>Username</b>
                  </label>
                  <input
                    type="email"
                    class="form-control round"
                    id="username"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
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
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
