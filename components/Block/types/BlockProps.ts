import { AnimatableNumericValue, ColorValue, DimensionValue, FlexStyle, View, ViewStyle } from 'react-native';

type ViewProps = Omit<View['props'], 'style'>;
type ThemeProps = { lightColor?: string; darkColor?: string };
type AdditionalProps = {
  hasFlexOne?: boolean;
  row?: boolean;
  wrap?: boolean;
  borderWidth?: number;
  top?: DimensionValue;
  gap?: string | number;
  width?: DimensionValue;
  height?: DimensionValue;
  borderColor?: ColorValue;
  isAbsoluteFill?: boolean;
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor?: ColorValue;
  position?: ViewStyle['position'];
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
  radius?:  AnimatableNumericValue | string | undefined;
};

type BlockProps = ThemeProps & ViewProps & AdditionalProps;

export { BlockProps };
