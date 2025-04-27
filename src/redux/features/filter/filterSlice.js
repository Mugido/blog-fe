import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs } from "../blogs/blogSlice";

const initialState = {
  tags: [   {
    "id": 1,
    "title": "Meta debuts generative AI features for advertisers",
    "image": "https://techcrunch.com/wp-content/uploads/2023/10/meta-gen-ai-ads.jpg?w=430&h=230&crop=1",
    "category": "AI",
    "author": "Sarah Perez",
    "authorPic": "https://randomuser.me/api/portraits/women/90.jpg",
    "published_date": "October 4, 2023",
    "reading_time": "5 minutes",
    "content": "Meta announced today it is rolling out its first generative AI features for advertisers, allowing them to use AI to create backgrounds, expand images, and generate multiple versions of ad text...",
    "tags": ["Blogging", "Writing", "AI"]
},
{
    "id": 3,
    "title": "Making wearable medical devices more patient-friendly with Professor Esther Rodriguez-Villegas from Acurable",
    "image": "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=430&h=230&crop=1",
    "category": "Health",
    "author": "Darrell Etherington",
    "authorPic": "https://randomuser.me/api/portraits/men/86.jpg",
    "published_date": "October 4, 2023",
    "reading_time": "8 minutes",
    "content": "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable...",
    "tags": ["Biotech", "Health"]
},
{
    "id": 4,
    "title": "Rainforest raises $8.5M to help software companies embed financial services, payments",
    "image": "https://techcrunch.com/wp-content/uploads/2015/02/shutterstock_128451140.jpg?w=430&h=230&crop=1",
    "category": "Fintech",
    "author": "Mary Ann Azevedo",
    "authorPic": "https://randomuser.me/api/portraits/women/81.jpg",
    "published_date": "2023-10-01",
    "reading_time": "5 minutes",
    "content": "In November 2019, Andreessen Horowitz General Partner Angela Strange famously declared that, “Every company will be a fintech company.” Specifically, Strange projected that — in the not-too-d...",
    "tags": ["Fintech", "Writing"]
},
{
    "id": 5,
    "title": "Pow.bio says biomanufacturing is broken and its continuous fermentation tech will fix it",
    "image": "https://techcrunch.com/wp-content/uploads/2023/10/Pow-Lab2.jpg?w=430&h=230&crop=1",
    "category": "Startups",
    "author": "Christine Hall",
    "authorPic": "https://randomuser.me/api/portraits/men/89.jpg",
    "published_date": "2023-10-01",
    "reading_time": "5 minutes",
    "content": "Pow.bio intends to bring down the costs associated with biomanufacturing by reimagining of fermentation facility operations.",
    "tags": ["Startups", "Writing"]
},
{
    "id": 6,
    "title": "Recapitalization, $60M Series D support growth of e-commerce financier Clearco",
    "image": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1314165902.jpg?w=430&h=230&crop=1",
    "category": "Fintech",
    "author": "Christine Hall",
    "authorPic": "https://randomuser.me/api/portraits/men/86.jpg",
    "published_date": "2023-10-01",
    "reading_time": "5 minutes",
    "content": "Today is news marks a turnaround for a company that is had its share of ups and downs over the past year.",
    "tags": ["Blogging", "Writing"]
},],
  // tags: fetchBlogs,
  search: ""
}


const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers:{
    tagSelected: (state, action) => {
        state.tags = [action.payload]
    },
    searched: (state, action) => {
      state.search = action.payload
    }
  }

})
export default filterSlice.reducer;
export const{tagSelected, searched} = filterSlice.actions;
// export const{searched} = filterSlice.actions;

