import { Card } from '../model/card.model';
import { Task } from '../model/task.model';
import { CardService } from "./card.service";
import { TaskService } from './task.service';


describe('CardService', () => {
    let service: CardService;
    let taskService: TaskService;

    beforeEach(()=> {
        taskService = new TaskService();
        service = new CardService(taskService);
        localStorage.clear();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
  
    it('method: createCard()', () => {
      // Create Task
      const task: Task = new Task(1, 'To Do');
      taskService.taskList.push(task);

      // Create Card Inside Task
      const card: Card = new Card(0, 'Project Assignment');
      const taskIndx: number = 0;
      
      // method call
      service.createCard(card, taskIndx);

      // Assert
      expect(taskService.taskList[taskIndx].cards.length).toBe(1);
    });
    
    it('method: deleteCard()', () => {

      // Create Task
      const task: Task = new Task(1, 'To Do');
      
      // Create Card Inside Task
      const card: Card = new Card(1, 'Project Assignment');
      
      // add card to task
      task.cards.push(card);

      // add task to task list array
      taskService.taskList.push(task);

      const cardId: number = 1;
      // method call
      service.deleteCard(cardId);

      // Assert
      expect(taskService.taskList[0].cards.length).toBe(0);
    });
    
    it('method: updateCard()', () => {
      // Create Task
      const task: Task = new Task(1, 'To Do');
      
      // Create Card Inside Task
      const card: Card = new Card(1, 'Project Assignment');
      
      // add card to task
      task.cards.push(card);

      // add task to task list array
      taskService.taskList.push(task);

      // update card name
      card.name = 'Completing Test Cases';

      // call method to update the card
      service.updateCard(card, 0);

      // Assert
      expect(taskService.taskList[0].cards[0].name).toEqual(card.name);
    });
});