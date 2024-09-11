class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    
    
    get(index){
      if (index < 0 || index > this.length || !this.head){
          return undefined;
      }
     let indexPoint=0;
      this.temp = this.head;
     while(this.temp.next){
          if(indexPoint === index){
            return this.temp;
        }
        this.temp = this.temp.next;
        indexPoint++;
     }
     return this.temp;
  }
  
  findMiddleNode() {
    // Reset temp to the head of the list
    this.temp = this.head;
    
    // Handle case where the list is empty
    if (!this.temp) {
        return null;
    }

    // First pass: Find the length of the list
    let length = 0;
    while (this.temp) {
        this.temp = this.temp.next;
        length += 1;
    }

    console.log("Overall length:", length);

    // Calculate the middle index
    const middleIndex = Math.floor(length / 2);
    console.log("#Middle index:", middleIndex);

    // Reset temp to the head of the list again
    this.temp = this.head;

    // Second pass: Find the middle node
    let currentIndex = 0;
    while (currentIndex < middleIndex) {
        this.temp = this.temp.next;
        currentIndex += 1;
    }

    console.log("#Middle node:", JSON.stringify(this.temp));
    return this.temp;
}


}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Middle node value: 3
    Original list 2:
    1
    2
    3
    4
    5
    6
    Middle node value of list 2: 4
*/
