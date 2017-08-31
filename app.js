let users = [
  {
    firstName: "troy",
    lastName: "amelotte",
    age: 12,
    email: "troy@amelotte.com",
    location: "PHX"
  },
  {
    firstName: "kevin",
    lastName: "bacon",
    age: 13,
    email: "kevin@amelotte.com",
    location: "LA"
  },
  {
    firstName: "bjorn",
    lastName: "luke",
    age: 20,
    email: "asdf@asdf.com",
    location: "NY"
  },
  {
    firstName: "rahul",
    lastName: "salota",
    age: 23,
    email: "ra@hul.com",
    location: "PHX"
  }
]

// Use the list of users above. Populate the unordered list with all the users
// that are located in phx. Then populate the table below it with all the users.

const UL = document.querySelector('ul');
const TBODY = document.querySelector('tbody');


window.onload = ()=> {
  for(let obj of users) {
    if (obj.location === "PHX") {
      let li = document.createElement('li');
      let fullName = capitalize(obj.firstName) + " " + capitalize(obj.lastName);
      let text = document.createTextNode(fullName);
      li.appendChild(text);
      UL.appendChild(li);
    }
    let tr = document.createElement('tr');
    for (let key in obj) {
      let td = document.createElement('td');
      let val = /name/i.test(key) ? capitalize(obj[key]) : obj[key];
      let text = document.createTextNode(val);
      td.appendChild(text);
      tr.appendChild(td);
    }
    TBODY.appendChild(tr);
  }

};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}
