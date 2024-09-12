let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};

// mengubah data menggunakan spread operator
let updatedData = {
    ...data,
    name: "Zawil Irsyad", // disini kita dapat mengganti nama
    email: "zawilirsyad01@gmail.com", // disini untuk mengganti email
    hobby: "Traveling" // disini untuk mengganti hobi
};

console.log(updatedData);

// destructuring untuk mengambil street dan city
const {
    address: { street, city }
} = data;

console.log(`Street: ${street}`);
console.log(`City: ${city}`);