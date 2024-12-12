import { StyleSheet, View } from 'react-native';

interface CardProps extends React.PropsWithChildren {
  height?: number;
  minHeight?: number;
}

function Card(props: CardProps) {
  return (
    <View style={{ ...styles.card, minHeight: props.minHeight, height: props.height }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});

export { Card };
