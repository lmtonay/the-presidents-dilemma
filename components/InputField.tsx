"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn, sentenceToWord } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isDropdown?: boolean;
  options?: {
    label: string;
    value: string;
  }[];
  defaultSelected?: string;
  onValueChange?: (v: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  className,
  isDropdown,
  options,
  defaultSelected,
  onValueChange,
  ...props
}) => {
  return (
    <div className={cn(className)}>
      {label && <Label htmlFor={sentenceToWord(placeholder)}>{label}</Label>}
      {isDropdown ? (
        <Select onValueChange={onValueChange}>
          <SelectTrigger>
            <SelectValue>{defaultSelected}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          id={sentenceToWord(placeholder)}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
};

export default InputField;
