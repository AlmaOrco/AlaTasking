export interface Task {
    id: number;
    title: string;
    completed?: boolean;
    remark?: string;
    editing?: boolean;
}
