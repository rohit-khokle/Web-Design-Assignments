import ToDoRouter from './todo.route';


export default (app) => {
  app.use('/', ToDoRouter);
}
