import { ReactElement } from "react";
import { iconsData } from "../assets/icons/iconos";
import { IconosInterface } from "../interfaces/iconos.interfaces";

export const getIcon = (icon: string): ReactElement => {
  const iconos: IconosInterface = iconsData;

  const icono = iconos[icon as keyof typeof iconos];

  return icono.icon;
};
