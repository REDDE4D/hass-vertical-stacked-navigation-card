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

export interface PaddingConfig {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export interface ColorConfig {
  main?: string;
  sub?: string;
}

export interface SizeConfig {
  main?: string;
  sub?: string;
}

export interface CustomStyles {
  colors?: {
    background?: ColorConfig;
    text?: ColorConfig;
    hover?: ColorConfig;
    active?: ColorConfig;
    active_text?: ColorConfig;
    icon?: ColorConfig;
  };
  font_size?: {
    text?: SizeConfig;
    icon?: SizeConfig;
  };
  font_weight?: {
    main?: string;
    sub?: string;
    main_active?: string;
    sub_active?: string;
  };
  font_family?: {
    main?: string;
    sub?: string;
  };
  border_radius?: {
    main?: string;
    sub?: string;
    card?: string;
  };
  padding?: {
    main?: PaddingConfig;
    sub?: PaddingConfig;
    content?: string;
    card?: string;
  };
  spacing?: {
    nav_items?: string;
    icon?: SizeConfig;
  };
  border?: {
    main?: string;
    sub?: string;
  };
  box_shadow?: {
    main?: string;
    sub?: string;
    main_hover?: string;
    sub_hover?: string;
    main_active?: string;
    sub_active?: string;
    card?: string;
  };
  header?: {
    font_size?: string;
    font_weight?: string;
    font_family?: string;
    color?: string;
    padding?: PaddingConfig;
  };
  transitions?: {
    duration?: string;
  };
  subnav_indicator?: {
    size?: string;
    color?: string;
  };
}

export interface Config {
  nav_name?: string;
  nav_items: NavItem[];
  custom_styles?: CustomStyles;
}

export type NavItemProperty =
  | "name"
  | "icon"
  | "destination"
  | "active"
  | "unfolded";

export type SubNavItemProperty = "name" | "icon" | "destination" | "active";
export type ColorType = "background" | "text" | "hover" | "active" | "active_text" | "icon";
export type SubColorType = "main" | "sub";
export type FontSizeType = "text" | "icon";
export type SubFontSizeType = "main" | "sub";
export type FontWeightType = "main" | "sub" | "main_active" | "sub_active";
export type FontFamilyType = "main" | "sub";
export type BorderRadiusType = "main" | "sub" | "card";
export type PaddingType = "main" | "sub" | "content" | "card";
export type PaddingSubType = "top" | "right" | "bottom" | "left";
export type SpacingType = "nav_items" | "icon";
export type BorderType = "main" | "sub";
export type BoxShadowType = "main" | "sub" | "main_hover" | "sub_hover" | "main_active" | "sub_active" | "card";
export type HeaderPropertyType = "font_size" | "font_weight" | "font_family" | "color" | "padding";
