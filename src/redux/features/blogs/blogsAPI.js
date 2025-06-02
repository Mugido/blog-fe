import publicAxios from "../../../components/publicAxios";

export const getBlogs = async (tags, search) => {
  let queryString = "";

  // Handle tags search
  if (tags && tags.length > 0) {
    // Use category parameter since our CategoryList items match the category field
    queryString = tags.map((tag) => `category=${tag}`).join("&");
  }

  // Handle title search
  if (search && search.trim() !== "") {
    const searchQuery = `category=${encodeURIComponent(search.trim())}`;
    queryString = queryString ? `${queryString}&${searchQuery}` : searchQuery;
  }

  try {
    // Use q parameter for full-text search
    console.log(queryString);
    const response = await publicAxios.get(
      `/blogs${queryString ? `?${queryString}` : ""}`
    );
    // const response = await publicAxios.get(`/blogs?title=Meta debuts generative AI features for advertisers`);
    console.log("Search Results:", response.data);
    return response.data;
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
};
