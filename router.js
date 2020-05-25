import { Router } from "https://deno.land/x/oak/mod.ts";
import getTodos from "./controllers/get.js";
import postTodo from "./controllers/post.js";
import deleteTodo from "./controllers/delete.js";
import putTodo from "./controllers/put.js";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Todo Application using Deno";
});

router
  .get("/todos", getTodos)
  .post("/todos", postTodo)
  .delete("/todos/:id", deleteTodo)
  .put("/todos/:id", putTodo);

export default router;