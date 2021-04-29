import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    maintainedBy,
    contributeMessage,
  } = useTranslations();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <SocialLinks />
        <p>
          {aboutProject}{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
            target="_blank"
          >
            {seeMorePWA}
          </a>
          .
        </p>
        <p>
          {contributeMessage}{' '}
          <a
            href="https://github.com/diogorodrigues/iceberg-gatsby-multilang"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
        <p>
          <div>Code icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </p>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
