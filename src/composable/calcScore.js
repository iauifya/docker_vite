const QUESTION_TOTAL_COUNT = 7
const OPTION_COUNT = 4

const randomFromList = (list) => {
  const index = Math.floor(Math.random() * list.length)
  return list[index]
}

/**
 * 接收使用者在心理測驗中各選項選擇的次數，並回傳測驗結果是第幾類人
 * 
 * @param {number[]} options - 接收一個陣列，其各項表示使用者各個選項分別選了幾次
 * @returns {number} 心理測驗結果是哪類人
 */
export default (options) => {
  if(options.length !== OPTION_COUNT) throw new Error(`參數有誤！心理測驗應該只有${OPTION_COUNT}個選項，但接收到${options.length}個。請檢查傳入參數：[${options.join(',')}]`)

  const totalCount = options.reduce((total,item)=>total + item, 0)
  if(totalCount !== QUESTION_TOTAL_COUNT) throw new Error(`參數有誤！心理測驗共${QUESTION_TOTAL_COUNT}題，但收到${totalCount}題。請檢查傳入參數：[${options.join(',')}]`)

  switch(true) {
    case options[0] === 3 && options[1] === 3 :
      return 8
    case options[0] === 3 && options[2] === 3 :
      return randomFromList([2, 4])
    case options[0] === 3 && options[3] === 3 :
      return 6
    case options[1] === 3 && options[2] === 3 :
      return 7
    case options[1] === 3 && options[3] === 3 :
      return randomFromList([1, 3])
    case options[2] === 3 && options[3] === 3 :
      return 5
    case options[0] >= 3 :
      return 4
    case options[1] >= 3 :
      return 3
    case options[2] >= 3 :
      return 2
    case options[3] >= 3 :
      return 1
    default :
      return 9
  }
}

