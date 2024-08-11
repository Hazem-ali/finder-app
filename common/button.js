"use client";
import buttonStyles from "@/styles/global/button.module.css";
import { useRouter } from "next/navigation";

export default function Button({
  text,
  bg,
  onClick,
  className,
  customClasses,
  href,
  ...rest
}) {
  const buttonBackground = bg || buttonStyles.bgPrimary;
  const router = useRouter();

  return (
    <button
      className={
        className ||
        `w-3/12 grid ${buttonStyles.btn} ${buttonBackground} ${customClasses}`
      }
      onClick={() => {
        href && router.push(href);
        onClick && onClick();
      }}
      {...rest}
    >
      {text}
    </button>
  );
}
