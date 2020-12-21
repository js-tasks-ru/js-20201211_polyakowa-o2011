/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    return function  (obj) {

        if (isEmpty(obj)) return undefined

        const arrey = path.split('.');
       
        let result = obj;
          
        for (let i = 0; i < arrey.length; i++) {
          
            result = result[arrey[i]];
         
        } 

        return result  

       function isEmpty(obj) {
          for(let prop in obj) {
          
           return false;
          }
           return true;
        }  
    }           
}