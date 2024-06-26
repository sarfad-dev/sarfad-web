const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Design file
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routers
app.get("/", (req, res) => {
  res.render("index");
});

// Function to print all routes
const listRoutes = (app) => {
  console.log(colors.green('\nApp listening on the following routes:'));
  console.log(colors.white('---------------------------------------'));
  app._router.stack.forEach((middleware) => {
      if (middleware.route) { 
          const route = middleware.route;
          console.log(colors.green('Route: ') + colors.reset(`${route.path}`));
      } else if (middleware.name === 'router') { // Routes added as router middleware
          middleware.handle.stack.forEach((handler) => {
              const route = handler.route;
              route && console.log(colors.green('Route: ') + colors.reset(`${route.path}`));
          });
      }
  });
  console.log(colors.white('---------------------------------------'));
};

app.listen(port, () => {
  listRoutes(app);
  console.log(colors.green(`Server running at http://localhost:${port}/\n`));
});

