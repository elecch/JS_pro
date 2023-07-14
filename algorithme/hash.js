//Object

// const table = {};
// table["key"] = 100;
// table["key2"] = "Hello";
// console.log(table["key"]);
// table["key"] = 349;
// console.log(table["key"]);
// delete table["key"];
// console.log(table["key"]);

//Map

// const table = new Map();
// table.set("key", 100);
// table.set("key2", "Hello");
// console.log(table["key"]); // undefined
// console.log(table.get("key")); // 100
// const object = {a: 1};
// table.set(object, "A1"); // Map은 Object도 Key로 사용가능
// console.log(table.get(object)); // A1
// table.delete(object);
// console.log(table.get(object)); //undefined
// console.log(table.keys());
// console.log(table.values());
// table.clear();
// console.log(table.values());

// const table = new Map();
// table.set("key", 100);
// table.set("key2", "Hello");
// console.log(table.get("key")); // 100
// console.log(table.get("key2")); // Hello
// const object = {a: 1};
// table.set(object, "A1");                                          
// console.log(table.get(object)); // A1
// table.delete(object);
// console.log(table.get(object)); // undefined
// console.log([...table.keys()]); // ["key", "key2"] => {}로 출력하면 {}안의 값들은 출력이 안되길래 바꿈.
// console.log([...table.values()]); // [100, "Hello"] => {}로 출력하면 {}안의 값들은 출력이 안되길래 바꿈.
// table.clear();
// console.log([...table.values()]); // []

