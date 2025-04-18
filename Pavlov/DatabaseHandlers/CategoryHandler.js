import supabase from "../config/SupabaseClient";


const CategoryHandler = {
    async getCategoryByID({CategoryID}){
        const {data, error} = await supabase
        .from(Category)
        .select('*')
        .eq("id", CategoryID);
        if(error) {throw error};
        return data;
        
    },


    async createCategory({  CategoryName }) {
        const { data, error } = await supabase
            .from(Category)
            .insert([{CategoryName:CategoryName }])

        if (error) {
            throw error
        }
        return data
    },
}
export default CategoryHandler