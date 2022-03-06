import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div>
      <div>
        <div>
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>
        <div className="inline-flex flex-col gap-6">
          <div class="text-sm">Please connect to your wallet.</div>
          <button
            className="flex-none items-center justify-center flex text-sm border bg-blue-700 hover:bg-blue-600 rounded p-2"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
