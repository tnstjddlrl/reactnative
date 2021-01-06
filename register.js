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
const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;
import styles from './styles.js'

//================================회원가입===============================

const Register=({navigation})=>{
    const [value, onChangeText] = React.useState('');//textinput용
    
    return(
      <View>
        <View>
          <ScrollView style={{marginTop:56}}>
            <View style={{height:chartHeight*1.7}}>
            <View style={{width:chartWidth,height:150}}>
              <ImageBackground source={image} style={{flex: 1,resizeMode: "cover",justifyContent: "center"}}>
              <Text style={{position:'absolute',textAlignVertical:'center',top:30,left:15,color:'white',fontSize:20,fontWeight:'bold'}}>회원가입</Text>
              <View style={{position:'absolute',borderWidth:1,borderColor:"#d9d9d9",width:75,top:60,left:15}}></View>
              </ImageBackground>
            </View>
            <View style={{position:'absolute',backgroundColor:'#d9d9d9',borderWidth: 1,borderColor:"#a6a6a6",margin:20 , width:350,height:400, top:150}}>
            <Text style={{position:'absolute',textAlignVertical:'center',top:10,left:15,color:'black',fontSize:15,}}>이용정보 입력</Text>
            </View>
            <View style={{position:'absolute',backgroundColor:'white',borderWidth: 1,borderColor:"#a6a6a6",margin:20 , width:350,height:410, top:190}}>
            </View>
  
            <View style={{position:'absolute',top:220,left:35,width:320,height:70}}>
            <Text>아이디</Text>
            <TextInput
            style={{position:'absolute', height: 30,width:315,top:25, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
           />
           <Text style={{position:'absolute',fontSize:13,bottom:0}}>영문자, 숫자, _ 만 입력 가능. 최소 3자이상 입력하세요.</Text></View>
  
           <View style={{position:'absolute',top:310,left:35,width:320,height:70}}>
            <Text>비밀번호</Text>
            <TextInput
            style={{position:'absolute', height: 30,width:315,top:25, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
           />
           </View>
           <View style={{position:'absolute',top:380,left:35,width:320,height:70}}>
            <Text>비밀번호 확인</Text>
            <TextInput
            style={{position:'absolute', height: 30,width:315,top:25, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
           /></View>
           <View style={{position:'absolute',top:450,left:35,width:320,height:70}}>
            <Text>E-mail</Text>
            <TextInput
            style={{position:'absolute', height: 30,width:315,top:25, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
           /></View>
           <View style={{position:'absolute',top:520,left:35,width:320,height:70}}>
            <Text>추천업체코드</Text>
            <TextInput
            style={{position:'absolute', height: 30,width:315,top:25, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
           />
           <Text style={{position:'absolute',fontSize:13,bottom:0}}>추천업체코드 입력시 PL쇼핑몰 할인 쿠폰 지급</Text>
           </View>
  
  
           <View style={{position:'absolute',backgroundColor:'#d9d9d9',borderWidth: 1,borderColor:"#a6a6a6",margin:20 , width:350,height:200, top:640}}>
            <Text style={{position:'absolute',textAlignVertical:'center',top:10,left:15,color:'black',fontSize:15,}}>본인확인</Text>
            </View>
            <View style={{position:'absolute',backgroundColor:'white',borderWidth: 1,borderColor:"#a6a6a6",margin:20 , width:350,height:160, top:680}}>
            <View style={{position:'absolute',top:10,left:15,width:320,height:70}}>
            <Text>이름</Text>
            <TextInput
            style={{position:'absolute', height: 30,width:315,top:25, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
           /></View>
  
           <View style={{position:'absolute',top:80,left:15,width:320,height:70}}>
            <Text>휴대폰번호</Text>
            <TextInput
            style={{position:'absolute', height: 30,width:315,top:25, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
           />
           </View>
            </View>
          
            <View style={{position:'absolute',backgroundColor:'#d9d9d9',borderWidth: 1,borderColor:"#a6a6a6",margin:20 , width:350,height:100, top:880}}>
            <Text style={{position:'absolute',textAlignVertical:'center',top:10,left:15,color:'black',fontSize:15,}}>이미지등록</Text>
            </View>
            <View style={{position:'absolute',backgroundColor:'white',borderWidth: 1,borderColor:"#a6a6a6",margin:20 , width:350,height:120, top:920}}>
            <View style={{position:'absolute',top:10,left:15,width:320,height:70}}>
            <Text>대표이미지</Text>
            </View>
  
            </View>
            </View>
            <View style={{position:'absolute', top:1100,left:chartWidth/2.7,width:315,flex:1,flexDirection:'row'}}>
            <Button title={'회원가입'} color="#d24dff"></Button>
            <Button title={'취소'} color={'#404040'}></Button>
            </View>
            
          </ScrollView>
        </View>
  
  
  
        <View style={{flex:1}}>
          <View style={{borderWidth:1,position:'absolute',width:chartWidth+15,left:-2,bottom:680,height:60,flexDirection: 'row',backgroundColor:'white'}}>
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
          <View style={{borderWidth:1,position:'absolute',bottom:0,flexDirection: 'row',}}>
          <TouchableOpacity onPress={() => navigation.navigate('홈')}>
          <View style={{backgroundColor:'white'}}>
            <ImageBackground source={ffimg} style={{width:65,height:65,marginLeft:20}}>
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
  
  export default Register;
  //=====================================================================