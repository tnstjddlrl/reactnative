import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const event = require('./eventBg.jpg')



const REquset = () => {
  return (
    <ScrollView>
    <View style = {
      {
        "alignItems": "flex-start",
        height:1000
      }
    } >
    <ImageBackground style = {
      {
        "width": 412,
        "height": 125
      }
    }
    source = {event
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 15,
        "paddingTop": 48,
        "flex": 1
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 18,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > 견적의뢰 </Text>
    <View style = {
      {
        "marginStart": 0.5,
        "marginTop": 5.5,
        "backgroundColor": "rgba(255, 255, 255, 255)",
        "width": 72,
        "height": 2
      }
    }
    />
    </View>
    </ImageBackground>
    <Text style={{"fontFamily":"Segoe UI","fontWeight":"bold","fontSize":16,"color":"rgba(0, 0, 0, 255)","marginStart":16,"marginTop":37}}>카테고리</Text >
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 15,
        "marginTop": 9,
        "width": 381,
        "height": 38,
        "borderWidth": 1,
        "borderColor": "rgba(171, 171, 171, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    ><DropDownPicker
    items={[
        {label: 'USA', value: 'usa',hidden: true},
        {label: 'UK', value: 'uk',},
        {label: 'France', value: 'france',},
    ]}
    containerStyle={{width:381,height:37}}
/></View>
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 16,
        "color": "rgba(0, 0, 0, 255)",
        "marginStart": 17,
        "marginTop": 9
      }
    } >세부항목 </Text>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 16,
        "marginTop": 9,
        "width": 381,
        "height": 38,
        "borderWidth": 1,
        "borderColor": "rgba(171, 171, 171, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 16,
        "color": "rgba(0, 0, 0, 255)",
        "marginStart": 15,
        "marginTop": 17
      }
    } >시공주소 </Text>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 15,
        "marginTop": 8,
        "width": 325,
        "height": 37,
        "borderWidth": 1,
        "borderColor": "rgba(171, 171, 171, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 15,
        "marginTop": 10,
        "width": 325,
        "height": 37,
        "borderWidth": 1,
        "borderColor": "rgba(171, 171, 171, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 16,
        "color": "rgba(0, 0, 0, 255)",
        "marginStart": 15,
        "marginTop": 17
      }
    } >방문날짜 </Text>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 15,
        "marginTop": 8,
        "width": 325,
        "height": 37,
        "borderWidth": 1,
        "borderColor": "rgba(171, 171, 171, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 13,
        "color": "rgba(252, 0, 0, 255)",
        "marginStart": 16,
        "marginTop": 2
      }
    } > # 방문날짜 이전에 낙찰이 되지않으면 견적이 자동취소 됩니다. </Text>
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 16,
        "color": "rgba(0, 0, 0, 255)",
        "marginStart": 17,
        "marginTop": 10
      }
    } >상세설명 </Text>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 17,
        "marginTop": 8,
        "width": 380,
        "height": 120,
        "borderWidth": 1,
        "borderColor": "rgba(161, 161, 161, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 16,
        "color": "rgba(0, 0, 0, 255)",
        "marginStart": 17,
        "marginTop": 17
      }
    } >첨부파일 </Text>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 16,
        "marginTop": 18,
        "width": 65,
        "height": 35,
        "borderWidth": 1,
        "borderColor": "rgba(112, 112, 112, 255)",
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    }
    />
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "paddingStart": 9,
        "paddingTop": 6,
        "marginStart": 17,
        "marginTop": -35,
        "width": 380,
        "height": 35,
        "borderWidth": 1,
        "borderColor": "rgba(112, 112, 112, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 16,
        "color": "rgba(0, 0, 0, 255)"
      }
    } > 파일 0 </Text>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 15,
        "width": 221,
        "height": 21,
        "borderWidth": 1,
        "borderColor": "rgba(112, 112, 112, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    </View>
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 18,
        "paddingTop": 7,
        "marginStart": 15,
        "marginTop": 17,
        "width": 84,
        "height": 33,
        "backgroundColor": "rgba(165, 121, 201, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 12,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > 추가하기 </Text>
    </View>
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 18,
        "paddingTop": 7,
        "marginStart": 103,
        "marginTop": -33,
        "width": 84,
        "height": 33,
        "backgroundColor": "rgba(51, 51, 51, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 12,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > 삭제하기 </Text>
    </View>
    <View style = {
      {
        flexDirection: 'row',
        alignItems: 'flex-start'
      }
    } ><View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 19,
        "paddingTop": 8,
        "marginStart": 137,
        "marginTop": 57,
        "width": 84,
        "height": 33,
        "backgroundColor": "rgba(165, 121, 201, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 12,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > 작성하기 </Text>
    </View>
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 13,
        "paddingTop": 8,
        "marginStart": 5,
        "marginTop": 57,
        "width": 50,
        "height": 33,
        "backgroundColor": "rgba(51, 51, 51, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontWeight": "bold",
        "fontSize": 12,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > 취소 </Text>
    </View>
    </View>
    </View>
    </ScrollView>

  );
};

export default REquset;