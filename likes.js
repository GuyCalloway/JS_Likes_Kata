const process = {
  likes: function(names) {
    switch (names.length) {
      case 0:
        return "no one likes this";
      case 1:
        return names[0] + " likes this";
    }
  }
};

module.exports = process;
