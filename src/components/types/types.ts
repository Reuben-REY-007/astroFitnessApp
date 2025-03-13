import { type } from 'os';
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}
export type NavProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean
};

export type LinkProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export type ActionButtonProps = {
  children: React.ReactNode
  setSelectedPage: (value: SelectedPage) => void
}

export type HomepageProps = {
  setSelectedPage: (value: SelectedPage) => void
}

export type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void;
}

export type HTextProps = {
  children: string;
}

export type BenefitCardProps = {
  title: string;
  icon: JSX.Element
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

export type BenefitProps = {
  icon: JSX.Element
  title: string;
  description: string;
}
export type DescriptionProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type OurClassesProps = {
  setSelectedPage: (value: SelectedPage) => void;
}

export type ClassProps = {
  name: string;
  description?: string;
  image: string;
};

export type ContactUsProps = {
  setSelectedPage: (value: SelectedPage) => void;
}