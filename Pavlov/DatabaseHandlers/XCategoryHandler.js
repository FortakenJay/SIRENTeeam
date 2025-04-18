import supabase from "../config/SupabaseClient";
import CategoryHandler from "./CategoryHandler";

const tableName = "XCategory";

const XCategoryHandler = {
    async createCategoryXHandler ({CategoryID, UserId , image}){
        const CategoryExist = await CategoryHandler.getCategoryByID({CategoryID});
        if(!CategoryExist){
            const newCategory = CategoryHandler.createCategory({CategoryName})
            return this.createCategoryXHandler({CategoryID: newCategory.id, UserId})
        }
        return this.createCategoryXHandler({CategoryID: CategoryExist.id, UserId, image})

    },
    async createCategoryByID({CategoryID,UserId, image}){
        const {data, error} = await supabase
        .from(tableName)
        .insert([{ CategoryID,UserId, image}])
        if (error) {
            throw error;
        }
        return data;
    },
    

}

export default XCategoryHandler