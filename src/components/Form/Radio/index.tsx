import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

import * as S from "./styles.ts";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
};

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <S.Container data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </S.Container>
  );
});
