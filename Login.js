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

//로그인 연동 해야함...
//================================로그인===============================



const Login=({navigation})=>{
    const [value, onChangeText] = React.useState('');//textinput용
    const [toggleCheckBox, setToggleCheckBox] = useState(false)//체크박스용
  
    return(
      <View style={{height:chartHeight-20}}>
        
        <View style={{position:'absolute',backgroundColor:'white',borderWidth: 1,borderColor:"#a6a6a6",margin:20 , width:350,height:500, top:100}}>
          <Text style={{color: 'black',fontSize: 30,fontWeight: 'bold',position:'absolute', top:40,left:15}}>로그인</Text>
          <View style={{position:'absolute',borderWidth:1,width:80,top:80,left:15}}></View>
          <TextInput
            style={{position:'absolute', height: 40,width:315,marginLeft:15 ,top:120,  borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder='아이디'
          />
          <TextInput
            style={{position:'absolute', height: 40,width:315,marginLeft:15 ,top:180,  borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder='비밀번호'
          />
  
          <View style={{flex:1,flexDirection:'row',position:'absolute',top:230,left:10}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={{textAlignVertical:'center'}}>자동로그인</Text>
          <Text style={{textAlign:'right',textAlignVertical:'center',marginLeft:90}}>아이디/비밀번호 찾기</Text>
          
          </View>
          <View style={{position:'absolute', top:270,left:15,width:315}}>
          <Button title={'로그인'} color="#d24dff"></Button>
          </View>
          <View style={{position:'absolute',borderWidth:1,borderColor:"#d9d9d9",width:350,top:440}}></View>
          <View style={{position:'absolute',left:15,flex:1,flexDirection:'row',top:455,height:30}}>
            <Text style={{textAlignVertical:'center',marginRight:10}}>처음이신가요??</Text>
            
            <Button title={'회원가입'} color={'#404040'}></Button>
          </View>
  
        </View>
  
  
  
  
  
  
        <View style={{flex:1}}>
          <View style={{borderWidth:1,position:'absolute',width:chartWidth+15,left:-2,bottom:310,height:60,flexDirection: 'row',backgroundColor:'white'}}>
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
  
  export default Login;
  
  
  //=====================================================================