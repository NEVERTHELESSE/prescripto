import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
const port = 9000;

const users = [
  {
    id: "1",
    username: "john",
    password: "john2023",
    isAdmin: true,
  },
  {
    id: "2",
    username: "ajibola",
    password: "ajibola2022",
    isAdmin: false,
  },
];

const secretkey = "mysecretkey";

app.post("/api/users", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (r) => r.username === username && r.password == password
  );
  if (user) {
    const accesssToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      secretkey,
      { expiresIn: "30s" }
    );
    res.json({ username: user.username, accesssToken, isAdmin: user.isAdmin });
  } else {
    res.status(500).send("no user");
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secretkey, (err, user) => {
      if (err) {
        return res.status(403).json("token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated");
  }
};

app.delete("/api/users/:userId", verify, (req, res) => {
  console.log(req.user.isAdmin);
  if (req.user.id == req.params.userId || req.user.isAdmin) {
    res.status(200).json("user has been delete");
  } else {
    res.status(403).json("you are not allow to delete this user");
  }
});

app.get("/", (req, res) => {});

app.listen(port, () => console.log(`server running on port ${port}`));
