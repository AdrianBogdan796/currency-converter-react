import { StyledResult } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>{result.toFixed(2)}</StyledResult>
);
