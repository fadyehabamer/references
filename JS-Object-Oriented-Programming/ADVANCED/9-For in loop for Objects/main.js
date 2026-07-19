const user = {
    name: "FADY",
    country: "Egypt",
    age: 21,
};

let finalData = "";

for (let info in user) {
    //   * info -> Keys      user[info] -> values
    // console.log(`The ${info} Is => ${user[info]}`);
    finalData += `<div>The ${info} Is => ${user[info]}</div>`;
}


console.log(finalData);

document.getElementById("info").innerHTML = finalData;