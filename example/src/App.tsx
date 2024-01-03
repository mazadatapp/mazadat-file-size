import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getFileSize } from 'mazadat-file-size';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    getFileSize("/storage/emulated/0/Download/AppName.apk", "gb").then(setResult);
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
