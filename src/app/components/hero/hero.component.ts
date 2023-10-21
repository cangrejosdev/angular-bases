import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
get capitalizedName(): string
{
  return this.name.toUpperCase();
}

getDescription(): string{

  return `${this.name}  -  ${this.age}`
}

cambiarNombre(){
   this.name = 'Spiderman';
    console.log(this.name);
}
cambiarAge(){

  this.age = 30;
  console.log(this.age);
 }


resetForm():void {
  this.name = 'ironman';
  this.age = 45;
}
}
