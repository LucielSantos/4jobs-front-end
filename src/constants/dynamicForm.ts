export interface IDynamicFormField {
  label: string;
  value: TDynamicFormValue;
}

export type TDynamicFormValue = keyof typeof dynamicFormFieldValues;

export const dynamicFormFieldValues = {
  text: 'text',
  integer: 'integer',
  decimal: 'decimal',
  date: 'date',
  textArea: 'textArea',
  url: 'url',
};

export const dynamicFormFields: IDynamicFormField[] = [
  { value: 'text', label: 'Texto' },
  { value: 'integer', label: 'Inteiro' },
  { value: 'decimal', label: 'Decimal' },
  { value: 'date', label: 'Data' },
  { value: 'textArea', label: 'Área de texto' },
  { value: 'url', label: 'URL' },
];
