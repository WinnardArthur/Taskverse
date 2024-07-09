"use client";

import React, { ElementRef, useRef } from "react";
import { List } from "@prisma/client";
import { MoreHorizontal, X } from "lucide-react";
import { toast } from "sonner";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FormSubmitButton } from "@/components/form/form-submit-button";
import { Separator } from "@/components/ui/separator";
import { useAction } from "@/hooks/use-action";
import { deleteList } from "@/actions/delete-list";

interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}

export const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute: executeDelete } = useAction(deleteList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" deleted`);
      closeRef.current?.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  // Handle delete
  const onDelete = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeDelete({ id, boardId });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4"></div>
        <PopoverClose asChild ref={closeRef}>
          <Button
            variant="ghost"
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <Button
          onClick={onAddCard}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          variant={"ghost"}
        >
          Add card...
        </Button>
        <form>
          <input hidden name="id" id="id" value={data.id} />
          <input hidden name="boardId" id="boardId" value={data.boardId} />
          <FormSubmitButton
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant="ghost"
          >
            Copy list...
          </FormSubmitButton>
        </form>

        <Separator />

        <form action={onDelete}>
          <input hidden name="id" id="id" value={data.id} />
          <input hidden name="boardId" id="boardId" value={data.boardId} />
          <FormSubmitButton
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant="ghost"
          >
            Delete this list
          </FormSubmitButton>
        </form>
      </PopoverContent>
    </Popover>
  );
};
