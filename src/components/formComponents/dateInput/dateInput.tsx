import React, { useCallback, useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptBrLocale from 'date-fns/locale/pt-BR';

import { ErrorMessage } from '../';
import { Container } from './styles';

interface IProps {
  name: string;
  notErrorMargin?: boolean;
  label?: string;
}

const DateInputComponent: React.FC<IProps> = ({
  name,
  notErrorMargin = false,
  label,
}) => {
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    defaultValue ? new Date(defaultValue) : null
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return selectedDate?.toLocaleDateString() || '';
      },
    });
  }, [fieldName, registerField, inputRef, selectedDate]);

  const handleDateChange = useCallback(
    (date: Date | null) => {
      setSelectedDate(date);
      error && clearError();
    },
    [clearError, error]
  );

  return (
    <Container>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBrLocale}>
        <KeyboardDatePicker
          id="date-picker-inline"
          views={['year', 'month', 'date']}
          variant="inline"
          inputVariant="outlined"
          format="dd/MM/yyyy"
          margin="none"
          size="small"
          autoOk
          inputRef={inputRef}
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          error={Boolean(error)}
        />
      </MuiPickersUtilsProvider>

      {notErrorMargin ? (
        error && <ErrorMessage>{error && error}</ErrorMessage>
      ) : (
        <ErrorMessage>{error || ' '}</ErrorMessage>
      )}
    </Container>
  );
};

export const DateInput = React.memo(DateInputComponent);
