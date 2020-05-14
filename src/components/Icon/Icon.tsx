import React from 'react';
import { Icon as MDIIcon } from '@mdi/react';

type IconProps = {
  path: string;
  title?: string;
  description?: string;
  size?: number | string;
  rotate?: number;
  color?: string;
  spin?: boolean | number;
  horizontal?: boolean;
  vertical?: boolean;
};

const Icon: React.FC<IconProps> = ({
  path,
  title,
  description,
  size = 1,
  horizontal,
  vertical,
  rotate,
  color,
  spin,
  ...props
}) => {
  return (
    <MDIIcon path={path}
      title={title}
      description={description}
      size={size}
      rotate={rotate}
      color={color}
      spin={spin}
      horizontal={horizontal}
      vertical={vertical}
      {...props}
    />
  )
};

export default Icon;