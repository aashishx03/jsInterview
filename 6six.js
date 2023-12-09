var fullname = "Aashish";

var obj = {
  fullname: "Hacked full name",

  prop: {
    fullname: "Inside prop",
    getFullName: function () {
      return this.fullname;
    },
  },

  getFullName: function () {
    return this.fullname;
  },

  getFullName2: () => this.fullname,

  getFullName3: (function () {
    return this.fullname;
  })(),
};

console.log(obj.prop.getFullName);

console.log(obj.getFullName);
console.log(obj.getFullName2);
console.log(obj.getFullName3);
