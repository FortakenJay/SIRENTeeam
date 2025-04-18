import supabase from "../config/SupabaseClient";



const UserHandler = {
    async createUser({ id, name, lastName }) {
        const { data, error } = await supabase
            .from(User)
            .insert([{id:id, name:name, lastName:lastName }])
            .select()
        if (error) {
            throw error
        }

        /*
            Product colors are temporarily disabled]
            this.addProductColors({ productId: data[0].id, colors });
        */
        return data
    },
}
export default UserHandler