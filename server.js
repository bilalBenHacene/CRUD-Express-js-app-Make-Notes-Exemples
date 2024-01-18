import express from "express";
import db from "./database.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    const search=req.query.searchInput;
    console.log(search);
    const notes=db.getNotes(search);
    res.render("index", { notes });
});


app.get("/note/:id", (req, res) => {
    const id = req.params.id;
    const note=db.getNote(id);
    if(!note) res.redirect("/");
    res.render("note",{
        note,
    })
});

app.get("/new", (req, res) => {
    res.render("new");
});

app.post("/", (req, res) => {
    const {title, content}=req.body;
    db.addNote({title, content});
    res.render("new");
});

app.post("/delete/:id", (req, res) => {
    const id=+req.params.id;
    db.deleteNote(id);
    res.redirect("/");
});


const port = 8080;
app.listen(port, () => {
    console.log(`go to: http://localhost:${port}`);
});

