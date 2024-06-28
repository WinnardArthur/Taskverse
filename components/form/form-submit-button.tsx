"use client";

import { useFormState, useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FormSubmitButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "primary"
    | "link";
}

export const FormSubmitButton = ({
  children,
  disabled,
  className,
  variant,
}: FormSubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      type="submit"
      variant={variant}
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
