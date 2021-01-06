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
import TestCom from './Component0.js';
import Phptest from './mysqltest.js'
import ComSigong from './Component1.js'
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

      <View style={{flex:1}}>
        <View style={{borderWidth:1,position:'absolute',width:chartWidth+15,left:-2,bottom:chartHeight-60,height:60,flexDirection: 'row',backgroundColor:'white'}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.openDrawer()} style={{top:10,left:10}}>
                <Image
                source={logo2}
                style={{width:40,height:35}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('홈')}>
            <View style={{left:chartWidth/3,height:30,width:40}}>
              <Image source={testlogo} style={{width:40,height:34,marginTop:10,}}>
              </Image>
            </View>
            </TouchableOpacity>
            <View style={{left:chartWidth/1.7,top:10,width:75,height:35,backgroundColor:'#b84dff',
                  borderTopLeftRadius: 17,
                  borderTopRightRadius: 17,
                  borderBottomLeftRadius:17,
                  borderBottomRightRadius:17,}}>
              <Text style={{width:65,height:70,marginLeft:10,marginTop:8,color:'white', fontWeight:'bold'}}>
                PnL Mall
              </Text>
            </View>
        </View>
      </View>
      

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

const HeadHeder = () => {
  return (
    <View>
    <View style={{flex:1}}>
      <View style={{borderWidth:1,position:'absolute',width:chartWidth+1,bottom:chartHeight-60,height:60,flexDirection: 'row',backgroundColor:'white'}}>
      <View style={{backgroundColor:'white'}}>
        <Image source={logo2} style={{width:40,height:30,marginTop:15,marginLeft:10}}>
        </Image>
      </View>
      <View style={{left:chartWidth/3,height:30,width:40}}>
        <Image source={testlogo} style={{width:40,height:34,marginTop:10,}}>
        </Image>
      </View>
      <View style={{left:chartWidth/1.8,top:10,width:75,height:35,backgroundColor:'#b84dff',
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            borderBottomLeftRadius:17,
            borderBottomRightRadius:17,}}>
        <Text style={{width:65,height:70,marginLeft:10,marginTop:8,color:'white', fontWeight:'bold'}}>
          PnL Mail
        </Text>
      </View>
      

      </View>
    </View>
    </View>
   
  );
};




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


//=========================업체 자세히보기=============================
const ComLook=({navigation,route})=>{
  return(
    <View>
      <ScrollView style={{height:chartHeight-80,marginTop:60,}}>
        <View style={{margin:20,}}>
          <TestCom comname={route.params.name}></TestCom>
          <View style={{marginTop:10}}>
          <View style = {
            {
              "backgroundColor": "rgba(222, 218, 218, 255)",
              "width": 412,
              "height": 1
              
            }
            }
          />
          </View>
              
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          height={340}
        >
          <ComSigong></ComSigong><ComSigong></ComSigong><ComSigong></ComSigong><ComSigong></ComSigong>
        </ScrollView>
        <View style={{marginBottom:100, alignItems:'center'}}>
        <View style = {
      {
        "alignItems": "flex-start"
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 114,
        "paddingTop": 9,
        "width": 350,
        "height": 46,
        "borderRadius": 11,
        "backgroundColor": "rgba(71, 67, 55, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontSize": 20,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > 견적의뢰하기 </Text>
    </View>
    </View>
    </View>
          

        
    </ScrollView>

    <View style={{flex:1}}>
        <View style={{borderWidth:1,position:'absolute',width:chartWidth+15,left:-2,bottom:chartHeight-80,height:60,flexDirection: 'row',backgroundColor:'white'}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.openDrawer()} style={{top:10,left:10}}>
                <Image
                source={logo2}
                style={{width:40,height:35}}
                />
            </TouchableOpacity>
            <View style={{left:chartWidth/3,height:30,width:40}}>
            <TouchableOpacity onPress={() => navigation.navigate('홈')}>
              <Image source={testlogo} style={{width:40,height:34,marginTop:10,}}>
              </Image>
            </TouchableOpacity>
            </View>
            
            <View style={{left:chartWidth/1.8,top:10,width:75,height:35,backgroundColor:'#b84dff',
                  borderTopLeftRadius: 17,
                  borderTopRightRadius: 17,
                  borderBottomLeftRadius:17,
                  borderBottomRightRadius:17,}}>
              <Text style={{width:65,height:70,marginLeft:10,marginTop:8,color:'white', fontWeight:'bold'}}>
                PnL Mail
              </Text>
            </View>
        </View>
      </View>

      <View style={{flex:1}}>
        <View style={{borderWidth:1,position:'absolute',bottom:-20,flexDirection: 'row',}}>
        <TouchableOpacity onPress={() => navigation.navigate('홈')}>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg} style={{width:65,height:65,marginLeft:30}}>
          </ImageBackground>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg2} style={{width:65,height:65,marginLeft:20,marginRight:10}}>
          </ImageBackground>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg3} style={{width:65,height:65,marginLeft:20,marginRight:10}}>
          </ImageBackground>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg4} style={{width:65,height:65,marginLeft:20,marginRight:40}}>
          </ImageBackground>
        </View>
        </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}



//=====================================================================

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