import React from 'react';

import SocialIcon, { IconType } from './SocialIcon';
import '../App.scss';

type Props = {
  className?: string;
};

const SocialBar: React.FunctionComponent<Props> = ({ className }: Props) => (
  <div className={`socialBar ${className}`}>
    <SocialIcon
      label="GitHub"
      type={IconType.GITHUB}
      url="https://github.com/cjhines/"
    />
    <SocialIcon
      label="LinkedIn"
      type={IconType.LINKEDIN}
      url="https://www.linkedin.com/in/chris-hines-b9a048190/"
    />
    <SocialIcon
      label="Email"
      type={IconType.EMAIL}
      url="mailto:chrishinesabdn@gmail.com"
    />
  </div>
);

export default SocialBar;
