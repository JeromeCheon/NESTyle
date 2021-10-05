export interface Diary {
  id: string;
  title: string;
  day: Date;
  content: string;
  status: DiaryStatus;
}

enum DiaryStatus {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
