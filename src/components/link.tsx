import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { ObjectHelper } from '../object'

interface IProps {
  url: string
  className?: string
  contained?: boolean
  color?: 'default' | 'inherit' | 'primary' | 'secondary'
  rounded?: boolean
}

export class ButtonLink extends React.Component<IProps, any> {
  public render() {
    let color = this.props.color
    if (ObjectHelper.isEmpty(this.props.color)) {
      color = 'default'
    }

    return (
      <Button
        className={`button ${
          this.props.className ? this.props.className : ''
        } ${this.props.rounded ? '--rounded' : ''}`}
        variant={this.props.contained ? 'contained' : 'text'}
        color={color}
      >
        <Link to={this.props.url}>{this.props.children}</Link>
      </Button>
    )
  }
}
