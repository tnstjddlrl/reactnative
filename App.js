import React,{useState,Component} from "react";
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
} from "react-native";

import Swiper from 'react-native-swiper'


const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    marginTop:30,
    height:200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  viewStyle1: {
    backgroundColor : "#fff",
    flex: 1,
    width : 100,
    height : 50,
    marginLeft:10,
    marginRight:10,
    justifyContent: 'center',
    alignItems: 'center'
},
cardview :{
  backgroundColor: '#fff',
  height:300,

},
etitle:{
  fontSize: 25,
  marginTop: 30,
  marginBottom: 5,
  fontWeight: 'bold',
  textAlign: 'center',
},
etitle2:{
  fontSize: 17,
  marginTop: 1,
  marginBottom: 30,
  fontWeight: '300',
  textAlign: 'center',
},
reviewc:{
  height:400,
  backgroundColor : "#ff0043",
  marginBottom:40,
},
reviewT:{
  fontSize: 23,
  marginTop: 35,
  marginBottom: 35,
  fontWeight: 'bold',
  textAlign: 'center',
  color:'white',
},
reviewCard:{
  backgroundColor: '#e0e0eb',
  height:250,
  width:170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginLeft: 10,
    marginRight: 20,
},image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center"
},
imagetest:{
  borderTopLeftRadius: 1,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:1,
  width:180,
  height:100,
},
eventList:{
  marginLeft:15,
  marginRight:2,
},
bannerimg:{
  width:400,
  height:180,
},
button:{
  color:'black',
}

})

const App =() =>{
  const logo = { uri: "https://pluslink.kr/img/pluslink/logo.png" };
  const logo2 = { uri: "https://pluslink.kr/img/menu.png" };
  return(
    <View>
      <HeadHeder></HeadHeder>
      <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner></Banner>
        <Mmenu></Mmenu>
        <Company img={comImg} star='3.1' color='red' text='주방 수도, 인테리어 전문 업체입니다. 원하시는 디자인으로 깔끔하게 시공해드립니다.' addr='부산 남구'></Company>
        <Company img={comImg2} star='3.8' color='blue' text='수도전문 동진설비입니다. 새로운 수도 설치 전문입니다!' addr='부산 사하구'></Company>
         <EEvent></EEvent>
        <REview></REview>
        </ScrollView>
      </View>

      <HeadHeder></HeadHeder>
        <FootTer></FootTer>

        
    </View>
  )
}
const logo = { uri: "https://pluslink.kr/img/pluslink/logo.png" };
const logo2 = { uri: "https://pluslink.kr/img/menu.png" };
const testlogo = require('./logo.png')

const HeadHeder = () => {
  return (
    <View>
    <View style={{flex:1}}>
      <View style={{borderWidth:1,position:'absolute',width:chartWidth+1,bottom:680,height:60,flexDirection: 'row',backgroundColor:'white'}}>
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

const ffimg =require('./b01.png')
const ffimg2 =require('./b02.png')
const ffimg3 =require('./b03.png')
const ffimg4 =require('./b04.png')
const FootTer = () => {
  return (
    <View style={{flex:1}}>
        <View style={{borderWidth:1,position:'absolute',bottom:0,flexDirection: 'row',}}>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg} style={{width:65,height:65,marginLeft:20}}>
          </ImageBackground>
        </View>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg2} style={{width:65,height:65,marginLeft:20,marginRight:10}}>
          </ImageBackground>
        </View>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg3} style={{width:65,height:65,marginLeft:20,marginRight:10}}>
          </ImageBackground>
        </View>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg4} style={{width:65,height:65,marginLeft:20,marginRight:40}}>
          </ImageBackground>
        </View>

        </View>
      </View>
    
   
  );
};


const Banimg =require('./banner.png')
const Banimg2 =require('./banner2.png')
const Banimg3 =require('./banner3.png')

const Banner = ()=>{
  return(
    <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
        <ImageBackground source={Banimg} style={styles.bannerimg}>
        </ImageBackground>
        </View>
        <View style={styles.slide1}>
        <ImageBackground source={Banimg2} style={styles.bannerimg}>
        </ImageBackground>
        </View>
        <View style={styles.slide1}>
        <ImageBackground source={Banimg3} style={styles.bannerimg}>
        </ImageBackground>
        </View>
      </Swiper>
  );
}

const Mmenu = () =>{
  return(
    <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd ={
                    () => {console.log('Scrolling is End')}
                }
            >
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 전기 & 조명            
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 수도         
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 도배&장판
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 인테리어
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 샷시&창호
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                       # 청소&철거
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 보일러&배관
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 건물외부
                    </Text>
                </View>
               
                
            </ScrollView>
  )
}

const starimg =require('./review.png')
const comImg = require('./14.png')
const comImg2 =require('./123.png')
const Company=(prop)=>{
  return(
    <View>
      <View style={{width:chartWidth-20,height:150, margin:10, backgroundColor:'#e0ebeb',borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomEndRadius:10,borderBottomLeftRadius:10}}>
        <View style={{left:10,top:10,width:50,height:50,position:'absolute',backgroundColor:prop.color,borderTopLeftRadius:30,borderTopRightRadius:30,borderBottomEndRadius:30,borderBottomLeftRadius:30}}></View>
        <Image source={prop.img} style={{left:10,top:10,width:50,height:50,position:'absolute',borderTopLeftRadius:30,borderTopRightRadius:30,borderBottomRightRadius:30,borderBottomLeftRadius:30}}></Image>
        <Text numberOfLines={1} ellipsizeMode='tail' style={{top:70,marginLeft:10,marginRight:10}} >{prop.text}</Text>
        <Text style={{top:100,left:10,fontSize:12,}}>{prop.addr}</Text>
        <View style={{flex:1,position:'absolute',bottom:15,right:10,flexDirection:'row'}}>
          <Image source={starimg} style={{height:20,width:20}}></Image>
          <Text>{prop.star}</Text>
        </View>
      </View>
    </View>
  )
}

const Mmenutest=()=>{
  return(
    <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 100}}
    />
  )
}


const Eimg =require('./e_banner01.jpg')
const Eimg2 =require('./e_banner02.jpg')
const Eimg3 =require('./e_banner03.jpg')
const EEvent =() =>{
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
                <Image source={Eimg} style={styles.imagetest}></Image>
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
const image = { uri: "https://pluslink.kr/img/review_bg.jpg" };
const pinimg = require("./map_icon.png")
const REview =(prop)=>{
  return(
    <View style={styles.reviewc}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.reviewT}>실시간 리뷰</Text>
      <ScrollView
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd ={
                    () => {console.log('Scrolling is End')}
                }
            >
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
            </ScrollView>
            </ImageBackground>
    </View>
  )
}

const ReviewText=(prop)=>{
  return (
    <View style={{width:130,height:160,backgroundColor:"#fff",marginTop:60,marginLeft:20,marginRight:20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,}}>
      <Text style={{top:40,textAlign:'center'}}>테스트리뷰</Text>
      <View style={{position:'absolute',flexDirection:'row',top:60,left:15}}>
        <Image source={starimg} style={{width:20,height:20}}></Image>
        <Image source={starimg} style={{width:20,height:20}}></Image>
        <Image source={starimg} style={{width:20,height:20}}></Image>
        <Image source={starimg} style={{width:20,height:20}}></Image>
        <Image source={starimg} style={{width:20,height:20}}></Image>
      </View>
      
    
      <Text numberOfLines={4} ellipsizeMode='tail' style={{top:60,margin:5,height:70,textAlign:'center',fontSize:12}}>리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.</Text>
    </View>
  )
}

export default App;