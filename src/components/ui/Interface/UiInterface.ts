import { ChangeEvent } from "react";
import { ReactNode } from "react";
import {
  FieldValues,
  GlobalError,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface InputProps {
  type?: string;
  name?: string;
  id: string;
  placeholder?: string;
  content?: string;
  value: string | number | Blob | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  forPassword?: boolean;
  handleShow?: () => void;
  showPassword?: boolean;
}

interface InputPropsHook<T extends FieldValues> {
  type?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  id: string;
  placeholder?: string;
  content?: string;
  errors: Record<string, GlobalError>;
  autoComplete?: string;
  forPassword?: boolean;
  handleShow?: () => void;
  showPassword?: boolean;
  options?: string[];
}

interface ErrorProps {
  children: ReactNode;
}

interface LazyLoaderProps {
  show: boolean;
  delay: number;
}

interface SortOptionsProps {
  options: {
    value: string;
    label: string;
  }[];
  title: string;
  buttons?: boolean;
}

export type {
  InputProps,
  ErrorProps,
  LazyLoaderProps,
  SortOptionsProps,
  InputPropsHook,
};
