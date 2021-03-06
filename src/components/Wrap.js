import React from "react";

export function Wrap({ wrap }) {
  return (
    <div className="flex flex-col">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const amount = formData.get("amount");
          wrap(amount);
        }}
      >
        <div className="gap-4 flex flex-col items-center justify-center" >
          <label className="font-semibold">Amount:</label>
          <input 
            className="w-1/2 text-center p-1 rounded focus:outline-none border border-gray-700" type="number" step="any" name="amount" required />
          <input className="flex items-center justify-center text-xs cursor-pointer p-2 bg-black hover:bg-gray-800 rounded text-white w-1/2" type="submit" value="Wrap" />
        </div>
      </form>
    </div>
  );
}
