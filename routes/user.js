const express = require("express");
const router = express.Router();

/**
 * STATIC ROUTERS
 */
// Always put the static routers first, otherwise they will be overwritten by the dynamic ones

router.get("/", (request, respond) => {
  respond.send("User list");
});

router.post("/", (request, respond) => {
  respond.send("Create new user");
});

router.get("/new", (request, respond) => {
  respond.send("User form");
});

/**
 * DYNAMIC ROUTERS
 */

// All common actions in one element (clean version), longer version is under it
router
  .route("/:id")
  .get((request, respond) => {
    console.log(request.user);
    respond.send(`Get user with ID:${request.params.id}`);
  })
  .put((request, respond) => {
    respond.send(`Update user with ID:${request.params.id}`);
  })
  .delete((request, respond) => {
    respond.send(`Delete user with ID:${request.params.id}`);
  });

// Long version, that follows a pattern

/**
router.get("/:id", (request, respond) => {
  console.log(request.user);
  respond.send(`Get user with ID:${request.params.id}`);
});

router.put("/:id", (request, respond) => {
  respond.send(`Update user with ID:${request.params.id}`);
});

router.delete("/:id", (request, respond) => {
  respond.send(`Delete user with ID:${request.params.id}`);
});
 */

const users = [{ name: "Bryan" }, { name: "Julius" }];

router.param("id", (request, respond, next, id) => {
  request.user = users[id];
  next();
});

module.exports = router;
