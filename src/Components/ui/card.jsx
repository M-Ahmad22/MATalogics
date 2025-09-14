import { cn } from "../../lib/utils";

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-6 shadow-md max-w-md w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
