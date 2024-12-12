import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Block } from '../Block/Block';
import { FloatingButtonCreate } from '../FloatingButtonCreate/FloatingButtonCreate';

interface ScreenProps extends React.PropsWithChildren {
  isScrollable?: boolean;
  onActionButtonPress?: () => void;
}

function Screen(props: ScreenProps) {
  if (props.isScrollable) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} barStyle='dark-content' showHideTransition='fade' />
        <Block hasFlexOne>
          {props.onActionButtonPress ? (
            <FloatingButtonCreate onPress={props.onActionButtonPress} />
          ) : null}
          <KeyboardAvoidingView
            style={styles.flexOn}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <ScrollView
              contentContainerStyle={styles.flexGrowOne}
              keyboardShouldPersistTaps='handled'
            >
              {props.children}
            </ScrollView>
          </KeyboardAvoidingView>
        </Block>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle='dark-content' showHideTransition='fade' />
      <Block hasFlexOne>
        {props.onActionButtonPress ? (
          <FloatingButtonCreate onPress={props.onActionButtonPress} />
        ) : null}
        {props.children}
      </Block>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9FB' },
  flexOn: { flex: 1 },
  flexGrowOne: { flexGrow: 1 },
});

export { Screen };
