import React, { useEffect } from 'react'
import { AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBlog } from '../../redux/features/singleBlog/blogSlice'
import PopularBlogs from './PopularBlogs'

const SingleBlog = () => {
  const {id} = useParams()
  //console.log(id)
  const dispatch = useDispatch();
  const {blog} = useSelector(state => state.blog)
  useEffect(() => {
    dispatch(fetchBlog(id))
    window.scrollTo(0, 0)
  }, [dispatch, id]);
  //console.log(blog);
  const {title, image, category, author, authorPic, published_date, reading_time, content, tags} = blog;

  return (
    <article className="mt-8">
    <div className="mb-4 md:mb-0 w-full mx-auto relative">
      <div className="px-4 lg:px-0">
        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
        {title}
        </h2>
        <a
          href="#"
          className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
        >
          {category}
        </a>
      </div>

      <img
        src={image}
        className="w-full object-cover lg:rounded"
        style={{ height: "28em" }}
        alt="Blog Cover"
      />
    </div>

    <div className="flex flex-col lg:flex-row lg:space-x-12">
      <div className="px-4 lg:px-0 mt-8 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
        {/* ... Existing code ... */}
        {content}
        <br /> <br />
        <p>
        Imagine a world where financial transactions are seamless, borderless, and free from centralized control. Smart contracts 
    are automating complex agreements, reducing fraud, and enabling trustless systems that empower individuals and businesses alike. 
    As the digital asset market grows, opportunities in staking, yield farming, and tokenized assets are unlocking new ways to earn and 
    invest. While volatility and regulation remain challenges, the future of crypto holds immense potential, with innovation driving 
    mainstream adoption. Whether you're a seasoned investor or a curious newcomer, understanding the dynamics of cryptocurrency is essential. With ongoing 
    advancements in Web3, the Metaverse, and decentralized finance (DeFi), the financial landscape is evolving at an unprecedented pace. 
    The question isn’t whether crypto will change the world—it already is. The real question is: Are you ready to be part of the revolution?
        </p>
      </div>

      <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
        <div className="p-4 border-t border-b md:border md:rounded">
          <div className="flex py-2">
            <img
              src={authorPic}
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt="Author"
            />
            <div>
              <p className="font-semibold text-gray-700 text-sm">
                {author}
              </p>
              <p className="font-semibold text-gray-600 text-xs"> Editor </p>
            </div>
          </div>
          <p className="text-gray-700 py-3">
          Mike writes about technology, blockchain, and the evolving digital landscape.Passionate about decentralization, he explores how crypto, AI, and fintech are shaping the future of finance. Whether it's analyzing the latest DeFi trends or discussing the impact of NFTs, Mike delivers insightful content that keeps readers ahead of the curve. 
          </p>
          <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
            Follow
            <AiOutlineHeart className="ml-2" />
          </button>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between mt-4 md:w-1/2">
      <div className="flex items-center space-x-2">
        <BiCommentDetail className="text-gray-600" />
        <span className="text-gray-600">15 comments</span>
      </div>
      <div className="flex items-center space-x-2 mt-8">
        <AiOutlineHeart className="text-red-500" />
        <span className="text-gray-600">120 likes</span>
      </div>
      <a
        href="/"
        className="text-green-700 inline-flex items-center justify-center"
      >
        Back to Blogs
        <AiOutlineArrowRight className="ml-2" />
      </a>
    </div>

    <PopularBlogs />

   
  </article>
  

  )
}

export default SingleBlog