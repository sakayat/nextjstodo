"use client";
import style from "@/app/page.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div className={style.wrapper}>
      <nav className={style.menu}>
        <Link href="/" className={style.title}>
          Todo App
        </Link>
        {!session ? (
          <button
            className={style.menu_button}
            onClick={() => signIn("google")}
          >
            Login
          </button>
        ) : (
          <button className={style.menu_button} onClick={() => signOut()}>
            LogOut
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
