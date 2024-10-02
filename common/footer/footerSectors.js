import React from "react";
import FooterSector from "./footerSector";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./menus";

export default function FooterSectors() {
  return (
    <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 sm:px-8 lg:grid-cols-4">
      <FooterSector Links={PRODUCTS} title="PRODUCTS" />
      <FooterSector Links={RESOURCES} title="RESOURCES" />
      <FooterSector Links={COMPANY} title="COMPANY" />
      <FooterSector Links={SUPPORT} title="SUPPORT" />
    </div>
  );
}
