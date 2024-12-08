import { ColorValue, DimensionValue, View } from 'react-native';

type ViewProps = Omit<View['props'], 'style'>;
type ThemeProps = { lightColor?: string; darkColor?: string };
type AdditionalProps = {
  hasFlexOne?: boolean;
  align?: 'center';
  width?: DimensionValue;
  height?: DimensionValue;
  isAbsoluteFill?: boolean;
  backgroundColor?: ColorValue;
};

type BlockProps = ThemeProps & ViewProps & AdditionalProps;

export { BlockProps };
