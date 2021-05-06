import React from "react";
import {
  Create,
  Edit,
  List,
  Datagrid,
  TextField,
  DisabledInput,
  SimpleForm,
  TextInput
} from "react-admin";
import { Filter, ReferenceInput, SelectInput } from "react-admin";

const MobileFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Mobile" source="brand" reference="mobile" allowEmpty>
      <SelectInput optionText="brand" />
    </ReferenceInput>
  </Filter>
);

export const MobileList = (props) => (
  <List filters={<MobileFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="brand" />
      <TextField source="price" />
      <TextField source="Ram" />
      <TextField source="Rom" />
    </Datagrid>
  </List>
);

export const MobileEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="brand" />
      <TextInput source="price" />
      <TextInput source="Ram" />
      <TextInput source="Rom" />
    </SimpleForm>
  </Edit>
);

export const MobileCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="brand" />
      <TextInput source="price" />
      <TextInput source="Ram" />
      <TextInput source="Rom" />
    </SimpleForm>
  </Create>
);
