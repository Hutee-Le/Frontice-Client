import { FC } from 'react';
import { IIconEntity } from '../../../types/entity/icon';

type StackOverflowLogoPropsType = IIconEntity;

const StackOverflowLogo: FC<StackOverflowLogoPropsType> = ({
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={`${width}px`}
      height={`${height}px`}
    >
      <path fill="#607D8B" d="M9 28H12V42H9z" />
      <path fill="#607D8B" d="M9 39H35V42H9z" />
      <path fill="#607D8B" d="M32 28H35V42H32zM15 34H29V37H15z" />
      <path
        fill="#A68A6E"
        d="M14.88 29H28.880000000000003V32H14.88z"
        transform="rotate(6.142 21.88 30.5)"
      />
      <path
        fill="#EF6C00"
        d="M29.452 11.646H43.451V14.647H29.452z"
        transform="rotate(81.234 36.453 13.148)"
      />
      <path
        fill="#FF9800"
        d="M23.576 13.578H37.574V16.579H23.576z"
        transform="rotate(60.79 30.576 15.079)"
      />
      <path
        fill="#D38B28"
        d="M18.395 18.275H32.393V21.276H18.395z"
        transform="rotate(34.765 25.396 19.777)"
      />
      <path
        fill="#C09553"
        d="M15.977 23.499H29.976V26.5H15.977z"
        transform="rotate(19.785 22.978 25.003)"
      />
    </svg>
  );
};

export default StackOverflowLogo;