import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'store',
    name: 'Home',
    type: 'link',
    icon: 'home'
  },
  {
    state: 'categorias',
    name: 'Categorias',
    type: 'link',
    icon: 'category'
  },
  {
    state: 'eventos',
    name: 'Eventos',
    type: 'link',
    icon: 'calendar_today'
  },
  {
    state: 'pessoas',
    name: 'Pessoas',
    type: 'link',
    icon: 'group'
  }

];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
