import {View} from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const postInfo = [
  {
    postTitle: '민영',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 800,
    isLiked: true,
  },
  {
    postTitle: '사나',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 777,
    isLiked: false,
  },
  {
    postTitle: '다현',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 567,
    isLiked: false,
  },
  {
    postTitle: 'React',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 123,
    isLiked: true,
  },
];

const Posts = () => {
  return (
    <View>
      {postInfo.map((data, index) => {
        return <PostItem key={index} data={data} />;
      })}
    </View>
  );
};

export default Posts;
