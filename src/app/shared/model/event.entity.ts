export class EventE {
  id: string;
  name: string;
  description: string;
  scheduleAt: string;

  constructor(id: string, name: string, description: string, scheduleAt: string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.scheduleAt = scheduleAt;
  }
}
