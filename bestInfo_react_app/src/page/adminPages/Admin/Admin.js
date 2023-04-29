import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetPostsQuery, useGetPostQuery, useGetVideosQuery, useGetVideoQuery, useGetBannersQuery, useGetBannerQuery} from '../../../store/adminApiSlice';
import Spinner from '../../../components/admin/UI/Spinner/Spinner';
import Aside from "../../../components/admin/UI/Aside/Aside";
import NewsList from '../../../components/admin/NewsList/NewsList';
import NewsEditor from "../../../components/admin/NewsEditor/NewsEditor";
import VideoList from '../../../components/admin/VideoList/VideoList';
import VideoEditor from '../../../components/admin/VideoEditor/VideoEditor';
import BannerEditor from '../../../components/admin/BannerEditor/BannerEditor';
import BannerList from '../../../components/admin/BannerList/BannerList';

import './Admin.css';

const Admin = () => {
  let { id } = useParams()
  const posts = useGetPostsQuery();
  const post = useGetPostQuery(id);
  const videos = useGetVideosQuery();
  const video = useGetVideoQuery(id);
  const banners = useGetBannersQuery();
  const banner = useGetBannerQuery(id);

  let content;
  switch (window.location.pathname) {
    
    case `/admin/newsedit/${id}`:
      content = (post.isSuccess) ? <NewsEditor newsSingle={post?.data[0]} /> : <Spinner />
      break;
    case "/admin/newsadd":
      content = <NewsEditor />
      break;
    case "/admin/newslist":
      content = ((posts.isSuccess) ? <NewsList news={posts.data.news} /> : <Spinner />)
      break;
    case "/admin/videoadd":
      content = <VideoEditor />
      break;
    case `/admin/videoedit/${id}`:
        content = (video.isSuccess) ? <VideoEditor videoSingle={video.data[0]} /> : <Spinner />
      break;
    case "/admin/videolist":
      content = ((videos.isSuccess) ? <VideoList videos={videos.data.videos} /> : <Spinner />)
      break;

    case "/admin/banneradd": 
      content = <BannerEditor />
      break;
    case `/admin/banneredit/${id}`: 
    content = ((banner.isSuccess) ? <BannerEditor bannerSingle={banner.data[0]} /> : <Spinner/>)
      break;
    case "/admin/bannerlist": 
    content = ((banners.isSuccess) ? <BannerList  banners={banners.data.banners} /> : <Spinner />)
      break;
  }

  return (
    <div className='Admin'>
      <Aside />
      {content}
    </div>
  );
};

export default Admin;
