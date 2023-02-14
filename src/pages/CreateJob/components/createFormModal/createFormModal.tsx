import { Grid } from '@material-ui/core';
import { FormHandles, Scope, SubmitHandler, useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '../../../../assets/icons';
import {
  Button,
  Checkbox,
  Flex,
  Form,
  Input,
  Modal,
  Select,
} from '../../../../components';
import { dynamicFormFields } from '../../../../constants';
import { IDynamicFormField } from '../../../../store/ducks/createJob/types';
import { createFormModalValidationSchema } from '../../../../validationSchemas';

import { FieldContainer } from './styles';

interface IProps {
  open: boolean;
  handleClose(value?: false): void;
  name: string;
}

const emptyField: IDynamicFormField = {
  title: '',
  type: 'text',
  required: false,
};

const CreateFormModalComponent: React.FC<IProps> = ({
  name,
  handleClose,
  open,
}) => {
  const { fieldName, registerField } = useField(name);

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<FormHandles>(null);

  const [fields, setFields] = useState<IDynamicFormField[]>([
    { title: '', type: 'text', required: false },
  ]);

  const [formFields, setFormFields] = useState<IDynamicFormField[]>([]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => formFields,
    });
  }, [fieldName, registerField, formFields]);

  const handleSubmit = useCallback<SubmitHandler>(
    (data) => {
      setFormFields(data.fields);
      handleClose();
    },
    [handleClose]
  );

  const onClickAdd = useCallback(() => {
    setFields((oldState) => [...oldState, emptyField]);
  }, []);

  const handleClickRemove = useCallback(
    (removedIndex) => {
      const newFields = fields.filter((field, index) => index !== removedIndex);

      setFields(newFields);
    },
    [fields]
  );

  const handleChangeField = useCallback((value, index, field) => {
    setFields((oldValue) => {
      return oldValue.map((oldField, mapIndex) =>
        mapIndex === index ? { ...oldField, [field]: value } : oldField
      );
    });
  }, []);

  const onClickSubmit = useCallback(() => formRef.current?.submitForm(), []);

  return (
    <Modal
      title="Criar formulário de desafio"
      width="md"
      open={open}
      handleClose={handleClose}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={{ fields }}
        validationSchema={createFormModalValidationSchema}
      >
        {fields.map((field, index) => (
          <Scope path={`fields[${index}]`} key={`fields[${index}]`}>
            <FieldContainer key={`fields[${index}]`}>
              <Grid container>
                <Flex>
                  <Icon
                    name="close"
                    isButton
                    clickable
                    marginLeft="auto"
                    marginBottom="xs"
                    marginTop="xs"
                    onClick={() => handleClickRemove(index)}
                  />
                </Flex>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Input
                    name="title"
                    label="Título"
                    floatingError
                    onChange={(e) =>
                      handleChangeField(e.target.value, index, 'title')
                    }
                    value={field.title}
                  />
                </Grid>

                <Grid item xs={12} sm={5}>
                  <Select
                    name="type"
                    label="Tipo"
                    options={dynamicFormFields}
                    floatingError
                    onChange={(e) =>
                      handleChangeField(e.target.value, index, 'type')
                    }
                    value={field.type}
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Checkbox
                    name="required"
                    label="Resposta obrigatória"
                    floatingError
                    onChange={(e) =>
                      handleChangeField(e.target.checked, index, 'required')
                    }
                    checked={field.required}
                  />
                </Grid>
              </Grid>
            </FieldContainer>
          </Scope>
        ))}

        <Flex>
          <Button
            leftIcon={{
              name: 'add',
              size: 'xs',
              color: 'four',
            }}
            marginRight="auto"
            marginTop="md"
            variant="secondary"
            onClick={onClickAdd}
          >
            Adicionar campo
          </Button>

          <Button marginTop="md" onClick={onClickSubmit}>
            Salvar formulário
          </Button>
        </Flex>
      </Form>

      <input type="hidden" ref={inputRef} />
    </Modal>
  );
};

export const CreateFormModal = React.memo(CreateFormModalComponent);
