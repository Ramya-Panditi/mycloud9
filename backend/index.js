const express = require("express");
const sql = require("mysql");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: "true" }));

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "Saiteja2909",
  database: "cloud_project",
});

// app.use(cors());
const corsOptions = {
    origin: ["https://f5blr86t-3000.inc1.devtunnels.ms/","http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("IN THE BACKEND AND ITS WORKING LOLLL");
});
app.post("/createuser", async (req, res) => {
  const { email, password } = req.body;
  const q = "SELECT * from cloud_project.users where user_email = ?";
  db.query(q, [email], async (err, result) => {
    if (err) {
      console.error("error", err);
      return res.status(405).json({ error: "Internal error" });
    }
    if (result.length > 0) {
      return res.json({ data: result, message: "Email already exists" });
    } else {
      const createQ =
        "INSERT INTO cloud_project.users (user_email, user_hashedpassword) VALUES (?,?)";
      db.query(createQ, [email, password], async (abc, def) => {
        if (abc) {
          console.error("error", abc);
          return res.status(405).json({ error: "Internal error" });
        }
        return res.json({ data: def });
      });
    }
  });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const q = "SELECT * FROM cloud_project.users WHERE user_email = ?";
    db.query(q, [email], async (err, result) => {
      if (err) {
        console.error("DATABASE ERROR", err);
        return res.status(500).json({ error: "DATABASE ERROR" });
      }
      if (result.length > 0) {
        console.log("in here", result);
        res.json({ data: result });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    });
  });

app.post("/upload/:id",async(req,res)=>{
  const {id} = req.params.id;
  
})

app.get("/getFolderid",async(req,res)=>{
  const {foldername} = req.body;
  const q = "SELECT * FROM cloud_project.folders WHERE folder_name = ?";
  db.query(q,[foldername],(err,result)=>{
    if(err){
        console.error("DATABASE ERROR", err);
        return res.status(500).json({ error: "DATABASE ERROR" });
    }
    if(result.length>0){
      res.json({data:result});
    }
    else{
      res.status(404).json({error:"No such folder found"});
    }
  })
})
  
app.listen(4000, () => {
  console.log("Listening on port 4000 !!");
});
