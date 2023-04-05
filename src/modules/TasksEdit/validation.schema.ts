import * as Yup from 'yup';

export const schemaTaskEdit = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(3, 'The minimum number of characters is 3')
    .max(150, 'Maximum number of characters is 150'),
  info: Yup.string()
    .required()
    .min(3, 'The minimum number of characters is 3')
    .max(150, 'Maximum number of characters is 150'),
  isImportant: Yup.bool(),
  isDone: Yup.bool(),
});
