import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native';

const bg_1 = require('./case_bg.png')

const SigongBest = () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start"
      }
    } >
    <ImageBackground style = {
      {
        "width": 413,
        "height": 255
      }
    }
    source = {bg_1
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 146,
        "paddingTop": 171,
        "flex": 1
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 20,
        "color": "rgba(0, 0, 0, 255)"
      }
    } > 우수시공사례 </Text>
    </View>
    </ImageBackground></View >

  );
};

export default SigongBest;