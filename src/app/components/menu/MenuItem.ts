export class MenuItem {
  title: string | undefined;
  icon: string | undefined;
  link:string| undefined;

  constructor(title: string, icon: string, link:string) {
    this.title = title;
    this.icon = icon;
    this.link=link;
  }
}
