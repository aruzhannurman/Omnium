export class MenuItem {
  title: string | undefined;
  icon: string | undefined;
  isActive: boolean;

  constructor(title: string, icon: string, isActive: boolean) {
    this.title = title;
    this.icon = icon;
    this.isActive = isActive;
  }
}
