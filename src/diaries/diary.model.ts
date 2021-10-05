export interface Diary {
  id: string;
  title: string;
  date: Date;
  content: string;
  status: DiaryStatus;
}

export enum DiaryStatus {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
