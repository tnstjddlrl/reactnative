import React, { useState } from "react";
import key from "./key";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  Dimensions,
  Modal,
  SafeAreaView 
} from 'react-native';
import Postcode from 'react-native-daum-postcode';
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  DateRangePicker,
  DatePicker,
  TimePicker,
  DateTimePicker,
  ListPicker,
  NumberPicker,
  CookingAmountPicker,
  StatePicker,
  StatePickerSmall,
  TextField,
} from 'react-native-ultimate-modal-picker';

const event = require('./eventBg.jpg')

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

const REquset = () => {
    const [value, onChangeText] = React.useState('');//textinput용
    const [text, setText] = useState("기본주소");
    const [show, setShow] = React.useState(false);//textinput용

    const items = [
      { label: '전기&조명', value: '전기&조명' },
      { label: '수도', value: '수도' },
      { label: '도배&장판', value: '도배&장판' },
      { label: '인테리어', value: '인테리어' },
      { label: '샷시&창호', value: '샷시&창호' },
      { label: '청소&철거', value: '청소&철거' },
      { label: '보일러&배관', value: '보일러&배관' },
      { label: '건물외부', value: '건물외부' },
    ];

  return (
    <SafeAreaView>
   
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
    <ListPicker
    items={items}
    style={{width:350}}
    onChange={(item) => console.log(item)}
  />
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
    <TouchableOpacity onPress={()=>setShow(true)}>
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
    ><Text>{text}</Text></View>
        </TouchableOpacity>
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
    <DatePicker
        title="Date"
        onChange={(date) => console.log(date)}
        mode="calendar"
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
    } >
    <View style = {
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

<Modal transparent={true} visible={show}>
<View style={{width:300, height:500,position:'absolute',margin:30}}>
  <Postcode
      jsOptions={{ animated: true }}
      onSelected={(data) => {setText(JSON.stringify(data.address)),setShow(false)}}
  />
</View>
</Modal>

</SafeAreaView>
  );
};

export default REquset;