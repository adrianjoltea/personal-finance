import { ChangeEvent } from "react";
import { ReactNode } from "react";
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
}

export type { InputProps, ErrorProps, LazyLoaderProps, SortOptionsProps };
