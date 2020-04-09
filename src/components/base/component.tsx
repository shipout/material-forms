import React from 'react'
import { ObjectHelper } from '../../object'

class BaseComponent<P, S> extends React.Component<P, S> {
  static calcStateAttr(nextProps: any, prevState: any, attrName: string): any {
    if (
      !ObjectHelper.isEmpty(prevState) &&
      !ObjectHelper.isEmpty(prevState[attrName])
    ) {
      return prevState[attrName]
    }
    if (!ObjectHelper.isEmpty(nextProps[attrName])) {
      return nextProps[attrName]
    }
  }
}

export default BaseComponent
