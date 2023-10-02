import React from "react";
import Head from "./Head";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
        <Head/>
        <div className="fixed top-1 right-1 m-4 z-50">
            <ThemeToggle />
        </div>
        {children}
    </div>
  )
}