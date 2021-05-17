#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(WakeOnLan, NSObject)

RCT_EXTERN_METHOD(wake:(NSString *)mac address:(NSString *)address
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end
