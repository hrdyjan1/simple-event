import { StyleSheet, View, ViewStyle } from 'react-native';
import { match } from 'ts-pattern';
import { BlockProps } from './types/BlockProps';

function getSizeStyle(props: Pick<BlockProps, 'hasFlexOne' | 'isAbsoluteFill'>): ViewStyle {
  return match(props)
    .with({ isAbsoluteFill: true }, () => StyleSheet.absoluteFillObject)
    .with({ hasFlexOne: true }, () => ({ flex: 1 }))
    .otherwise(() => ({}));
}

// TODO: no {widht, heihgt} but props
function Block({
  row,
  align,
  width,
  height,
  darkColor,
  lightColor,
  alignItems,
  justifyContent,
  ...otherProps
}: BlockProps) {
  const style: ViewStyle = {
    width,
    height,
    flexDirection: row ? 'row' : 'column',
    alignItems: alignItems ?? undefined,
    justifyContent: justifyContent ?? undefined,
    paddingHorizontal: otherProps.paddingHorizontal ?? 0,
    backgroundColor: otherProps.backgroundColor ?? 'transparent',
    ...getSizeStyle(otherProps),
  };

  return <View style={style} {...otherProps} />;
}

export { Block };
