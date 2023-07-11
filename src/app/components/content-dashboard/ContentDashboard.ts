export class ContentDashboard {
  title: string | undefined;
  description: string | undefined;
  isChecked: boolean;
  hours: string | undefined;
  lessons: string | undefined;
  status: string | undefined;

  constructor(title: string, description: string, isChecked: boolean, hours: string,lessons: string,status: string) {
    this.title = title;
    this.description = description;
    this.isChecked = isChecked;
    this.hours = hours;
     this.lessons = lessons;
      this.status = status;
  }
}
