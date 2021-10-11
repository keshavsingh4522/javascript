class LinkedList { 
    constructor() {
        // Initial values
        this.head = null;
        this.tail = null;
    }

    insertNode(val) {
        const newNode = {value: val, next:null}

        //checking edges
        if(!this.head) this.head = newNode; //if empty
        if(this.tail) this.tail.next = newNode; //if not empty
        this.tail = newNode;
    }

    prependNode(val) {
        const newNode = {value: val, next:this.head}

        //checking edges
        if(!this.tail) this.tail = newNode; //if empty
        //if(this.head) newNode.next = this.head; //or next:this.head
        this.head = newNode; 
    }

    deleteNode(val) {

        //if empty list
        if(!this.head) return;

        //if element at head
        while(this.head && this.head.value == val) {
            this.head = this.head.next;
        }

        //if element in middle/last
        let tempList = this.head;
        while(tempList.next) { //loop from 2nd ele
            if(tempList.next.value==val) tempList.next=tempList.next.next; //skip through
            else tempList = tempList.next;
        }

        //update tail
        if(this.tail.value == val) this.tail = tempList; //last iterated value;
    }

    findFirstOccurance(val) {

        let tempList = this.head;
        //let index = 0; for index
        while(tempList) {
            if(tempList.value == val) return tempList;  //index;
        //index++;
        tempList = tempList.next;
        }
        return -1;
    }

    insertAfter(val, afterVal) {
        let afterNode = findFirstOccurance(afterVal);
        if(afterNode) {
            const newNode = {value:val, next: afterNode.next}
            afterNode.next = newNode;
        }
        if(afterNode.value == this.tail.value) this.tail = newNode;
    }

    //LL to array
    toArray() { 
        const arr =[];
        let tempEl = this.head;
        while(tempEl) {
            arr.push(tempEl); //w/ val and next
            tempEl = tempEl.next;
        }
        return arr;
    }
}

//Calling functions

let ll = new LinkedList();
ll.insertNode(2);
ll.insertNode(3);
ll.deleteNode(2);
