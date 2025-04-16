// components/ui/modal/ModalUI.tsx
'use client'
import { useModalStore } from "@/store/ModalStore";
import { Button, Description, Dialog, DialogPanel, DialogTitle, Field, Input } from "@headlessui/react";
import { FC } from "react";
import { Row } from "../grid/Row";

export const ModalUI: FC = () => {
  const { isOpen, close, data } = useModalStore();

  const handleSubmit = async () => {
    if (data.submitFunc) {
      await data.submitFunc?.();
    }
    close();
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={close} 
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Затемнение фона */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <DialogPanel className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <DialogTitle className="text-xl font-bold mb-4">
          {data.title || 'Подтверждение действия'}
        </DialogTitle>

        {data.body && (
          <Description className="mb-6 text-gray-600">
            {data.body}
          </Description>
        )}
        {
          data?.dataUpdate && Object.keys(data?.dataUpdate).map(el=>(<form>
            <Field>
                <Input type="text" value={el}/>
            </Field>
          </form>))
        }
        <Row min="50px" gap={2}>
          <Button
            onClick={close}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            {data.cancelText}
          </Button>
          
          <Button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
          >
            {data.submitText}
          </Button>
        </Row>
      </DialogPanel>
    </Dialog>
  );
};