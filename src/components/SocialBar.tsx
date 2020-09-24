import React from 'react';
import SVG from '../assets/SVG';
import SocialIcon from './SocialIcon';
import '../App.scss';

type Props = {
  className?: string,
}

const SocialBar: React.FunctionComponent<Props> = ({ className }: Props) => (
  <div className={`socialBar ${className}`}>
    <SocialIcon label="GitHub" svg={SVG.GITHUB} url="https://github.com/cjhines/" />
    <SocialIcon label="LinkedIn" svg={SVG.LINKEDIN} url="https://www.linkedin.com/in/chris-hines-b9a048190/" />
    <SocialIcon label="Email" svg={SVG.EMAIL} url="mailto:chrishinesabdn@gmail.com" />
  </div>
);

export default SocialBar;
