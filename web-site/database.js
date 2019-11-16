const mongoose = require('mongoose');

const DATABASE_CONNECTION = "mongodb://mongo/test";

var kittySchema = mongoose.Schema({
    name: String,
});

Kitten = exports.Kitten = mongoose.Model('Kitten', kittySchema);

exports.initializeMongo = function() {
    mongoose.connect(DATABASE_CONNECTION);

    console.log('Intentando conectarse a ' + DATABASE_CONNECTION);

    var db = mongoose.connection();
    db.on('error', console.error.bind('Sucedio un error durante la conexion.'));
    db.once('open', function () {
        console.log('Conexion exitosa con la base de datos');
        addRandomCat();
    });
}

var addRandomCat = function () {
    var silence = new Kitten({
        name: 'Silence' + Math.random()
    });

    silence.save(function (err, fluffy) {
        if (err) return console.error(err);
        console.log('Hay un nuevo gatito aleatorio en el vecindario');
    });
}


