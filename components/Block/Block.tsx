import { StyleSheet, View, ViewStyle } from 'react-native';
import { match } from 'ts-pattern';
import { BlockProps } from './types/BlockProps';

function getSizeStyle(props: Pick<BlockProps, 'hasFlexOne' | 'isAbsoluteFill'>): ViewStyle {
  return match(props)
    .with({ isAbsoluteFill: true }, () => StyleSheet.absoluteFillObject)
    .with({ hasFlexOne: true }, () => ({ flex: 1 }))
    .otherwise(() => ({}));
}

function Block(props: BlockProps) {
  const style: ViewStyle = {
    gap: props.gap,
    top: props.top,
    width: props.width,
    height: props.height,
    borderRadius: props.radius,
    position: props.position,
    alignItems: props.alignItems,
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    justifyContent: props.justifyContent,
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
    flexDirection: props.row ? 'row' : 'column',
    paddingVertical: props.paddingVertical ?? 0,
    paddingHorizontal: props.paddingHorizontal ?? 0,
    backgroundColor: props.backgroundColor ?? 'transparent',
    ...getSizeStyle(props),
  };

  return <View style={style} {...props} />;
}

export { Block };
