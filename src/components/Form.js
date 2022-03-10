import React from "react";

export default function Form() {
  return (
    <>
      <form>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="submit">
              Button
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
