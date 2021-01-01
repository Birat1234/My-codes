const SHA = require('crypto-js/md5');

class Block{
    constructor(index, time , data, previous_hash = " "){
        this.index = index;
        this.time = time;
        this.data = data;
        this.previous_hash = previous_hash;
        this.hash = "this.calculateHash";
    }
    calculateHash(){
        return SHA(this.index + this.previous_hash + this.time + JSON.stringify(this.data)).toString();

    }
}

class Blockchain{
    constructor(){
        this.chain = [this.GenBlock()];
    }

    GenBlock(){
        return new Block(0, "01/01/2019", "Genessis Block", "0");
    }

    latestBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock){
        newBlock.previous_hash = this.latestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let bir = new Blockchain();
bir.addBlock(new Block(1,"23/07/2019", {amount: 4}))

console.log(JSON.stringify(bir, null, 4));