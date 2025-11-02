const apis = fetch(
  "https://www.thesportsdb.com/api/v1/json/123/all_countries.php",
).then((res) => res);
console.log("res: ", res);
console.log("Hola mundo");
