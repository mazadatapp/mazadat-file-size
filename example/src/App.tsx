import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getFileSize } from 'mazadat-file-size';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    let androidPath = "file:///storage/emulated/0/Download/AppName.apk"
    let iosPath = "file:///Users/Karim.Saad/Library/Developer/CoreSimulator/Devices/02997294-C79E-4388-B2F3-FA76BF9E9011/data/Media/DCIM/100APPLE/IMG_0001.JPG"
    getFileSize(iosPath, "b").then(setResult);
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
