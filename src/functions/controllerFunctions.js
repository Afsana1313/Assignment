import { newsData } from "../static/newsData";

export const getSortList = () => {
    return newsData.map((i) => i.sort)
}
export const getNews = (sortId) => {
    return newsData.find((i) => i.sort == sortId)
}