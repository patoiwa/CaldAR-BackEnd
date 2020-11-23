const express = require('express');
const app = express();
const boilerTypes = require ("../data/BoilerTypes.json")
const PORT = process.env.PORT || 5000;

// getAllBoilerTypes
app.get("/", (req, res)=>{
    res.json(boilerTypes)
});

// getBoilerTypeById
app.get("/getBoilerTypeById/:id", (req, res) => {
    const found = boilerTypes.some(boilerTypes => boilerTypes.id === parseInt(req.params.id));

    if (found) {
        res.json(boilerTypes.filter(boilerTypes => boilerTypes.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No boiler type with the id of ${req.params.id}`})
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));