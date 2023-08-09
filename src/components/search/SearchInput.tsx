"use client";
import React, { FormEvent, useState } from "react";
import Button from "../ui/button/Button";
import Select from "../ui/select/Select";
import { useRouter } from "next/navigation";

const SearchInput = ({ onClose }: { onClose?: () => void }) => {
  const [category, setCategory] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (category) {
      router.push(`/search?q=${category}`);
      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <form
      className="rounded-lg w-full border-2 p-1 border-[#ccc] flex flex-row"
      onSubmit={handleSubmit}
    >
      <Select onSelectCategory={(item: string) => setCategory(item)} />
      <Button>Search</Button>
    </form>
  );
};

export default SearchInput;
