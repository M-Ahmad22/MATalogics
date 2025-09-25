import React, { useState } from "react";
import { Button } from "./button";

export const Dialog = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg p-6 shadow-xl w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <div className="flex justify-end">
              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
