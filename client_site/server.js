/*
Name: Patrick Sullivan
Date: March 1, 2026
File: server.js
Overview: This is my main server.js file. This is what is used to start the server, and dynamically generates web pages through the 
server-side logic. 
*/
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Home',
        tagline: 'A voice you can trust',
        stylesheet: 'homepage',
        pageJS: null,
        isIndex: true
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About',
        officeAddress: '181 Post Reaod West, Westport, CT',
        stylesheet: 'about',
        pageJS: 'google_maps_api',
        isAbout: true
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        pageTitle: 'contact',
        contactEmail: 'patrick.sullivan@uri.edu',
        stylesheet: 'contact',
        pageJS: 'contact_page_logic',
        isContact: true
    });
});

app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: 'Not Found',
        stylesheet: 'error' 
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', {
        pageTitle: 'Server Error'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});