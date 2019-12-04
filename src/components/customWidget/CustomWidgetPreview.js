import React from 'react';

export const CustomWidgetPreview = (props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.value}} />
  );
}