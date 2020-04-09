import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ObjectHelper } from '../object'

interface IProps {
  handleClick?: (e: any) => void
  loading?: boolean
  className?: string
  textOnly?: boolean
  rounded?: boolean
}

class ButtonSubmit extends React.Component<IProps, any> {
  private renderButtonContents() {
    if (this.props.loading) {
      return <CircularProgress className='loader' size={24} />
    }
    if (ObjectHelper.isEmpty(this.props.children)) {
      return <></>
    }
    return this.props.children
  }

  public render() {
    const { handleClick, className, rounded, textOnly, loading } = this.props
    return (
      <Button
        onClick={handleClick}
        className={`button 
        ${className ? className : ''} 
        ${rounded ? '--rounded' : ''} 
        ${textOnly ? '--text' : ''}`}
        disabled={loading}
      >
        {this.renderButtonContents()}
      </Button>
    )
  }
}

export ButtonSubmit
