import { ViewStyle } from 'react-native';
import { match } from 'ts-pattern';
import { BlockProps } from '../types/BlockProps';

function getAlignStyle(align: BlockProps['align']): ViewStyle {
  return match(align)
    .with('center', () => ({ alignItems: 'center', justifyContent: 'center' }))
    .otherwise(() => ({}));
}

export { getAlignStyle };
