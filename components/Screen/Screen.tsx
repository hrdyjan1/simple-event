import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends React.PropsWithChildren {}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#F9F9FB' } });

function Screen({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle='dark-content' showHideTransition='fade' />
      {children}
    </SafeAreaView>
  );
}

export { Screen };
