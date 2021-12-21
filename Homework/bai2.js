// task 1: Cho một chuỗi, Viết hàm đảo ngược từng từ trong câu
let string = "I Love You";

function reverseEachWord(a) {
  var words = [];
  words = a.split(" ");

  var newStringAfterReverse = "";

  for (const huhu in words) {
    var wordsString = words[huhu];
    var reverseWords = "";
    for (var bubu = wordsString.length - 1; bubu >= 0; bubu--) {
      reverseWords = reverseWords + wordsString[bubu];
    }
    newStringAfterReverse = newStringAfterReverse + reverseWords + " ";
  }
  return newStringAfterReverse;
}

console.log(reverseEachWord(string));

//-------------------------------------------------------------------------------------
// task 2: Viết hàm đệ quy đảo ngược chuỗi.

const reverseString = (str) => {
  if (!str.length) return str;
  return reverseString(str.substr(1)) + str[0];
};

console.log(reverseString(string));

//-------------------------------------------------------------------------------------
// task 3: Cho một mảng, Viết hàm đảo ngược các item trong array đó.
var hihi = ["a", "b", "c", "d"];

const reverseArray = (array) => {
  var double = [];
  for (var i = array.length - 1; i >= 0; i--) {
    double.push(array[i]);
  }
  return double;
};

console.log(reverseArray(hihi));

//-------------------------------------------------------------------------------------
// task 4: viết hàm đệ quy đảo ngược một mảng

const recursiveReverseArray = (array) => {
  if (!array.length) return array;
  return recursiveReverseArray(array.slice(1)).concat(array[0]);
};

console.log(recursiveReverseArray(hihi));

//-------------------------------------------------------------------------------------
// task5: viết hàm đệ quy tính tổng

const recursiveCountTotal = (numberArray) => {
  if (!numberArray) return 0;
  if (numberArray.length === 1) return numberArray[0];
  return numberArray[0] + recursiveCountTotal(numberArray.slice(1));
};

//-------------------------------------------------------------------------------------
// task 6: Viết hàm đệ quy để biết một số là thuộc dãy fibonacci

const recursiveFib = (number) => {
  if (number <= 1) return number;
  return recursiveFib(number - 1) + recursiveFib(number - 2);
};

// task 7: Viết một class bao gồm 4 methods: add, update, remove, so sánh

class studentClass {
  students = [{ id: 0, name: "hihi" }];
  add(student) {
    if (this.isExitUser(student.id)) return this.students;
    this.students = [...this.students, student];
    return this.students;
  }

  remove(studentId) {
    this.students = this.students.filter((f) => f.id !== studentId);
    return this.students;
  }

  updated(student) {
    const index = this.students.findIndex((t) => t.id === student.id);
    this.students[index] = student;
    return this.students;
  }

  isExitUser(studentId) {
    return this.students.some((s) => s.id === studentId);
  }
}
const test = new studentClass();

test.add({ id: 4, name: "hihi" });
test.remove(4);
test.updated({ id: 0, name: "lala" });
console.log(test);
