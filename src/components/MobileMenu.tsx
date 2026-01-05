"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

interface MobileMenuProps {
  menuItems: readonly { name: string; href: string }[];
}

export function MobileMenu({ menuItems }: MobileMenuProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex flex-col justify-center items-center p-2 md:hidden focus:outline-none">
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Dialog.Content className="fixed top-0 right-0 w-[70%] max-w-xs h-full bg-white p-6 flex flex-col gap-6 shadow-lg z-50 rounded-l-xl">
          {menuItems.map((item) => (
            <Dialog.Close asChild key={item.name}>
              <Link
                href={item.href}
                className="text-lg font-medium hover:text-brand transition-colors"
              >
                {item.name}
              </Link>
            </Dialog.Close>
          ))}

          <button className="mt-auto w-full h-10.25 bg-brand text-white rounded-[43.62px] font-medium text-[16px] hover:brightness-110 transition-all">
            Contact Sales
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
