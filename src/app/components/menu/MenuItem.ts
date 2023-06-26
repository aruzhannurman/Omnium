export class MenuItem {
  title: string | undefined;
  icon: string | undefined;
  isActive: boolean;
  link: string | undefined;

  constructor(title: string, icon: string, isActive: boolean, link: string) {
    this.title = title;
    this.icon = icon;
    this.isActive = isActive;
    this.link = link;
  }
}
