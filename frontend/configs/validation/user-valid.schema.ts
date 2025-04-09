import * as yup from 'yup'

export const userRegisterSchema = yup.object().shape({
    name:yup.string().required('Обязательно для заполнения'),
    surname:yup.string().required('Обязательно для заполнения'),
    email:yup.string().required('Обязательно для заполнения').email('Должно быть почтой'),
    password:yup.string().required('Обязательно для заполнения').min(6,'Минимум 6 символов')
});

export const userLoginSchema = yup.object().shape({
    email:yup.string().required('Обязательно для заполнения').email('Должно быть почтой'),
    password:yup.string().required('Обязательно для заполнения').min(6,'Минимум 6 символов')
})

