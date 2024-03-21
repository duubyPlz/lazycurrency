import { styled } from '@compiled/react';

type StatusWrapperProps = { status: string };
const StatusWrapper = styled.span<StatusWrapperProps>({
  color: (props: StatusWrapperProps) => props.status ?? 'white',
});

const Status = ({ status }: StatusWrapperProps) => (
  <StatusWrapper status={status}>●</StatusWrapper>
);

export default Status;
