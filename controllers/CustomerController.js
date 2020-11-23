const express = require(`express`);
const app = express();
const customers = require ("../data/Customer.json")
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// getAllCustomers
app.get("/getAllCustomers", (req, res)=>{
    res.json(customers)
});