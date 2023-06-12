import { Component, OnInit } from '@angular/core';
 
interface NameWithIcon {
  name: string;
  iconLink: string;
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})

export class TodosComponent {
  // todos: Todo[]=[];
  // inputTodo:string="";
  randomNamesWithIcons: NameWithIcon[] = [];

  constructor() {
    this.generateRandomNamesWithIcons();
  }

generateRandomNamesWithIcons() {
    const names = ['John', 'Jane', 'Mike', 'Lisa', 'Tom'];
    const icons = [
      './assets/link.png',
      './assets/link.png',
      './assets/link.png',
      './assets/link.png',
      './assets/link.png',
    ];

    for (let i = 0; i < names.length; i++) {
      const randomIndex = Math.floor(Math.random() * icons.length);
      const nameWithIcon: NameWithIcon = {
        name: names[i],
        iconLink: icons[randomIndex]
      };
      this.randomNamesWithIcons.push(nameWithIcon);
    }
  // ngOnInit(): void {
  //   this.todos = [
  //     {
  //       content: 'first',
  //       icons: 'https://example.com/icon1.png',
  //     },
  //     {
  //       content: 'second',
  //       icons: 'https://example.com/icon1.png',
  //     },
  //   ];
  // }


//   toggleDone (idx:number){
//     this.todos.map((v,i)=>{
//       if(i == idx) v.completed = !v.completed;
      
//       return v;
//     })
//   };

//   deleteToDo(idx:number){
//     this.todos=this.todos.filter((v,i)=> i!==idx);

//   }

//   addTodo(){
//     this.todos.push({
//       content:this.inputTodo,
//       completed:false
//     })
  
//   this.inputTodo="";
// }
 } }
