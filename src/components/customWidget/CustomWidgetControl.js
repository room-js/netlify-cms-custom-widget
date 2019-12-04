import React, { PureComponent } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Note that control component of a custom widget can't be
// a functional component. It will not work for some reason.
export class CustomWidgetControl extends PureComponent {
  onChange = (event, editor) => {
    const data = editor.getData();
    this.props.onChange(data);
  }

  render() {
    return (
      <CKEditor
        editor={ ClassicEditor }
        onChange={this.onChange}
      />
    );
  }
}