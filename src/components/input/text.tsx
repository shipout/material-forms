import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputContainer from './container'
import BaseComponent from '../base/component'
import { ObjectHelper } from '../../object'

interface IState {
  value?: string
  errorMessage?: string
  valid: boolean
}
interface IProps {
  value?: string
  label?: string
  hintMessage?: string
  required?: boolean
  requiredMsg?: string
  valid?: boolean
  errorMessage?: string
  multiline?: boolean
  rowsMax?: string
  placeholder?: string
  style?: any
}

export class TextInput extends BaseComponent<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      errorMessage: '',
      value: '',
      valid: true
    }
  }

  // 1577340798, replace componentWillReceiveProps with getDerivedStateFromProps
  // https://hackernoon.com/replacing-componentwillreceiveprops-with-getderivedstatefromprops-c3956f7ce607
  static getDerivedStateFromProps(nextProps: IProps, prevState: any) {
    const errorMessage = TextInput.calcStateAttr(
      nextProps,
      prevState,
      'errorMessage'
    )
    const valid = TextInput.calcStateAttr(nextProps, prevState, 'valid')
    const value = TextInput.calcStateAttr(nextProps, prevState, 'value')
    return {
      errorMessage,
      value,
      valid
    }
  }

  public validate = (): boolean => {
    let valid = true
    if (this.props.required) {
      if (ObjectHelper.isEmpty(this.state.value)) {
        valid = false
        this.setState({
          valid: false,
          errorMessage: this.props.requiredMsg
        })
      }
    }
    return valid
  }

  public value = (): string | undefined => {
    return this.state.value
  }

  protected onChange = (event: any) => {
    this.setState({ value: event.target.value, valid: true, errorMessage: '' })
  }

  private renderMultiLineTextInput = () => {
    return (
      <TextField
        label={this.props.placeholder}
        value={this.state.value}
        type='text'
        margin='normal'
        className='form-input'
        fullWidth={true}
        multiline={true}
        rows={3}
        rowsMax={6}
        required={this.props.required}
        onChange={this.onChange}
      />
    )
  }

  private renderTextInput = () => {
    if (this.props.multiline) {
      return this.renderMultiLineTextInput()
    } else {
      return (
        <TextField
          label={this.props.placeholder}
          value={this.state.value}
          type='text'
          margin='normal'
          className='form-input'
          fullWidth={true}
          required={this.props.required}
          onChange={this.onChange}
        />
      )
    }
  }

  public render() {
    return (
      <InputContainer
        valid={this.state.valid}
        hintMessage={this.props.hintMessage}
        errorMessage={this.state.errorMessage}
        inputType={this.props.multiline ? 'textarea' : 'input'}
        label={this.props.label}
        placeholder={this.props.placeholder}
        style={this.props.style}
      >
        {this.renderTextInput()}
      </InputContainer>
    )
  }
}
