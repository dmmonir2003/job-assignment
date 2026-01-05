import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { NAVIGATION_ITEMS } from "@/constants/appConstants";

export function Navbar() {
  return (
    <nav
      className="mx-auto mt-10 w-full max-w-300 h-20.25 bg-white rounded-[200px] px-5 md:ml-30 md:mr-30 py-5 flex items-center justify-between z-50"
      style={{
        opacity: 1,
        boxShadow:
          "var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/siteLogo.svg"
          alt="Coup"
          width={107}
          height={34}
          priority
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-99.25 items-center justify-between gap-4 h-9.5 font-medium text-[16px]">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-[#8C97A8] hover:text-black transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <button
        className="
    group relative overflow-hidden isolate z-1
    will-change-transform transform-gpu

    w-34.5 h-10.25
    rounded-[43.62px]

    border border-white/20
    group-hover:border-white

    font-medium text-[16px] leading-[120%] tracking-[-2%]
    flex items-center justify-center

    transition-all duration-300 ease-in-out
    hover:shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]
  "
      >
        {/* 1️⃣ BLUE BACKGROUND */}
        <span className="absolute inset-0 bg-brand z-0" />

        {/* 2️⃣ WHITE EXPANDING CIRCLE */}
        <span
          className="
      absolute z-10
      top-1/2 right-0
      translate-x-1/2 -translate-y-1/2
      w-75 h-75
      bg-white rounded-full
      scale-0
      transition-transform duration-500 ease-out
      group-hover:scale-100
    "
        />

        {/* 3️⃣ TEXT */}
        <span className="relative z-20 text-white transition-colors duration-300 group-hover:text-brand">
          Contact Sales
        </span>
      </button>

      {/* Mobile Menu */}
      <MobileMenu menuItems={NAVIGATION_ITEMS} />
    </nav>
  );
}
