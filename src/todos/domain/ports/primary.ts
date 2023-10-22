import { Either } from 'purify-ts';
import type { Todo } from '../models/todo.js';
import type { Error } from '../models/error.js';

export interface FetchTodosByIds {
  (ids: string[]): Promise<Either<Error, Todo[]>>;
}
