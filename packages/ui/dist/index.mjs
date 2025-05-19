// src/components/button.tsx
import React from "react";

// src/utils/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/button.tsx
import { jsx } from "react/jsx-runtime";
var Button = React.forwardRef(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
          variant === "secondary" && "bg-gray-200 text-gray-900 hover:bg-gray-300",
          variant === "outline" && "border border-gray-300 hover:bg-gray-100",
          size === "default" && "h-10 py-2 px-4 text-sm",
          size === "sm" && "h-8 px-3 text-xs",
          size === "lg" && "h-12 px-6 text-base",
          className
        ),
        ref,
        ...props,
        children
      }
    );
  }
);
Button.displayName = "Button";

// src/components/card.tsx
import React2 from "react";

// src/utils.ts
function cn2(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = React2.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        className: cn2(
          "rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden",
          className
        ),
        ...props
      }
    );
  }
);
Card.displayName = "Card";
var CardHeader = React2.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        className: cn2("p-4 border-b border-gray-200", className),
        ...props
      }
    );
  }
);
CardHeader.displayName = "CardHeader";
var CardBody = React2.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        className: cn2("p-4", className),
        ...props
      }
    );
  }
);
CardBody.displayName = "CardBody";
var CardFooter = React2.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        className: cn2("p-4 border-t border-gray-200", className),
        ...props
      }
    );
  }
);
CardFooter.displayName = "CardFooter";

// src/components/input.tsx
import React3 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "input",
      {
        type,
        className: cn2(
          "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
export {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  cn2 as cn
};
