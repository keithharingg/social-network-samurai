import React from 'react';
import styles from './FormsControls.module.css';

export const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={styles.formControl + '' + (hasError ? styles.error : '')}>
        {props.children}
        {hasError && <span>{meta.error}</span>}
      </div>
    );
  };

  export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return (
      <FormControl {...props}>
          <textarea {...restProps} {...input} />
      </FormControl>
    );
  };
  
  export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return (
      <FormControl {...props}>
          <input {...restProps} {...input} />
      </FormControl>
    );
  };

// export const Textarea = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={styles.formControl + '' + (hasError ? styles.error : '')}>
//       <textarea {...props} {...input} />
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//       <div className={styles.formControl + '' + (hasError ? styles.error : '')}>
//         <input {...props} {...input} />
//         {hasError && <span>{meta.error}</span>}
//       </div>
//     );
//   };


