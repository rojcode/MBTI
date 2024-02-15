const rojArray = {

   addObjectToArray: (arr, obj) => {
      arr.push(obj);
   },


   removeObjectById: (arr, id) => {
      const index = arr.findIndex(item => item.id === id);
      if (index !== -1) {
         arr.splice(index, 1);
      }
   },


   updateObjectById: (arr, id, newData) => {
      const index = arr.findIndex(item => item.id === id);
      if (index !== -1) {
         arr[index] = {
            ...arr[index],
            ...newData
         };
      }
   },


   displayArray: arr => {
      arr.forEach(item => {
         console.log(item);
      });
   },


   removeObjectByField: (arr, field, value) => {
      const index = arr.findIndex(item => item[field] === value);
      if (index !== -1) {
         arr.splice(index, 1);
      }
   },


   updateObjectByField: (arr, field, value, newData) => {
      const index = arr.findIndex(item => item[field] === value);
      if (index !== -1) {
         arr[index] = {
            ...arr[index],
            ...newData
         };
      }
   },
   searchObjectsByField: (arr, field, value) => {
      return arr.filter(item => item[field] === value);
   },
    displayObjectsInRange: (arr, start, end) => {
      const filteredObjects = arr.filter(item => item.id >= start && item.id <= end);
      return filteredObjects;
   },

};