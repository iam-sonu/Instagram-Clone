import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dasboard = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        //backgroundColor:'red',
        alignItems: 'center',
      }}>
      <View
        style={{
          // backgroundColor:'green',
          height: 50,
          width: 400,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            //backgroundColor:'yellow',
            height: 50,
            width: 75,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../assets/images/camera.png')}
          />
        </View>

        <View
          style={{
            //backgroundColor:'grey',
            height: 50,
            width: 175,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{alignSelf: 'center', fontSize: 26, fontWeight: 'bold'}}>
            {' '}
            Instagram
          </Text>
        </View>

        <View
          style={{
            //backgroundColor:'blue',
            height: 50,
            width: 75,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../assets/images/send.png')}
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
            width: 1000,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'green',
              borderRadius: 75,
              marginLeft: 10,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/pic1.jpg')}
            />
            <Text style={{marginLeft: 23, marginTop: 5}}>You</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'blue',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/Logo.jpeg')}
            />
            <Text style={{marginLeft: 0, marginTop: 5}}>risertechub</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'green',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/pic2.jpeg')}
            />
            <Text style={{marginLeft: 0, marginTop: 5}}>sonukumar</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'white',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/pic3.jpeg')}
            />
            <Text style={{marginLeft: 0, marginTop: 5}}>rahulkumar</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'pink',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/pic1.jpg')}
            />
            <Text style={{marginLeft: 0, marginTop: 5}}>risertechub</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'grey',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/pic2.jpeg')}
            />
            <Text style={{marginLeft: 7, marginTop: 5}}>shivamraj</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'red',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/Logo.jpeg')}
            />
            <Text style={{marginLeft: 0, marginTop: 5}}>risertechub</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'green',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/Logo.jpeg')}
            />
            <Text style={{marginLeft: 0, marginTop: 5}}>risertechub</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'blue',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/pic3.jpeg')}
            />
            <Text style={{marginLeft: 0, marginTop: 5}}>risertechub</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'green',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/Logo.jpeg')}
            />
            <Text style={{marginLeft: 0, marginTop: 5}}>risertechub</Text>
          </View>

          <View
            style={{
              height: 75,
              width: 75,
              backgroundColor: 'white',
              borderRadius: 75,
            }}>
            <Image
              style={{height: 75, width: 75, borderRadius: 50}}
              source={require('../assets/images/pic2.jpeg')}
            />
            <Text style={{marginLeft: 0, marginTop: 5}}>risertechub</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          //backgroundColor:'pink',
          height: 525,
          width: 400,
          alignItems: 'center',
        }}>
        <ScrollView>
          <View
            style={{
              //backgroundColor:'green',
              height: 2500,
              width: 400,
            }}>
            <View
              style={{
                //backgroundColor:'yellow',
                height: 60,
                width: 400,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'blue',
                  height: 55,
                  width: 55,
                  borderRadius: 50,
                  marginLeft: 10,
                }}>
                <Image
                  style={{height: 55, width: 55, borderRadius: 50}}
                  source={require('../assets/images/pic1.jpg')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 70,
                  width: 130,
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    //backgroundColor:'grey',
                    height: 35,
                    width: 125,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    {' '}
                    sonu79_official
                  </Text>
                </View>
                <Text style={{fontSize: 14}}> Pune, Maharashtra</Text>
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  marginLeft: 125,
                }}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>...</Text>
              </View>
            </View>

            <View style={{backgroundColor: 'grey', height: 400, width: 400}}>
              <Image
                style={{height: 400, width: 400}}
                source={require('../assets/images/pic3.jpeg')}
              />
            </View>

            <View
              style={{
                //backgroundColor:'yellow',
                height: 50,
                width: 400,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../assets/images/heart.png')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 40}}
                  source={require('../assets/images/chat.png')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../assets/images/send.png')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../assets/images/save.png')}
                />
              </View>
            </View>

            <View
              style={{
                //backgroundColor:'grey',
                height: 40,
                width: 400,
                marginBottom: 20,
              }}>
              <Text style={{marginLeft: 20, fontWeight: 'bold'}}>
                {' '}
                23 Likes
              </Text>
              <Text style={{marginLeft: 20, fontWeight: 'bold'}}>
                {' '}
                sonu79_official
              </Text>
            </View>

            <View
              style={{
                //backgroundColor:'yellow',
                height: 60,
                width: 400,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'blue',
                  height: 55,
                  width: 55,
                  borderRadius: 50,
                  marginLeft: 10,
                }}>
                <Image
                  style={{height: 55, width: 55, borderRadius: 50}}
                  source={require('../assets/images/pic1.jpg')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 70,
                  width: 130,
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    //backgroundColor:'grey',
                    height: 35,
                    width: 125,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    {' '}
                    sonu79_official
                  </Text>
                </View>
                <Text style={{fontSize: 14}}> Pune, Maharashtra</Text>
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  marginLeft: 125,
                }}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>...</Text>
              </View>
            </View>

            <View style={{backgroundColor: 'grey', height: 400, width: 400}}>
              <Image
                style={{height: 400, width: 400}}
                source={require('../assets/images/pic2.jpeg')}
              />
            </View>

            <View
              style={{
                //backgroundColor:'yellow',
                height: 50,
                width: 400,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../assets/images/heart.png')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 40}}
                  source={require('../assets/images/chat.png')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../assets/images/send.png')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../assets/images/save.png')}
                />
              </View>
            </View>

            <View
              style={{
                //backgroundColor:'grey',
                height: 40,
                width: 400,
                marginBottom: 20,
              }}>
              <Text style={{marginLeft: 20, fontWeight: 'bold'}}>
                {' '}
                26 Likes
              </Text>
              <Text style={{marginLeft: 20, fontWeight: 'bold'}}>
                {' '}
                sonu79_official
              </Text>
            </View>

            <View
              style={{
                //backgroundColor:'yellow',
                height: 60,
                width: 400,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'blue',
                  height: 55,
                  width: 55,
                  borderRadius: 50,
                  marginLeft: 10,
                }}>
                <Image
                  style={{height: 55, width: 55, borderRadius: 50}}
                  source={require('../assets/images/pic1.jpg')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 70,
                  width: 130,
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    //backgroundColor:'grey',
                    height: 35,
                    width: 125,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    {' '}
                    sonu79_official
                  </Text>
                </View>
                <Text style={{fontSize: 14}}> Pune, Maharashtra</Text>
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  marginLeft: 125,
                }}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>...</Text>
              </View>
            </View>

            <View style={{backgroundColor: 'grey', height: 400, width: 400}}>
              <Image
                style={{height: 400, width: 400}}
                source={require('../assets/images/pic1.jpg')}
              />
            </View>

            <View
              style={{
                //backgroundColor:'yellow',
                height: 50,
                width: 400,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../assets/images/heart.png')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 40}}
                  source={require('../assets/images/chat.png')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../assets/images/send.png')}
                />
              </View>

              <View
                style={{
                  //backgroundColor:'blue',
                  height: 50,
                  width: 50,
                  marginLeft: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../assets/images/save.png')}
                />
              </View>
            </View>

            <View
              style={{
                //backgroundColor:'grey',
                height: 40,
                width: 400,
                marginBottom: 20,
              }}>
              <Text style={{marginLeft: 20, fontWeight: 'bold'}}>
                {' '}
                26 Likes
              </Text>
              <Text style={{marginLeft: 20, fontWeight: 'bold'}}>
                {' '}
                sonu79_official
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          //backgroundColor:'red',
          height: 75,
          width: 400,
          marginTop: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
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
            source={require('../assets/images/home.png')}
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

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
              source={require('../assets/images/profile.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Dasboard;
