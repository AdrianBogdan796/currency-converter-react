import { StyledResult } from "./styled";

const Result = ({ result }) => (
  <StyledResult>
    {!!result && (
      <strong>
        {result.targetAmount.toFixed(2)} = {result.currency}
      </strong>
    )}
  </StyledResult>
);

export { Result };
