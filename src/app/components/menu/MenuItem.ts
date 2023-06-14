export class MenuItem {
  title: string | undefined;
  icon: string | undefined;

  constructor(title: string, icon: string) {
    this.title = title;
    this.icon = icon;
  }
}
