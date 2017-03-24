exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      if(value !== undefined) {
        resolve(value);
      } else {
        reject(value);
      }
    });
  },

  manipulateRemoteData: function(url) {
    var request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      request.addEventListener("load", function(e) {
            var arr = request.response;
            resolve(
              JSON.parse(arr).people
              .sort((a,b) => {
                var aCap = a.name.toUpperCase();
                var bCap = b.name.toUpperCase();

                if (aCap < bCap) {
                  return -1;
                }
                if (aCap > bCap) {
                  return 1;
                }

                // names must be equal
                return 0;
              })
              .map((person) => {return person.name})
            );
        });

      request.addEventListener("error", function(e){
        return new Promise((resolve, reject) => {
          reject(e);
        });
      });
    
      request.open('GET', url);
      request.send();
    });
  }
};
