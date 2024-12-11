import { StyleSheet, View, ViewStyle } from 'react-native';
import { match } from 'ts-pattern';
import { BlockProps } from './types/BlockProps';

function getAlignStyle(align: BlockProps['align']): ViewStyle {
  return match(align)
    .with('center', () => ({ alignItems: 'center', justifyContent: 'center' }))
    .otherwise(() => ({}));
}

function getSizeStyle(props: Pick<BlockProps, 'hasFlexOne' | 'isAbsoluteFill'>): ViewStyle {
  return match(props)
    .with({ isAbsoluteFill: true }, () => StyleSheet.absoluteFillObject)
    .with({ hasFlexOne: true }, () => ({ flex: 1 }))
    .otherwise(() => ({}));
}

function Block({ align, width, height, darkColor, lightColor, ...otherProps }: BlockProps) {
  const style: ViewStyle = {
    width,
    height,
    backgroundColor: otherProps.backgroundColor ?? 'transparent',
    ...getAlignStyle(align),
    ...getSizeStyle(otherProps),
  };

  return <View style={style} {...otherProps} />;
}

export { Block };
