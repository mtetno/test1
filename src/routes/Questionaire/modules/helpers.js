const 
  sortRecursive = function (array, propertyName) {

      array.forEach(function (item) {
          var keys = _.keys(item);
          keys.forEach(function(key){
              if(_.isArray(item[key])){
                  item[key] = sortRecursive(item[key], propertyName);
              }
          });
      });

      return _.sortBy(array, propertyName);
  };

export default {
  sortRecursive,
};
