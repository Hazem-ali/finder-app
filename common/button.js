"use client";
import buttonStyles from "@/styles/global/button.module.css";
import { useRouter } from "next/navigation";

export default function Button({ text, bg, onClick, customClasses, href }) {
  const buttonBackground = bg || buttonStyles.bgPrimary;
  const router = useRouter();

  return (
    <button
      className={
        customClasses || `w-3/12 grid ${buttonStyles.btn} ${buttonBackground}  `
      }
      onClick={() => {
        href && router.push(href);
        onClick && onClick();
      }}
    >
      {text}
    </button>
  );
}
