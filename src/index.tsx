import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'mazadat-file-size' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const MazadatFileSize = NativeModules.MazadatFileSize
  ? NativeModules.MazadatFileSize
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function getFileSize(filePath: string, outputType: string): Promise<number> {
  return MazadatFileSize.getFileSize(filePath, outputType);
}
