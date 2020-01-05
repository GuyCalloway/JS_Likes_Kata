const process = {
  likes: function(names) {
    switch (names.length) {
      case 0:
        return "no one likes this";
      case 1:
        return names[0] + " likes this";
      case 2:
        return names[0] + " and " + names[1] + " like this";
    }
  }
};

module.exports = process;
