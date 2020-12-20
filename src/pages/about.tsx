import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem;
`;

const About = () => {
  return (
    <Wrapper>
      Welcome to the about page. Go to the{' '}
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      page.
    </Wrapper>
  );
};
export default About;
