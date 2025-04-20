'use client'
import { useProductStore } from "@/store/ProductStore";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FC } from "react";

export const DeleteProductModal: FC = () => {
  const {
    isOpenDelete,
    selectedId,
    closeDeleteModal,
    deleteProduct,
  } = useProductStore();

  const handleDelete = async () => {
    if (selectedId) {
      await deleteProduct();
      closeDeleteModal();
    }
  };

  return (
    <Dialog
      open={isOpenDelete}
      onClose={closeDeleteModal}
      className="relative z-50"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Удаление продукта
          </DialogTitle>
          
          <Description className="mt-2 text-gray-600">
            Вы действительно хотите удалить этот продукт?
          </Description>
          <div className="mt-6 flex justify-end gap-3">
          <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 cursor-pointer bg-red-600 text-white hover:bg-red-700 rounded"
            >
              Подтвердить
            </button>

            <button
              type="button"
              onClick={closeDeleteModal}
              className="px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 rounded border border-gray-300"
            >
              Отменить
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};