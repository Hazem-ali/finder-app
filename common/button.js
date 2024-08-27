"use client";
import btnStyles from "@/styles/global/button.module.css";
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
  const buttonBackground = bg || btnStyles.bgPrimary;
  const router = useRouter();

  return (
    <button
      className={
        className ||
        `grid max-w-40 ${btnStyles.btn} ${buttonBackground} ${customClasses}`
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
