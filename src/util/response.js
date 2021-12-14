module.exports = {
   // Function get response success
   async success(res, data, message, code) {
      let result = {
         code : code ? code : 200,
         message : message,
      };
      if(data){
         result.data = data;
      }
      return await res.json(result);  
   },
   // Function get response error
   async error(res, message, code) {
      return await res.json({
           code : code ? code : 500,
           message : message,
      })
   }
}