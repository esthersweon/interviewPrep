class DoublyLinkedListNode {
  value: number;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: number) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  prepend(value: number) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  insert(value: number, index: number) {
    const newNode = new DoublyLinkedListNode(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode?.next ?? null;
      }
      newNode.next = currentNode?.next ?? null;
      currentNode!.next!.prev = newNode;

      newNode.prev = currentNode;
      currentNode!.next = newNode;
    }
  }

  remove(index: number) {
    if (index === 0) {
      this.head = this.head?.next ?? null;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode?.next ?? null;
      }
      const newNextNode = currentNode?.next?.next ?? null;
      currentNode!.next = newNextNode;
      newNextNode!.prev = currentNode;
    }
  }

  size() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode?.next;
    }
    return count;
  }
}

export default DoublyLinkedList;

// Time Complexity for traversal: O(n)
// Time Complexity for append / prepend: O(1)
// Time Complexity for insertion: O(n)
// Time Complexity for removal: O(n)
