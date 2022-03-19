import { newsData } from "../static/newsData";

export const getSortList = () => {
    return newsData.map((i) => i.sort)
}
export const getNews = (sortId) => {
    return newsData.find((i) => i.sort == sortId)
}
export const getDateTime = (time) => {
    var numbers = {
  0 : '০',
  1 : '১',
  2 : '২',
  3 : '৩',
  4 : '৪',
  5 : '৫',
  6 : '৬',
  7 : '৭',
  8 : '৮',
  9 : '৯'
    };
  //  console.log(numbers)
    var calculatedDate = time.slice(0, 10).split('').map((i) => {
        if (!isNaN(i)) {
            i = numbers[i];
            console.log(i)
        }
        return i;
    }).join('')

    var calculatedTime = time.slice(11, 16).split('').map((i) => {
        if (!isNaN(i)) i = numbers[i];
        return i;
    }).join('')
    return [calculatedDate, calculatedTime]
}