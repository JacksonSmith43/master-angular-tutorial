export interface Task {
    id: string;
    userId: string;
    summary: string;
    title: string;
    dueDate: string;
}

export interface AddTaskData{
    title: string;
    summary: string;
    date: string;
}