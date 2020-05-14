import React from 'react';
import { Icon as MDIIcon } from '@mdi/react';

type IconProps = {
  path: string;
  title?: string;
  size?: number;
  rotate?: number;
  color?: string;
  spin?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
};

const Icon: React.FC<IconProps> = ({
  path,
  title,
  size = 1,
  horizontal,
  vertical,
  rotate,
  color,
  spin
}) => {
  return (
    <MDIIcon path={path} 
      title={title}
      size={size}
      rotate={rotate}
      color={color}
      spin={spin}
      horizontal={horizontal}
      vertical={vertical}
    />
  )
}

export default Icon;
