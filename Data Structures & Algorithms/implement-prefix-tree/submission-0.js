class TrieNode {
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}


class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;
        for(let c of word){
            if(!current.children.has(c)){
                current.children.set(c, new TrieNode());
            }
            current = current.children.get(c);
        }
        current.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;
        for (let c of word){
            if(!current.children.has(c)){
                return false;
            }
            current = current.children.get(c);
        }
        return current.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;
        for (let c of prefix){
            if(!current.children.has(c)){
                return false;
            }
            current = current.children.get(c);
        }
        return true;
    }
}
