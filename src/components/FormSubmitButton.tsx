"use client";
import React, { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className={`btn btn-primary btn-block mb-6 h-2 text-white ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && (
        <span className="loading loading-dots"/>
      )}
      {children}
    </button>
    
    
  );
}

export function ErrorMsg (){

}
