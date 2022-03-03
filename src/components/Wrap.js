import React from "react";

export function Wrap({ wrap }) {
  return (
    <div style={{marginTop: "20px"}}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const amount = formData.get("amount");
          wrap(amount);
        }}
      >
        <div className="form-group" >
          <label>Amount to wrap:</label>
        </div>
        <div  className="form-group">
          <input style={{marginLeft: "20%", "width": "50%", "float": "left"}} 
          className="form-control" type="text" name="amount" required />
          <input className="btn btn-primary" type="submit" value="Wrap" />
        </div>
      </form>
    </div>
  );
}
