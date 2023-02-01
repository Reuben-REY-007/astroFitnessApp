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