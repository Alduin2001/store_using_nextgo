'use client'
import { createCategorySchema } from "@/configs/validation/category-valid.shema";
import { CreateCategoryDto } from "@/interfaces/dto/category.dto";
import { useCategoryStore } from "@/store/CategoryStore";
import { Dialog, DialogPanel, DialogTitle,Description, Field, Label, Input, Button } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import {useForm} from 'react-hook-form';

interface ModalCategoryProps{
  initialName:string
}

export const EditModalCategory:FC<ModalCategoryProps> = ({initialName})=>{
    console.log(name);
    const {isOpenEdit,closeEdit,updateCategory} = useCategoryStore();
    const {register,reset,handleSubmit,formState:{errors},setValue} = useForm<CreateCategoryDto>({  
        resolver:yupResolver(createCategorySchema),
        mode:'all'
    });
    const update = async (data:CreateCategoryDto)=>{
        await updateCategory(data);
        reset();
        closeEdit();
    }
    return(
        <Dialog
              open={isOpenEdit}
              onClose={closeEdit}
              className="relative z-50"
            >
              {/* Overlay */}
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                  <DialogTitle className="text-lg font-semibold text-gray-900">
                    Изменение категории
                  </DialogTitle>
                  
                  <Description className="mt-2 text-gray-600">
                    Вы действительно хотите поменять данные?
                  </Description>
                  <form onSubmit={handleSubmit(update)} className="mt-5">
                    <Field className="flex flex-col gap-2">
                        <Label className="italic">Название категории</Label>
                        <Input type="text" {...register('name')} className="outline-none border-b-2 border-green-600 focus:shadow-xl" defaultValue={initialName}/>
                        {errors.name?.message && (<p className="italic text-red-600">{errors.name.message}</p>)}
                    </Field>
                    <div className="mt-6 flex justify-end gap-3">
                    <Button className="px-4 py-2 cursor-pointer bg-blue-600 text-white hover:bg-blue-700 rounded" type="submit">Подтвердить</Button>
                    <button
                      type="button"
                      onClick={closeEdit}
                      className="px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 rounded border border-gray-300"
                    >
                      Отменить
                    </button>
                  </div>
                  </form>
                </DialogPanel>
              </div>
            </Dialog>
    )
}