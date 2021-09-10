import styled from 'styled-components';

interface IInstance {
  alignContent?: 'start' | 'end';
  alignItems?: 'start' | 'end';
  justifyContent?: 'start' | 'end';
  direction?: 'row' | 'column';
  wrap?: boolean;
  white?: boolean;
  paddingTop?: string;
  flex?: boolean;
}

export const Instance = styled.div<IInstance>`
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '0')};
  background-color: ${({ white }) => (white ? `var(--color-white)` : 'none')};
  align-content: ${({ alignContent }) => (alignContent ? `flex-${alignContent}` : 'center')};
  align-items: ${({ alignItems }) => (alignItems ? `flex-${alignItems}` : 'center')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `flex-${justifyContent}` : 'center'};
  ${({ flex = false }) => flex && 'display: flex;'}
`;

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-content: center;
`;
export interface IContainer {
  children: React.ReactNode;
  loading?: boolean;
}

export const Container = ({ children, loading, ...props }: IContainer & IInstance) => {
  return (
    <Instance {...props}>
      {loading && <Loading>Loading...</Loading>}
      {children}
    </Instance>
  );
};
