function Retangulo(x, y){
    this.base = x;
    this.altura = y;

    this.calcArea = function(){
        alert ("Área do retangulo de base " + this.base + " e altura " + this.altura + " é: " + (this.altura * this.base));

    }
}

var objRet = new Retangulo(10, 20);
objRet.calcArea();



function Conta(){
    var nomeC;
    var banco;
    var numC;
    var saldo;

    this.setNomeC = function(nomeC){
        this.nomeC = nomeC;
    };

    this.setBanco = function(banco){
        this.banco = banco;
    };

    this.setNumC= function(numC){
        this.numC = numC;
    };

    this.setSaldo = function(saldo){
        this.saldo = saldo;
    };

    this.getNomeC = function(){
        return this.nomeC;
    };

    this.getBanco = function(){
        return this.banco;
    };

    this.getNumC = function(){
        return this.numC;
    };

    this.getSaldo = function(){
        return this.saldo;
    };
}

function Corrente(){
    var saldoEspecial;


    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    };

    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    };
}

function Poupança(){
    var juros;
    var dtVenc;


    this.setJuros = function(juros){
        this.juros = juros;
    };

    this.setDataVenc = function(dtVenc){
        this.dtVenc = dtVenc;
    };

    this.getJuros = function(){
        return this.juros;
    };

    this.getDataVenc = function(){
        return this.dtVenc;
    };
}

Corrente.prototype = new Conta();
Poupança.prototype = new Conta();

objCorrente = new Corrente();
objCorrente.setNomeC("Giovana Andreia");
objCorrente.setBanco("Inter");
objCorrente.setNumC("125639-85");
objCorrente.setSaldo(3000);
objCorrente.setSaldoEspecial(900);

objPoupanca = new Poupança();
objPoupanca.setNomeC("Steve Rogers");
objPoupanca.setBanco("C6");
objPoupanca.setNumC("563289-36");
objPoupanca.setSaldo(3500);
objPoupanca.setJuros(1.5);
objPoupanca.setDataVenc("15/06/2023");

alert("Conta Corrente \n\n" + " Nome: " + objCorrente.getNomeC() + "\n Banco: " + objCorrente.getBanco() + "\n Numero da Conta: " + objCorrente.getNumC() + "\n Saldo: R$" + objCorrente.getSaldo() + "\n Saldo Especial: R$" + objCorrente.getSaldoEspecial());

alert("Conta Poupança \n\n" + " Nome: " + objPoupanca.getNomeC() + "\n Banco: " + objPoupanca.getBanco() + "\n Numero da Conta: " + objPoupanca.getNumC() + "\n Saldo: R$" + objPoupanca.getSaldo() + "\n Juros: " + objPoupanca.getJuros() + "%" + "\n Data de Vencimento: " + objPoupanca.getDataVenc());