import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FriendProfileData} from './Database';

const ActivityThisWeek = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={{fontWeight: 'bold'}}>이번 주</Text>
      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        {FriendProfileData.slice(0, 3).map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.push('FriendProfile', {
                  name: data.name,
                  profileImage: data.profileImage,
                  follow: data.follow,
                  post: data.posts,
                  followers: data.followers,
                  following: data.following,
                })
              }
              key={index}>
              <Text>
                {data.name} {''}
              </Text>
            </TouchableOpacity>
          );
        })}
        <Text>님이 팔로우 하기 시작했습니다.</Text>
      </View>
    </>
  );
};

export default ActivityThisWeek;
