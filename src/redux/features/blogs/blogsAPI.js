import publicAxios from "../../../components/publicAxios"

export const getBlogs = async(tags, search) => {
   let queryString = "";
   
   // Handle tags search
   if(tags && tags.length > 0) {
     queryString = tags.map(tag => `tags_like=${tag}`).join('&');
   }
   
   // Handle title search
   if(search && search.trim() !== "") {
     const searchQuery = `title_like=${search.trim()}`;
     queryString = queryString ? `${queryString}&${searchQuery}` : searchQuery;
   }
   
   try {
     const response = await publicAxios.get(`/blogs${queryString ? `?${queryString}` : ''}`);
     return response.data;
   } catch (error) {
     console.log(error);
     return [];
   }
}