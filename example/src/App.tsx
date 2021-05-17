import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import WOL from 'react-native-wake-on-lan';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    WOL.wake({ mac: 'AA:BB:CC:DD:EE:FF' }).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
