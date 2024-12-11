import { ColorValue, DimensionValue, FlexStyle, View } from 'react-native';

type ViewProps = Omit<View['props'], 'style'>;
type ThemeProps = { lightColor?: string; darkColor?: string };
type AdditionalProps = {
  hasFlexOne?: boolean;
  row?: boolean;
  width?: DimensionValue;
  height?: DimensionValue;
  isAbsoluteFill?: boolean;
  backgroundColor?: ColorValue;
  paddingHorizontal?: number;
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
};

type BlockProps = ThemeProps & ViewProps & AdditionalProps;

export { BlockProps };
