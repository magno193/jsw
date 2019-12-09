function a() {
    console.log(this)
}

var b = function() {
    console.log(this);
    this.newvariable = 'olá';
}

// this aponta para o mesmo endereço
console.log(this);
a();
b();
console.log(newvariable);

// Quando this é chamado por um método ele se refere ao objeto
// no qual ele pertence.
var c = {
    name: 'O objeto c',
    // Método
    log: function() {
        var self = this;

        self.name = 'Atualizado o objeto c'
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
        }

        setname('Atualizando novamento o objeto c');
        console.log(self);
    }
}
console.log(c);
c.log();