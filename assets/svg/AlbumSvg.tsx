import { ColorValue } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface AlbumSvgProps extends SvgProps {
  color: ColorValue;
}

function AlbumSvg(props: AlbumSvgProps) {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
      <Path clipRule='evenodd' d='M0 0h24v24H0V0z' />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 18h17v-6H4v6zM4 5v6h17V5H4z'
        fill={props.color}
      />
    </Svg>
  );
}

export { AlbumSvg };
