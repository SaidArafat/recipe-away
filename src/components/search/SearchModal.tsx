"use client";
import React, { useState } from "react";
import Modal from "../ui/modal/Modal";
import SearchInput from "./SearchInput";
import { LuSearch } from "react-icons/lu";

const SearchModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <SearchInput onClose={() => setOpen(false)} />
      </Modal>
      <button
        className="hover:text-primary transition-all duration-500 flex items-center"
        onClick={() => setOpen(true)}
      >
        Search
        <LuSearch className="text-xl font-semibold ml-2" />
      </button>
    </>
  );
};

export default SearchModal;
