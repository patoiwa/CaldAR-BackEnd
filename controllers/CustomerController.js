const express = require(`express`);
const app = express();
const customers = require ("../data/Customer.json")
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// getAllCustomers
app.get("/getAllCustomers", (req, res)=>{
    res.json(customers)
});
//getCustomerById
app.get("/getCustomerById/:id", (req,res) =>{
    const found = customers.filter (customer => customer.id === parseInt(req.params.id));
    
    if (found.length > 1){
        res.json(found)
    } else {
        res.status(400).json({ msg: `No customer with the id of ${req.params.id}`})
    }
});