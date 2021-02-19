import {
  DateTimeField,
  DateTimeInput,
  PickerField,
  PickerInput,
  InputField,
  TextInput,
  TextField,
} from '@huds0n/inputs';

import { ThemerTypes } from '@huds0n/themer';

export function createThemedInputs<cT extends ThemerTypes.CustomTheme>(
  Themer: ThemerTypes.ThemerClass<cT>,
) {
  return {
    $InputField: Themer.createComponent(InputField, InputField.theming.props)
      .addProps(fieldProps)
      .setMemo(true),

    $PickerInput: Themer.createComponent(PickerInput, PickerInput.theming.props)
      .addProps({
        ...inputBaseProps,
        ...pickerInputProps,
      })
      .setMemo(true),

    $PickerField: Themer.createComponent(PickerField, PickerField.theming.props)
      .addProps({
        ...fieldProps,
        ...pickerProps,
      })
      .setMemo(true),

    $TextInput: Themer.createComponent(TextInput, TextInput.theming.props)
      .addProps(inputBaseProps)
      .setMemo(true),

    $TextField: Themer.createComponent(TextField, TextField.theming.props)
      .addProps({
        ...inputBaseProps,
        ...fieldProps,
      })
      .setMemo(true),

    $DateTimeInput: Themer.createComponent(
      DateTimeInput,
      DateTimeInput.theming.props,
    )
      .addProps({
        ...inputBaseProps,
        ...pickerInputProps,
      })
      .setMemo(true),

    $DateTimeField: Themer.createComponent(
      DateTimeField,
      DateTimeField.theming.props,
    )
      .addProps({
        ...fieldProps,
        ...pickerProps,
      })
      .setMemo(true),
  };
}

const inputBaseProps = {
  disabledStyle: { color: 'DISABLED' },
  errorStyle: { color: 'ERROR' },
  style: {
    borderColor: 'BORDER',
    color: 'TEXT',
    fontSize: 'BODY',
    maxWidth: 'INPUT_WIDTH',
    width: 'FULL',
  },
  useColorScheme: true,
} as const;

const fieldProps = {
  borderColor: 'BORDER',
  containerStyle: {
    maxWidth: 'INPUT_WIDTH',
    width: 'FULL',
  },
  errorColor: 'ERROR',
  messageStyle: { fontSize: 'NOTE' },
  titleHighlightColor: 'PRIMARY',
  titleStyle: { color: 'TEXT', fontSize: 'BODY' },
  useColorScheme: true,
} as const;

const pickerProps = {
  disabledPlaceholderStyle: { color: 'DISABLED' },
  nullPlaceholderStyle: { color: 'GREY' },
  placeholderStyle: { color: 'TEXT', fontSize: 'BODY' },
} as const;

const pickerInputProps = {
  ...pickerProps,
  placeholderStyle: { color: 'TEXT', fontSize: 'BODY', padding: 'S' },
  outputContainerStyle: {
    alignItems: 'center',
    maxWidth: 'INPUT_WIDTH',
    width: 'FULL',
  },
} as const;
