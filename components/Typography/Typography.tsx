import { ColorValue, Text, TextStyle } from 'react-native';
import { match } from 'ts-pattern';

interface TypographyProps extends React.PropsWithChildren {
  color?: ColorValue | undefined;
  top?: number;
  fontSize?: number;
  capital?: number;
  lineHeight?: number;
  fontWeight?: 300 | 400 | 500 | 600;
  textTransform?: TextStyle['textTransform'];
}

function getFontFamily(variant: TypographyProps['fontWeight']): TextStyle {
  return match(variant)
    .with(300, () => ({ fontFamily: 'HindLight' } as TextStyle))
    .with(400, () => ({ fontFamily: 'HindRegular' } as TextStyle))
    .with(500, () => ({ fontFamily: 'HindMedium' } as TextStyle))
    .with(600, () => ({ fontFamily: 'HindBold' } as TextStyle))
    .otherwise(() => ({ fontFamily: 'HindRegular' } as TextStyle));
}

function Typography(props: TypographyProps) {
  const style: TextStyle = {
    top: props.top || 1,
    color: props.color ?? '#323C46',
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
    textTransform: props.textTransform,
    ...getFontFamily(props.fontWeight),
  };

  return <Text style={style}>{props.children}</Text>;
}

export { TypographyProps, Typography };
