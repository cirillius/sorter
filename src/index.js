class Sorter {
  constructor() {
    // your implementation
    this.numbers = [];
    this.comparator = function(left, right) {
      return left - right;
    }
  }

  add(element) {
    // your implementation
    this.numbers.push(element)
  }

  at(index) {
    // your implementation
    return this.numbers[index]
  }

  get length() {
    // your implementation
    return this.numbers.length
  }

  toArray() {
    // your implementation
    return this.numbers
  }

  sort(indices) {
    // your implementation
    var len = this.numbers.length;
    for (var i = len - 1; i >= 0; i--){
      for(var j = 1; j <= i; j++){
        if (indices.includes(j - 1) && indices.includes(j)) {
          if(this.comparator(this.numbers[j - 1], this.numbers[j]) > 0){
              var temp = this.numbers[j - 1];
              this.numbers[j - 1] = this.numbers[j];
              this.numbers[j] = temp;
          }
        }
      }
    }
    return this.numbers;
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction
  }
}

module.exports = Sorter;