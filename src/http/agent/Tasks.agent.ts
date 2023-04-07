import {
  GetAllTasksRequest,
  GetAllTasksResponse,
  UpdateTaskRequest,
  UpdateTaskResponse,
  GetTaskRequest,
  GetTaskResponse,
  PostTaskRequest,
  PostTaskResponse,
} from '../model/index';

import { BasicAgent } from './Basic.agent';

class TasksAgent extends BasicAgent {
  constructor() {
    super(process.env.APP_API as string);
  }

  async postTask(body: PostTaskRequest): Promise<PostTaskResponse> {
    const { data } = await this._http.post<PostTaskResponse>('/tasks', { ...body });
    return data;
  }

  async getTask(id: GetTaskRequest): Promise<GetTaskResponse> {
    const { data } = await this._http.get<GetTaskResponse>(`/tasks/${id}`);
    return data;
  }

  async getAllTasks(params?: GetAllTasksRequest): Promise<GetAllTasksResponse> {
    const { data } = await this._http.get<GetAllTasksResponse>('/tasks', { params });
    return data;
  }

  async updateTask(id: number, body: UpdateTaskRequest): Promise<UpdateTaskResponse> {
    const { data } = await this._http.patch<UpdateTaskResponse>(`/tasks/${id}`, { ...body });
    return data;
  }

  async deleteTask(id: number): Promise<void> {
    await this._http.delete(`/tasks/${id}`);
  }
}

export const TasksAgentInstance = new TasksAgent();
