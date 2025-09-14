import { cn } from "../../lib/utils";

export const Label = ({ className, ...props }) => {
  return (
    <label
      className={cn("text-sm font-medium text-gray-700", className)}
      {...props}
    />
  );
};
