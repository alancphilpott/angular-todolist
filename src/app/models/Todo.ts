export class Todo {
  constructor(
    private _id: number,
    private _title: string,
    private _completed: boolean
  ) {}

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get isCompleted() {
    return this._completed;
  }

  set completed(complete: boolean) {
    this._completed = complete;
  }

  toString(): string {
    return `ID: ${this.id} | Title: ${this.title} | Completed: ${this.isCompleted}`;
  }
}
