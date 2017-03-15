exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var itemIndex = -1;
    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] === item ) {
        itemIndex = i;
      }
    }
    return itemIndex;
  }, 

  sum: function(arr) {
    var sum = 0;
    for( var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var temp = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] != item) {
        temp.push(arr[i]);
      }
    }

    return temp;
  },

  removeWithoutCopy: function(arr, item) {
    var i, 
    len;

    for(i = 0, len = arr.length; i < len; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate: function(arr) {
    arr.pop();

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();

    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates: function(arr) {
    var ret = {};
    for(var i = 0; i < arr.length; i++) {
      if(ret[arr[i]] !== true) {
        ret[arr[i]] = true;
      }
    }
    return Object.keys(ret).map((elem) => {return Number(elem);});
  },

  square: function(arr) {
    return arr.map((elem) => { return elem * elem;});
  },

  findAllOccurrences: function(arr, target) {
    var ret = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        ret.push(i);
      }
    }
    return ret;
  }
};
