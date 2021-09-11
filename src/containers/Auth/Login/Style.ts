import styled from 'styled-components';

export const Content = styled.div`
  background-color: white;
  padding: var(--space-10);
  border: 1px solid #ccc;
  max-width: 500px;
  min-width: 400px;
  margin: var(--space-10);
`;

export const FieldWrapper = styled.div`
  padding: 0;
  margin-bottom: 10px;
  input {
    width: 100%;
    padding: 5px;
  }
`;

export const FormLabel = styled.p`
  padding: 0;
  margin-bottom: 10px;
`;

export const Text = styled.p<{ center?: boolean }>`
  margin-top: 10px;
  font-size: 14px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;
