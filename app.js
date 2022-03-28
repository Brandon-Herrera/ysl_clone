const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Category = require('./models/category');
const dbUrl = 'mongodb://localhost:27017/ysl_v2';
const port = 3000;
const {LoadDB} = require('./classes/app_classes')
const {CategorySeedsClass} = require('./classes/category_class')
const {categorySeeds} = require('./seeds/categorySeeds')

const newCollection = require('./seeds/shopMenCategoriesSeeds');

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection: error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
    const categories = new CategorySeedsClass(categorySeeds)

    res.render('home', {categories})
})

app.get('/shop-men/new-collections', async (req, res) => {
    const categories = new CategorySeedsClass(categorySeeds)

    res.render('shop_men/new-collections', {
        categories,
        newCollection,
    })
})

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});