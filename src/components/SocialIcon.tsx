import React from 'react';

type Props = {
  svg: Array<{ d: string }>,
  url: string,
  label: string,
};

const style = {
  display: 'flex',
  width: 50,
  height: 50,
  margin: 10,
  backgroundColor: 'black',
  borderRadius: '100%',
  justifyContent: 'center',
  alignItems: 'center',
} as React.CSSProperties;

const SocialBar: React.FunctionComponent<Props> = ({ svg, url, label }: Props) => (
  <a href={url} aria-label={label} rel="noopener noreferrer" target="_blank">
    <div style={style}>
      <svg viewBox="0 0 512 512" width={30} height={30}>
        {
          svg.map((item) => (
            <path
              d={item.d}
              fill="white"
              key={`${JSON.stringify(item)}`}
            />
          ))
        }
      </svg>
    </div>
  </a>
);

export default SocialBar;
