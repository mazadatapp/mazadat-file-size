package com.mazadatfilesize;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.io.File;
import java.text.NumberFormat;

@ReactModule(name = MazadatFileSizeModule.NAME)
public class MazadatFileSizeModule extends ReactContextBaseJavaModule {
  public static final String NAME = "MazadatFileSize";

  public MazadatFileSizeModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void getFileSize(String path, String outputType, Promise promise) {
    File file = new File(path.replace(" ", "\\ "));
    float size = (float) file.length();
    if (outputType.equalsIgnoreCase("gb")) {
      size = size / 1000000000.0f;
    }else if (outputType.equalsIgnoreCase("mb")) {
      size = size / 1000000.0f;
    }else if (outputType.equalsIgnoreCase("kb")) {
      size = size / 1000.0f;
    }

    promise.resolve(size);
  }
}
