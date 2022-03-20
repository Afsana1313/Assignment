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
    var month = {
        '০১' : 'জানুয়ারি',
        '০২': 'ফেব্রুয়ারি', 
        '০৩': 'মার্চ', 
        '০৪': 'এপ্রিল', 
        '০৫': 'মে', 
        '০৬': 'জুন', 
        '০৭': 'জুলাই', 
        '০৮': 'আগষ্ট', 
        '০৯': 'সেপ্টেম্বর', 
        '১০': 'অক্টোবর', 
        '১১': 'নভেম্বর', 
        '১২': 'ডিসেম্বর', 
 
    }
    var calculatedDate = time.slice(0, 10).split('').map((i) => {
        if (!isNaN(i)) {
            i = numbers[i];
        }
        return i;
    }).join('')
    var customDate = `${calculatedDate.slice(8,10)}, ${month[calculatedDate.slice(5,7)]} ${calculatedDate.slice(0,4)}`
    var calculatedTime = time.slice(11, 16).split('').map((i) => {
        if (!isNaN(i)) i = numbers[i];
        return i;
    }).join('')
    return [customDate, calculatedTime]
}