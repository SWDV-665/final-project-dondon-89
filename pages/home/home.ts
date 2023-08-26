import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  tasks: { text: string; completed: boolean }[] = [];
  newTask: string = '';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) { }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  onTaskKeyUp(event: KeyboardEvent, task: any) {
    if (event.key === 'Delete') {
      this.deleteTask(task);
    }
  }
}
