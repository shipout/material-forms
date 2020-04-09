export class ObjectHelper {
  static isEmpty(obj: any): boolean {
    let result = false
    if (obj === undefined || obj === null) {
      return true
    }
    if (Object.prototype.toString.call(obj) === '[object Date]') {
      return false
    }
    result = result || this.isStringEmpty(obj)
    result = result || this.isObjectEmpty(obj)
    result = result || this.isArrayEmpty(obj)
    return result
  }

  private static isStringEmpty(obj: any): boolean {
    let result = false
    if (typeof obj === 'string' && obj.length === 0) {
      result = true
    }
    return result
  }

  private static isObjectEmpty(obj: any): boolean {
    let result = false
    if (
      typeof obj === 'object' &&
      Object.keys(obj).length === 0 &&
      // this condition is checking if obj is not file
      obj.name === undefined
    ) {
      result = true
    }
    return result
  }

  private static isArrayEmpty(obj: any): boolean {
    let result = false
    if (this.isArray(obj)) {
      if (obj.length === 0) {
        result = true
      } else {
        let allItemsEmpty = true
        obj.forEach((item: any) => {
          if (!this.isEmpty(item)) {
            allItemsEmpty = false
          }
        })
        result = allItemsEmpty
      }
    }
    return result
  }

  private static isArray(obj: any): boolean {
    let result = false
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      result = true
    }
    return result
  }
}
