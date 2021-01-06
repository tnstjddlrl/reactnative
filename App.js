import React,{useState,Component,useEffect} from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  AppRegistry,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CheckBox from '@react-native-community/checkbox';

import Phptest from './mysqltest.js'

import SigongBest from './Component2.js'
import REquset from './Requset.js'
import CurGyeon from './CurrentGyeon.js'
import Login from './Login.js'
import Company from './Company.js'
import EventToPage from './Eventtopage.js'
import Banner from './Banner.js'
import styles from './styles.js'
import Mmenu from './Mmenu.js'
import REview from './Review.js'
import Register from './register.js'
import FootTer from './footer.js'
import HeadHeder from "./header.js";
import ComLook from './comlook.js'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;



const App =({ navigation }) =>{
  const logo = { uri: "https://pluslink.kr/img/pluslink/logo.png" };
  const logo2 = { uri: "https://pluslink.kr/img/menu.png" };
  return(
    <View>
      <View>
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>
        <Banner></Banner>
        <Mmenu></Mmenu>

        <TouchableOpacity onPress={()=>navigation.navigate('회사자세히보기',{name:'김업체'})}>
        <Company img={comImg} star='3.1' color='red' text='주방 수도, 인테리어 전문 업체입니다. 원하시는 디자인으로 깔끔하게 시공해드립니다.' addr='부산 남구'></Company>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('회사자세히보기',{name:'박업체'})}>
        <Company img={comImg2} star='3.8' color='blue' text='수도전문 동진설비입니다. 새로운 수도 설치 전문입니다!' addr='부산 사하구'></Company>
        </TouchableOpacity>

        {/* 이벤트 */}
        <View style={styles.cardview}>
      <Text style={styles.etitle}>이벤트</Text>
      <Text style={styles.etitle2}>진행중인 이벤트를 확인해보세요!</Text>
      <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd ={
                    () => {console.log('Scrolling is End')}
                }
            >
              
              <View style={styles.eventList}>
              <TouchableOpacity onPress={()=>navigation.navigate('이벤트자세히보기',{name:'김업체'})}>
                <Image source={Eimg} style={styles.imagetest}></Image>
                </TouchableOpacity>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{width:180}}>[여름맞이 이벤트]2020년 7~월 수도견적 5000원 할인</Text>
              </View>
              
                <View style={styles.eventList}>
                  <Image source={Eimg2} style={styles.imagetest}></Image>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={{width:180}}>[여름맞이 이벤트]2020년 7~월 수도견적 5000원 할인</Text>
                </View>
                <View style={styles.eventList}>
                  <Image source={Eimg3} style={styles.imagetest}></Image>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={{width:180}}>[여름맞이 이벤트]2020년 7~월 수도견적 5000원 할인</Text>
              </View>
              
          <View>
          </View>

      </ScrollView>
    </View>
                {/* 이벤트 끝 */}

         <SigongBest></SigongBest>
        <REview></REview>
        </ScrollView>
      </View>

      <HeadHeder></HeadHeder>

      <FootTer></FootTer>

        
    </View>
  )
}

const starimg =require('./img/review.png')
const comImg = require('./img/14.png')
const comImg2 =require('./img/123.png')
const maker = require('./img/main_marker.png')

const ffimg =require('./img/b01.png')
const ffimg2 =require('./img/b02.png')
const ffimg3 =require('./img/b03.png')
const ffimg4 =require('./img/b04.png')

const logo = { uri: "https://pluslink.kr/img/pluslink/logo.png" };
const logo2 = { uri: "https://pluslink.kr/img/menu.png" };
const testlogo = require('./img/logo.png')





const Eimg =require('./img/e_banner01.jpg')
const Eimg2 =require('./img/e_banner02.jpg')
const Eimg3 =require('./img/e_banner03.jpg')
const EEvent =({navigation}) =>{
  return (
    <View style={styles.cardview}>
      <Text style={styles.etitle}>이벤트</Text>
      <Text style={styles.etitle2}>진행중인 이벤트를 확인해보세요!</Text>
      <ScrollView
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd ={
                    () => {console.log('Scrolling is End')}
                }
            >
              
              <View style={styles.eventList}>
              <TouchableOpacity onPress={()=>navigation.navigate('이벤트자세히보기',{name:'김업체'})}>
                <Image source={Eimg} style={styles.imagetest}></Image>
                </TouchableOpacity>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{width:180}}>[여름맞이 이벤트]2020년 7~월 수도견적 5000원 할인</Text>
              </View>
              
                <View style={styles.eventList}>
                  <Image source={Eimg2} style={styles.imagetest}></Image>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={{width:180}}>[여름맞이 이벤트]2020년 7~월 수도견적 5000원 할인</Text>
                </View>
                <View style={styles.eventList}>
                  <Image source={Eimg3} style={styles.imagetest}></Image>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={{width:180}}>[여름맞이 이벤트]2020년 7~월 수도견적 5000원 할인</Text>
              </View>
              
          <View>
          </View>

      </ScrollView>
    </View>
  )
}




//------------------------------------------------------------
function App2() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen 
          name="홈"
          component={App}
           />
        <Stack.Screen 
          name="로그인"
          component={Login}
           />
           <Stack.Screen 
          name="회원가입"
          component={Register}
           />
        <Stack.Screen 
          name="회사자세히보기"
          component={ComLook} />
        <Stack.Screen 
          name="회사테스트"
          component={Company} />
        <Stack.Screen 
          name="이벤트자세히보기"
          component={EventToPage} />
        <Stack.Screen 
          name="견적의뢰"
          component={REquset} />
        <Stack.Screen 
          name="견적현황"
          component={CurGyeon} />
        <Stack.Screen 
          name="푸터"
          component={FootTer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//----------------------------------------------------------




//============================화면넘기기테스트===========================
const NavTest = () =>{
  return(
    <View>
      <Text>안녕</Text>

    </View>
  )
}


//=====================================================================

//=====================================================================


export default App2;//App2