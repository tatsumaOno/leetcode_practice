/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let lists = [];
  for (let i = 1; i <= numRows; i++) {
      if (!lists.length) {
          lists.push([i]);
          continue;
      }
      if (lists.length < 2) {
          lists = [...lists, [...lists[0], 1]];
          continue;
      }
      let list = [];
      lists[lists.length -1].reduce((prev, curr, index) => {
          list.push((prev + curr));
          return curr
      } , 0);
      list.push(1);
      lists.push(list);
  }

  return lists;
};