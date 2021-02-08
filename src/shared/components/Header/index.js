/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

const Header = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          margin: 15,
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
        }}>
        <View>
          <Text style={{fontWeight: '500', fontSize: 20, color: '#EC008C'}}>
            meu
            <Text style={{fontSize: 30, paddingRight: 0, marginRight: 10}}>banQi</Text>
            <Image
              source={require('../../../../assets/arrow-down.png')}
              style={{resizeMode: 'contain', marginRight: 10}}
            />
          </Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#EC008C',
              width: 10,
              height: 10,
              borderRadius: 8,
              position: 'absolute',
              top: -2,
              right: 1,
              zIndex: 10,
            }}
          />
          <Image source={require('../../../../assets/Vector.png')}/>
        </View>
      </View>
    </>
  );
};

export default Header;