import { ReactElement } from "react";

type FieldsetType = {
  children: ReactElement;
  error: string;
  label: string;
  className?: string;
};

const Fieldset = ({ children, error, label, className }: FieldsetType) => {
  return (
    <div className={`mb-4 ${className}`}>
      <div className="space-y-2">
        <label htmlFor={children?.props.id} className="text-sm font-medium">
          {label}
        </label>
        {children}
      </div>
      <p>{error}</p>
    </div>
  );
};

export default Fieldset;
