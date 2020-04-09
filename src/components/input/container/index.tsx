import React from 'react'
import DateIcon from './date'

interface IProps {
  valid?: boolean
  errorMessage?: string
  hintMessage?: string
  children?: any
  inputType?:
    | 'file-input'
    | 'date'
    | 'number'
    | 'checkbox'
    | 'input'
    | 'mini-select'
    | 'multi-select'
    | 'mobile-select'
    | 'select'
    | 'avatar'
    | 'textarea'
  handleOpen?: any
  label?: string
  style?: any
  placeholder?: string
}

class InputContainer extends React.Component<IProps, any> {
  private renderInput(props: IProps) {
    switch (props.inputType) {
      case 'checkbox':
        return React.cloneElement(props.children as React.ReactElement<any>)
      case 'input':
        return React.cloneElement(props.children as React.ReactElement<any>, {
          className: 'input-wrapper',
          variant: 'filled',
          error: this.props.errorMessage ? true : false,
          InputProps: {
            classes: {
              root: 'input-field',
              focused: 'focused',
              error: 'input-error'
            }
          },
          InputLabelProps: {
            classes: {
              root: 'input-label',
              focused: 'focused',
              shrink: 'shrink',
              error: 'label-error'
            }
          }
        })
      case 'textarea':
        return React.cloneElement(props.children as React.ReactElement<any>, {
          className: 'input-wrapper',
          variant: 'filled',
          error: this.props.errorMessage ? true : false,
          InputProps: {
            classes: {
              root: 'input-field',
              focused: 'focused',
              error: 'input-error'
            }
          },
          InputLabelProps: {
            classes: {
              root: 'input-label',
              focused: 'focused',
              shrink: 'shrink',
              error: 'label-error'
            }
          }
        })
      case 'date':
        return (
          <>
            <DateIcon onClick={this.props.handleOpen} className='input.icon' />
            {React.cloneElement(props.children as React.ReactElement<any>, {
              className: 'input-wrapper',
              variant: 'filled',
              error: this.props.errorMessage ? true : false,
              InputProps: {
                classes: {
                  root: 'input-field',
                  focused: 'focused',
                  error: 'input-error'
                }
              }
              // InputLabelProps: {
              //   classes: {
              //     root: 'input-label',
              //     focused: 'focused',
              //     shrink: 'shrink',
              //     error: 'label-error'
              //   }
              // }
            })}
          </>
        )
      case 'multi-select':
        return (
          <>
            {/* {this.props.label ? (
              <label className='multi-select-label'>{this.props.label}</label>
            ) : null} */}
            {React.cloneElement(props.children as React.ReactElement<any>, {
              classNamePrefix: 'react-select'
            })}
          </>
        )
      case 'mobile-select':
        return (
          <>
            {/* {this.props.label ? (
                <label className='multi-select-label'>{this.props.label}</label>
              ) : null} */}
            {React.cloneElement(props.children as React.ReactElement<any>, {})}
          </>
        )
      case 'select':
        return (
          <>
            {/* {this.props.label ? (
              <label className='select-label'>{this.props.label}</label>
            ) : null} */}
            {React.cloneElement(props.children as React.ReactElement<any>, {
              classNamePrefix: 'react-select'
            })}
          </>
        )
      case 'mini-select':
        return (
          <>
            {React.cloneElement(props.children as React.ReactElement<any>, {})}
          </>
        )
      case 'file-input':
        return (
          <>
            {React.cloneElement(props.children as React.ReactElement<any>, {})}
          </>
        )
      case 'avatar':
        return (
          <>
            {React.cloneElement(props.children as React.ReactElement<any>, {})}
          </>
        )
      default:
        return React.cloneElement(props.children as React.ReactElement<any>, {
          className: 'input-wrapper',
          variant: 'filled',
          error: this.props.errorMessage ? true : false,
          InputProps: {
            classes: {
              root: 'input-field',
              focused: 'focused',
              error: 'input-error'
            }
          },
          InputLabelProps: {
            classes: {
              root: 'input-label',
              focused: 'focused',
              shrink: 'shrink',
              error: 'label-error'
            }
          }
        })
    }
  }

  public render() {
    // 1582271272
    return (
      <div
        style={this.props.style}
        className={`input-container --${this.props.inputType}`}
      >
        {this.props.label ? (
          <label className='title'>{this.props.label}</label>
        ) : null}
        {this.renderInput(this.props)}
        {this.props.errorMessage ? (
          <label className='error'>{this.props.errorMessage}</label>
        ) : null}
        {this.props.hintMessage && !this.props.errorMessage ? (
          <label className='hint-msg'>{this.props.hintMessage}</label>
        ) : null}
      </div>
    )
  }
}

export default InputContainer
