// Có mảng bên dưới, các bạn làm theo từng task.
const arrays = [
  {
    id: 1,
    name: "user 1",
    age: 28,
  },
  {
    id: 2,
    name: "user 2",
    age: 21,
  },
  {
    id: 3,
    name: "user 3",
    age: 23,
  },
  {
    id: 4,
    name: "user 4",
    age: 24,
  },
];

// task 1: Add mới 1 user vào đầu mảng
const haha = { id: 0, name: "user 0", age: 20 };

//Cách 1: Sử dụng Unshift
arrays.unshift(haha);

//Cách 2: Sử dụng Splice
arrays.splice(0, 1, haha);

// ---------------------------
// task 2: Add mới 1 user vào cuối mảng
const huhu = { id: 6, name: "user 6", age: 25 };

//Cách 1: Sử dụng push
arrays.push(huhu);

//Cách 2: Sử dụng splice
arrays.splice(arrays.length - 1, arrays.length, huhu);

// -----------------------------
// task 3: add nhiều user vào mảng
const ckamzn = [
  {
    id: 7,
    name: "user 7",
    age: 11,
  },
  {
    id: 8,
    name: "user 8",
    age: 27,
  },
];

for (const hihi in ckamzn) {
  arrays.push(ckamzn[hihi]);
}

// -----------------------------
// task 4: xoá 1 user ra khỏi mảng

//Cách 1: Xóa 1 user ở vị trí cuối bảng bằng pop
arrays.pop();

//Cách 2: Xóa 1 user ở vị trí đầu bảng bằng shift
arrays.shift();

//Cách 3: Xóa 1 user hoặc một lượng danh sách user THEO THỨ TỰ LIÊN TIẾP dựa vào vị trí bất kì bằng splice
arrays.splice(0, 1); //Xóa user có vị trí index bằng 1

// -----------------------------
// task 5: lọc ra các user có age >= 22;

//Cách 1: Sử dụng filter có sẵn của JavaScript
var nhungUserCoAgeLonHon22 = arrays.filter(function (value) {
  return value.age >= 22;
});

//Cách 2: Viết thuật toán
var nhungUserCoTuoiLonHon22 = [];
function timKimNguoiLonHon22(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i].age >= 22) {
      b.push(a[i]);
    }
  }
}
nhungUserCoTuoiLonHon22 = timKimNguoiLonHon22(arrays, nhungUserCoTuoiLonHon22);

// -----------------------------
// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string
for (const blackpink in arrays) {
  arrays[blackpink].class = "abc";
}

// -----------------------------
// task 7: Tìm ra 1 user có age = 23

//Cách 1: Dùng vòng lặp tìm kiếm người dùng theo thự tự đầu tiên có age = 23
function timKim1User23tuoi(a) {
  for (const abcd in a) {
    if (a[abcd].age == 23) {
      console.log(a[abcd]);
      break;
    }
  }
}

// -----------------------------
// task 8: xử dụng vòng lặp for để lấy ra các user có age >= 23
function timKimMang1User23tuoi(a) {
  var oDayCoNguoi23Tuoi = [];
  for (const abcd in a) {
    if (a[abcd].age >= 23) {
      oDayCoNguoi23Tuoi.push(a[abcd]);
    }
  }
  return oDayCoNguoi23Tuoi;
}

// -----------------------------
// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.
const arrayIds = [1, 3];

function timKimBaseOnMangID(a, b) {
  var lala = [];
  for (const bom in a) {
    for (const boom in b) {
      if (a[bom].id == b[boom]) {
        lala.push(a[bom]);
      }
    }
  }
  return lala;
}

// -----------------------------
// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần

function sapXepBaseOnAge(a) {
  var amNhac;
  for (var i = a.length - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (a[j - 1].age > a[j].age) {
        amNhac = a[j - 1];
        a[j - 1] = a[j];
        a[j] = amNhac;
      }
    }
  }
  return a;
}

// -----------------------------
// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)

const doiTenThuocTinh = arrays.map((row) => {
  const { class: Class, ...rest } = row;
  return { Class, ...rest };
});

// -----------------------------
// task 12: lấy ra phần tử cuối cùng của mảng trên
function layElenmentOCuoi(a) {
  return a[a.length - 1];
}

// -----------------------------
// task 13: lấy ra phần tử đầu tiên của mảng trên
function layElenmentODau(a) {
  return a[0];
}

// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]
const array1 = ["Gà", "vịt"];
const array2 = ["vịt", "Chó"];
const arrray = array1.concat(array2);
function timTrungLap(a) {
  for (const bubu in a) {
    var khum = a[bubu];
    for (var i = bubu; i < a.length; i++) {
      if (khum == a[i]) {
        a.splice(i + 1, i + 1);
      }
    }
  }
}

timTrungLap(arrray);

// -----------------------------------
const person = {
  firstName: "John",
  lastName: "Doe",
};

// task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']

const juri = [];
Object.keys(person).forEach((_, key) => juri.push(key));

// -----------------------------------
// task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']
const kuri = [];

Object.keys(person).forEach((key) => {
  kuri.push(person[key]);
});

// -----------------------------------
// task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]

const mang = Object.keys(person)
  .filter((v) => person[v] != null)
  .map((key) => ({ [key]: person[key] }));

// -----------------------------------
// task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
person.age = 100;

// -----------------------------------
// task 19: cho array string bên dưới, convert array này sang object. Result mong đợi => {0:"a", 1:"b", 2:"c"}
const arrString = ["a", "b", "c"];

function convertArrToObj(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}

// -----------------------------------
// task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
const arrBoolean = [true, true, false];
var x = new Boolean(arrBoolean);
console.log(x);

// -----------------------------------
// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)
var animal = {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  },

  getHeight: function () {
    return this.height;
  },

  setHeight: function (height) {
    this.height = height;
  },
};

// -----------------------------------
// task 22:
const newFunction = (user) => {
  // xử lý function này khi truyền params user vào là thông tin của user
  // kết quả return mong đợi là một string => "Hello User - age: 21"
  var hihi = "Hello " + user + " - age: " + user.age;
  return hihi;
};

// -----------------------------------
// task 23:
let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
let numb2 = 1.4; // => làm tròn lên số bên.  result mong đợi = 1
console.log(Math.ceil(numb));
console.log(Math.round(numb2));

// -----------------------------------
// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'
let name = "user";
let age = 21;
let className = "classAbc";

let hihi = "name: " + name + " - age: " + age + " - class: " + className;
console.log(hihi);
// -----------------------------------
// task 25: cho array number bên dưới, tính tổng array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let tong = 0;
for (const xongrui in arrNumber) {
  tong = tong + arrNumber[xongrui];
}
console.log(tong);
