import Node from "./Node.js";
export default class LinkedList{
    constructor(){
        this.headnode = null
        this.tailnode = null
    }
    append(value){
        let node = new Node(value)
        if(this.headnode == null){
            this.headnode = node 
        } else {
            let currentnode = this.headnode
            while(currentnode.nextNode){
                currentnode = currentnode.nextNode
            }
            currentnode.nextNode = node
        }
        this.tailnode = node
    }
    prepend(value){
        let newHeadNode = new Node(value,this.headnode)
        this.headnode = newHeadNode
        if(!this.tailnode){
            this.tailnode = newHeadNode
        }
    }
    toString(){
        let string = ""
        let currentnode = this.headnode
        while(currentnode){
            string = string + `(${currentnode.value}) -> `
            currentnode = currentnode.nextNode
        }
        string += null
        return string
    }
    head(){
        return this.headnode
    }
    tail(){
        return this.tailnode
    }
    at(index){
        let currentnode = this.headnode
        for(let counter = 0; index > counter; counter++){
            if(!currentnode.nextNode){
                console.error("Index out of bounds")
                return
            }
            currentnode = currentnode.nextNode
        }
        return currentnode
    }
    size(){
        let counter = 0 
        let currentnode = this.headnode
        while(currentnode){
            currentnode = currentnode.nextNode
            counter++
        }
        return counter
    }
    pop(){
        let size = this.size()
        let lastNode = this.at(size - 1)
        if(lastNode == this.headnode){
            this.headnode = null
            return
        }
        let secondLastNode = this.at(size - 2)
        secondLastNode.nextNode = null
        this.tailnode = secondLastNode
    }
    contains(value){
        let currentnode = this.headnode
        while(currentnode){
            if(currentnode.value == value){
                return true
            }
            currentnode = currentnode.nextNode
        }
        return false
    }
    find(value){
        let counter = 0 
        let currentnode = this.headnode
        if(currentnode.value == value){
            return counter
        }
        while(currentnode){
            if (currentnode.value == value){
                return counter
            }
            currentnode = currentnode.nextNode
            counter++
        }
        return null
    }
    insertAt(value,index){
        console.log(index)
        if(!this.headnode || index == 0){
            console.log(index)
            this.prepend(value)
            return
        }
        if(index == this.size()){
            console.log(index)
            this.append(value)
            return
        }
        if(index > this.size() || 0 > index){
            console.log(index)
            console.error("Index out of bounds")
            return
        }
        if(index <= this.size()){
            console.log(index)
            let oldnode = this.at(index)
            let nodeinfront = this.at(index + 1)
            let node = new Node(value,nodeinfront)
            oldnode.nextNode = node
        }
    }
    removeAt(index){
        if(this.at(index) == this.tailnode){
            this.pop()
            return
        }
        if(index == 0){
            if(!at(1)){
                this.headnode = null
                return
            }
            let theNextNode = at(1)
            this.headnode = theNextNode
        }
        let previousnode = this.at(index - 1)
        let nextnode = this.at(index + 1)
        previousnode.nextNode = nextnode
    }
}
// You need to set previous node nextnode property to appened node.