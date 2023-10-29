import { getFavoriteData } from "../../models/screenDataModels/FavoriteDataModel"

const getFavoriteDataFromModel = () => {
    const data = getFavoriteData();
    for (const item of data) {
        if (item.imgPath && typeof item.imgPath === "string") {
            item.imgPath = require(item.imgPath);
        }
    }
    return data;
}

export {getFavoriteDataFromModel};