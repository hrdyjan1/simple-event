import { useThemeColor } from '@/hooks/useThemeColor';
import { Text, TextStyle } from 'react-native';
import { match } from 'ts-pattern';

type TextProps = ThemeProps & Omit<Text['props'], 'style' | 'onPress'>;
type ThemeProps = { lightColor?: string; darkColor?: string };
type AdditionalProps = { variant?: 'alternative' };

type TypographyProps = ThemeProps & TextProps & AdditionalProps;

function getVariantStyle(variant: AdditionalProps['variant']): TextStyle {
  return match(variant)
    .with('alternative', () => ({ color: '#2e78b7' }))
    .otherwise(() => ({}));
}

function Typography({ variant, lightColor, darkColor, ...otherProps }: TypographyProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const style: TextStyle = { color, ...getVariantStyle(variant) };

  return <Text style={style} {...otherProps} />;
}

export { TypographyProps, Typography };
