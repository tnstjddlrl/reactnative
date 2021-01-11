import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

const event = require('./img/eventBg.jpg')
const arrow = require('./img/arrow02.png')

import { useNavigation } from '@react-navigation/native';

import FootTer from './footer.js'
import HeadHeder from "./header.js";
import { ScrollView } from 'react-native-gesture-handler';

const CurrentTable =() =>{
    return(
        <View>
            <View style={{width:chartWidth,height:chartHeight}}>
                <ScrollView >
                    <View style={{width:chartWidth,marginTop:50}}>
                    <ImageBackground source={event} style={{width:chartWidth,height:chartHeight/7}}>
                    </ImageBackground>
                    <Text style={{position:'absolute',color:"white",fontSize:20,fontWeight:'bold',top:40,left:10}}>견적현황</Text>
                    </View>



                </ScrollView>
            </View>
            <HeadHeder></HeadHeder>
                <FootTer></FootTer>

        </View>
    )
}

export default CurrentTable;