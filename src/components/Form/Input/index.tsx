import {
  FocusEvent,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  useState,
} from "react";
import * as S from "./styles";
import { FieldError } from "react-hook-form";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>;
  error?: FieldError;
  optional?: boolean;
};

export const Input = forwardRef(function Input(
  { optional, containerProps, error, onBlur, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    onBlur?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <S.Box {...containerProps}>
      <S.Container data-state={isFocused ? "focused" : "blurred"}>
        <S.Input
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />

        {optional ? <span>Opcional</span> : null}
      </S.Container>
      {error?.message ? (
        <S.ErrorMessage role="alert">{error.message}</S.ErrorMessage>
      ) : null}
    </S.Box>
  );
});
