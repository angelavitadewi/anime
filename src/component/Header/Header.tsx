import styled from '@emotion/styled';

const SiteHeader = styled.header`
  padding-top: 2em;
  padding-bottom: 1em;
`;

const SiteBranding = styled.div`
  margin-bottom: 1em;
  text-align: center;
`;

const SiteTitle = styled.h1`
  font-weight: 300;
  letter-spacing: 2px;
  line-height: 1;
  margin-top: 25px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const SiteDescription = styled.h2`
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  margin-top: -15px;
  margin-bottom: 35px;
  padding-top: 0;
`;

export const Header = () => (
  <SiteHeader>
    <SiteBranding>
      <SiteTitle>The Next Generation Anime Platform</SiteTitle>
      <SiteDescription>Track, share, discover your favorite anime and manga!</SiteDescription>
    </SiteBranding>
  </SiteHeader>
);
