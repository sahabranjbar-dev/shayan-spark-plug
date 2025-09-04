"use client";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  id: string;
  refetch: () => void;
}

const RowTableButtons = ({ id, refetch }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const onDeleteHandler = async () => {
    setLoading(true);
    const response = await fetch(`/api/dashboard/products?id=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setOpen(false);
      refetch();
    }
    setLoading(false);
  };
  return (
    <>
      <Link href={`/dashboard/products/${id}`}>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Pencil size={16} />
          ویرایش
        </Button>
      </Link>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button
            variant="destructive"
            size="sm"
            className="flex items-center gap-1"
          >
            <Trash2 size={16} />
            حذف
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              آیا از تصمیم خود اطمینان دارید؟
            </DialogTitle>
            <DialogDescription className="text-center my-2">
              با تایید و حذف تمام اطلاعات مربوط به این محصول حذف خواهد شد
              <Button
                onClick={onDeleteHandler}
                variant="destructive"
                type="button"
                className="m-4 disabled:bg-gray-500"
                disabled={loading}
              >
                {loading ? "در حال حذف" : "تایید حذف"}
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RowTableButtons;
