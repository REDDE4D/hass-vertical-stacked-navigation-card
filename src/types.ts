export interface NavItem {
  name: string;
  icon: string;
  destination: string;
  active?: boolean;
  sub_nav_items?: SubNavItem[];
  unfolded?: boolean;
}

export interface SubNavItem {
  name: string;
  icon: string;
  destination: string;
  active?: boolean;
}

export interface CustomStyles {
  colors?: {
    background?: {
      main?: string;
      sub?: string;
    };
    text?: {
      main?: string;
      sub?: string;
    };
    hover?: {
      main?: string;
      sub?: string;
    };
    active?: {
      main?: string;
      sub?: string;
    };
  };
  font_size?: {
    main?: string;
    sub?: string;
  };
}

export interface Config {
  nav_name?: string;
  nav_items: NavItem[];
  custom_styles?: CustomStyles;
}
