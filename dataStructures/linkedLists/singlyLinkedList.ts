class SinglyLinkedListNode {
  value: number;
  next: SinglyLinkedListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode | null;
  tail: SinglyLinkedListNode | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: number) {
    const newNode = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value: number) {
    const newNode = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insert(value: number, index: number) {
    const newNode = new SinglyLinkedListNode(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode?.next ?? null;
      }
      newNode.next = currentNode?.next ?? null;
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
      currentNode!.next = currentNode?.next?.next ?? null;
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

export default SinglyLinkedList;

// Time Complexity for traversal / size: O(n)
// Time Complexity for append / prepend: O(1)
// Time Complexity for insertion: O(n)
// Time Complexity for removal: O(n)
