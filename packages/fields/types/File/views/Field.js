import React, { Component } from 'react';

import {
  FieldContainer,
  FieldLabel,
  FieldInput,
} from '@keystonejs/ui/src/primitives/fields';
// TODO: Upload component?
import { Input } from '@keystonejs/ui/src/primitives/forms';

export default class FileField extends Component {
  onChange = ({ target: { validity, files: [file] } }) => {
    const { field, onChange } = this.props;
    if (!validity.valid) {
      // TODO - show error state
      return;
    }
    onChange(field, file);
  };
  render() {
    const { autoFocus, field, item } = this.props;
    const file = item[field.path];
    return (
      <FieldContainer>
        <FieldLabel>{field.label}</FieldLabel>
        <FieldInput>
          <Input
            autocomplete="off"
            autoFocus={autoFocus}
            type="file"
            onChange={this.onChange}
          />
        </FieldInput>
        {file ? <a href={file.publicUrl} target="_blank">{(new URL(file.publicUrl)).pathname}</a> : null}
      </FieldContainer>
    );
  }
}
