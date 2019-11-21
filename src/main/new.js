var express = require('express')
var app = express()

// The code below will display 'This is a new function!' to the browser when you go to http://localhost:3001
app.get('/', (req, res) => {
    // the .status(200) isn't necessary since it is the default return status
    res.status(200).send('This is a new function!')
})

app.listen(3001, () => {
    console.log('New thing listening on http://localhost:3001')
})

module.exports = app;
