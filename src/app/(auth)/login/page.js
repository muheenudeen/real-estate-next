"use client";

import { useState } from "react";
import Modal from "@/modal/loginModal/loginModal";
import AuthForm from "@/components/Auth/AuthForm/AuthForm";

export default function LoginPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsLoginModalOpen(true)}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <AuthForm isLoginModal onClose={() => setIsLoginModalOpen(false)} />
      </Modal>
    </div>
  );
}