//Objective is to design a class for a nested list iterator.


//Design of the class using a dfs traversal to get all elements in a 1D array.

class NestedListIterator {
    constructor(list) {
        this.arr = []
        this.position = 0

        let dfs = (list) => {
            for (let element of list) {
                if (isFinite(element)) {
                    this.arr.push(element)
                } else {
                    dfs(element)
                }
            }
        }
        dfs(list)
    }

    hasNext() {
        return this.position < this.arr.length
    }

    next() {
        return this.arr[this.position++]
    }
}

let list = new NestedListIterator([[1,1],2,[1,1]])
list.next()
list.next()
list.next()
list.next()
list.next()