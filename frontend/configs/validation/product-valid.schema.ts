import * as yup from 'yup'

export const productValidSchema = yup.object().shape({
    categoryId:yup.number().required('Обязательно для заполнения'),
    name:yup.string().required('Обязательно для заполнения'),
    description:yup.string().required('Обязательно для заполнения'),
    price:yup.number().required('Обязательно для заполнения'),
    count:yup.number().required('Обязательно для заполнения').min(1,'Минимум 1 товар должен быть')
});