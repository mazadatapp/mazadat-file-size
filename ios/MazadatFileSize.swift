@objc(MazadatFileSize)
class MazadatFileSize: NSObject {

  @objc(getFileSize:outputType:withResolver:withRejecter:)
  func getFileSize(path: String, outputType: String, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
      var originalPath=path
      if(!path.contains("file://")){
          originalPath = "file://"+path
      }
      let url = URL(string: originalPath)
      if let data = try? Data(contentsOf: url!){
          let size:Float  = Float(data.count)
          if(outputType.lowercased()=="gb"){
              resolve(size / 1000000000.0)
          }else if(outputType.lowercased()=="mb"){
              resolve(size / 1000000.0)
          }else if(outputType.lowercased()=="kb"){
              resolve(size / 1000.0)
          }else{
              resolve(size)
          }
          
      }else{
          resolve(-1)
      }
  }
}
