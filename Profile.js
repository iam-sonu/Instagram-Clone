import React from 'react';
import{Text,View,Image,ScrollView,TouchableOpacity, SafeAreaView} from 'react-native';

const profile=({navigation})=>{
    return(
        <SafeAreaView style={{backgroundColor:'white',flex:1,alignItems:'center',}}> 
         

          <View style={{backgroundColor:'white', height:40,width:400,flexDirection:'row',alignItems:'center'}}> 
          <View style={{backgroundColor:'white', height:40,width:300,marginLeft:10}}>
          <Text style={{fontSize:22,fontWeight:'bold',marginTop:3}}>
          <Image
            style={{height: 15, width: 15,}}
            source={require('../assets/images/lock.png')}
          /> 
          
          {" "}sonu79_official{" "}
          <Image
            style={{height: 15, width: 15, alignSelf:'center'}}
            source={require('../assets/images/down-arrow.png')}
          /> 
          </Text> 

          </View>
          <View style={{backgroundColor:'white', height:40,width:40,justifyContent:'center'}}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../assets/images/more.png')}
          /> 

          </View>
          <View style={{backgroundColor:'white', height:40,width:40,justifyContent:'center',alignItems:'center'}}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../assets/images/menu.png')}
          />  

          </View>

          </View>


          <View style={{backgroundColor:'white',height:120,width:400,flexDirection:'row',justifyContent:'space-between',}}>
          <View style={{backgroundColor:'white',height:120,width:120,alignItems:'center',justifyContent:'center'}}>
          <View style={{backgroundColor:'white',height:100,width:100,alignItems:'center',justifyContent:'center',borderRadius:50}}>
          <Image
          style={{height: 100, width: 100, borderRadius: 50}}
          source={require('../assets/images/pic1.jpg')}
        />
          </View>
          </View>
          <View style={{backgroundColor:'white',height:70,width:80,alignItems:'center',justifyContent:'flex-end'}}>
          <Text style={{fontSize:18,fontWeight:'500'}}>59</Text>
          <Text>Posts</Text>
          </View>

          <View style={{backgroundColor:'white',height:70,width:80,alignItems:'center',justifyContent:'flex-end'}}>
          <Text style={{fontSize:18,fontWeight:'500'}}>389</Text>
          <Text>Followers</Text>
          </View>

          <View style={{backgroundColor:'white',height:70,width:80,alignItems:'center',justifyContent:'flex-end'}}>
          <Text style={{fontSize:18,fontWeight:'500'}}>116</Text>
          <Text>Following</Text>
          </View>
        </View>

          <View style={{backgroundColor:'white',height:80,width:370}}>
          <Text style={{fontSize:16,fontWeight:'500'}}>Sonu Kumar</Text>
          <Text style={{fontSize:14,}}>Talkative,Adventurous...</Text>
          <Text style={{fontSize:14,}}>07 September🎂</Text>
          </View>

          <View style={{backgroundColor:'white', height:40, width:370,flexDirection:'row',justifyContent:'space-between'}}> 
          <View style={{backgroundColor:'white', height:35, width:325,flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:5}}> 
          <Text style={{fontSize:16,fontWeight:'500'}}>Edit Profile</Text>
          </View>

          <View style={{backgroundColor:'white', height:35, width:35,flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:5}}> 
          <Image
            style={{height: 15, width: 15, alignSelf:'center'}}
            source={require('../assets/images/down-arrow.png')}
          /> 
          </View>
          </View>

          <ScrollView
        style={{height: 1}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            //backgroundColor:'orange',
            height: 80,
            width: 600,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              //backgroundColor: 'green',
              borderRadius: 50,
              marginLeft: 10,
              alignItems:'center',
              
              
            }}>
            <Image
              style={{height: 60, width: 60, borderRadius: 50,}}
              source={require('../assets/images/pic1.jpg')}
            />
            <Text style={{marginLeft:0, marginTop: 5}}>My Pic</Text>
          </View>

          <View
            style={{
              height: 60,
              width: 60,
              //backgroundColor: 'blue',
              borderRadius: 50,
            }}>
            <Image
              style={{height: 60, width: 60, borderRadius: 50}}
              source={require('../assets/images/Logo.jpeg')}
            />
            <Text style={{marginLeft:5, marginTop: 5}}>Chhath</Text>
          </View>

          <View
            style={{
              height: 60,
              width: 60,
              //backgroundColor: 'green',
              borderRadius: 50,
            }}>
            <Image
              style={{height: 60, width: 60, borderRadius: 50}}
              source={require('../assets/images/pic2.jpeg')}
            />
            <Text style={{marginLeft:20, marginTop: 5}}>😊</Text>
          </View>

          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: 'white',
              borderRadius: 50,
            }}>
            <Image
              style={{height: 60, width: 60, borderRadius: 50}}
              source={require('../assets/images/pic3.jpeg')}
            />
            <Text style={{marginLeft:6, marginTop: 5}}>Project</Text>
          </View>

          <View
            style={{
              height: 60,
              width: 60,
              //backgroundColor: 'pink',
              borderRadius: 50,
            }}>
            <Image
              style={{height: 60, width: 60, borderRadius: 50}}
              source={require('../assets/images/pic1.jpg')}
            />
            <Text style={{marginLeft:3, marginTop: 5}}>NewYear</Text>
          </View>

          <View
            style={{
              height: 60,
              width: 60,
             // backgroundColor: 'grey',
              borderRadius: 50,
            }}>
            <Image
              style={{height: 60, width: 60, borderRadius: 50}}
              source={require('../assets/images/pic2.jpeg')}
            />
            <Text style={{marginLeft:12, marginTop: 5}}>Diwali</Text>
          </View>

          <View
            style={{
              height: 60,
              width: 60,
              //backgroundColor: 'green',
              borderRadius: 50,
            }}>
            <Image
              style={{height: 60, width: 60, borderRadius: 50}}
              source={require('../assets/images/Logo.jpeg')}
            />
            <Text style={{marginLeft:5, marginTop: 5}}>Birthday</Text>
          </View>

          <View
            style={{
              height: 60,
              width: 60,
             // backgroundColor: 'red',
              borderRadius: 50,
              alignItems:'center',
              justifyContent:'center',
              
            }}>
            <View style={{
                height: 60,
                width: 60,
                backgroundColor: 'white',
                borderRadius: 50,
                alignItems:'center',
                justifyContent:'center',
                marginTop:22
                
              }} >
            <Text style={{fontSize:40,}}>+</Text>
            </View>
            <Text style={{marginLeft:5, marginTop: 5}}>New</Text>
          </View>
        </View>
      </ScrollView>


          <View style={{backgroundColor:'white',height:50,width:320,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}> 
          <View style={{backgroundColor:'white',height:50,width:50,alignItems:'center',justifyContent:'center'}}> 
          <Image
            style={{height: 30, width: 30}}
            source={require('../assets/images/feed.png')}
          />  
          </View>

          <View style={{backgroundColor:'white',height:50,width:50,alignItems:'center',justifyContent:'center'}}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../assets/images/play-button.png')}
          />   
          </View>

          <View style={{backgroundColor:'white',height:50,width:50,alignItems:'center',justifyContent:'center'}}> 
          <Image
            style={{height: 25, width: 25}}
            source={require('../assets/images/tags.png')}
          />  
          </View>
          </View>

          <View style={{backgroundColor:'white',height:250,width:400}}>

          <ScrollView>
          <View style={{backgroundColor:'white',height:1250,width:400,flexDirection:'row'}}>
          <View style={{backgroundColor:'white',height:133.3,width:133.3}}> 
          <Image
          style={{height: 132, width: 132,}}
          source={require('../assets/images/pic3.jpeg')}
        />
          </View>
          <View style={{backgroundColor:'white',height:133.3,width:133.3}}> 
          <Image
          style={{height: 132, width: 132,}}
          source={require('../assets/images/pic2.jpeg')}
        />
          </View>
          <View style={{backgroundColor:'white',height:133.3,width:133.3}}> 
          <Image
          style={{height: 132, width: 132,}}
          source={require('../assets/images/pic1.jpg')}
        />
          </View>
          </View>
          </ScrollView>
          </View>

          

          <View
        style={{
          //backgroundColor:'red',
          height: 75,
          width: 400,
          marginBottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <View
          style={{
            //backgroundColor:'blue',
            height: 60,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 40, width: 35}}
            source={require('../assets/images/blank-home.png')}
          />
        </View>
        </TouchableOpacity>

        <View
          style={{
            //backgroundColor:'blue',
            height: 60,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 35, width: 35}}
            source={require('../assets/images/search.png')}
          />
        </View>

        <View
          style={{
            //backgroundColor:'blue',
            height: 60,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 35, width: 35}}
            source={require('../assets/images/more.png')}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Like')}>
        <View
          style={{
            //backgroundColor:'blue',
            height: 60,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../assets/images/heart.png')}
          />
        </View>
        </TouchableOpacity>

        
          <View
            style={{
              //backgroundColor:'blue',
              height: 60,
              width: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 35, width: 35}}
              source={require('../assets/images/use-profile.png')}
            />
          </View>
        
      </View>
  

        </SafeAreaView>
    )
}


export default profile;