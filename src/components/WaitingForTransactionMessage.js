import React from "react";

export function WaitingForTransactionMessage({ txHash }) {
  return (
    <div className="flex flex-col gap-1 items-center justify-center text-xs w-1/2 text-center alert alert-info" role="alert">
      Waiting for transaction: <strong>asdlksdfjlkfsdalkjfsdaljkfsdajlksfdajlkfasdjlkasfdjlkfasdjlkasfdjlkafsdjlk{txHash}</strong> to be mined
    </div>
  );
}
