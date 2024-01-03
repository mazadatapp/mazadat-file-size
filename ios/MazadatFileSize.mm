#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MazadatFileSize, NSObject)

RCT_EXTERN_METHOD(getFileSize:(NSString *)path outputType:(NSString *)outputType
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
