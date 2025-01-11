import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
} from "react";
import * as S from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

export const Input = forwardRef(function Input(
  { containerProps, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <S.Box {...containerProps}>
      <S.Input ref={ref} {...rest} />
    </S.Box>
  );
});
