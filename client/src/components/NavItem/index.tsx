"use client";

import React, { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
  icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function NavItem({
  children,
  href,
  icon,
  onClick,
}: ActiveLinkProps) {
  const pathname = usePathname();

  const active = href === "/" ? pathname === href : pathname!.startsWith(href);

  return (
    <li className={`${active && "text-theme-700"} `}>
      {icon && icon}
      <Link href={href}>{children}</Link>
    </li>
  );
}
