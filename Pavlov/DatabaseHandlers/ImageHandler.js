import supabase from "../config/SupabaseClient";
import { v4 as uuidv4 } from 'uuid';



const bucketFear = "fearstorage";

const ImageHandler =  {
    async uploadUserImage({file, userId}){
        const temp = uuidv4();
        const {data,error} = await supabase
            .storage
            .from(bucketFear)
            .upload(userId + "/" + temp, file);
        const res = supabase
            .storage
            .from(bucketFear)
            .getPublicUrl(`${userId}/${userId}`);
        if (error) {
            throw error;
        }
        return res;
    },

    async getUserImage({userId}) {
        const {data,error} = await supabase
        .storage
        .from(bucketFear)
        .list(userId + "/", {
            limit: 1,
            offset: 0
        });
        if (error) {
            throw error;
        }
        return data;
    }

  }
  

  export default ImageHandler;
