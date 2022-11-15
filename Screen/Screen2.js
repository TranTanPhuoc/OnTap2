import { StyleSheet, Text, View,Image, SafeAreaView, Animated, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import OnboardingItem from './OnboardingItem';
function Screen2(){
    const navigation = useNavigation();
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const [list,setList] = useState([]);
  const slides = [
    {id:1,name:"image1", image:require('../images/image.jpg')},
    {id:2,name:"image2", image:require('../images/image1.png')},
];
  const coffee = [
    {id:1,name:"Cafe", image:require('../images/cafe.jpg'),price:10},
    {id:2,name:"Latte", image:require('../images/latte.jpg'),price:6},
    {id:3,name:"Trà Chanh", image:require('../images/trachanh.jpg'),price:3},
    {id:4,name:"Trà đào", image:require('../images/tradao.jpg'),price:4},
    {id:5,name:"Trà dâu", image:require('../images/tradau.jpg'),price:5},
    {id:6,name:"Trà lài", image:require('../images/tralai.jpg'),price:3},
    {id:7,name:"Trà sữa", image:require('../images/trasuachanchau.jpg'),price:5},
    {id:8,name:"Trà tắc", image:require('../images/tratac.jpg'),price:2},
    {id:9,name:"Trà vãi", image:require('../images/travai.jpg'),price:4},
    {id:10,name:"Trà vãi", image:require('../images/travai.jpg'),price:4},
];
    
    const onPressItem =(id)=>{
            coffee.map((item)=>{
                if(item.id == id){
                    setList([...list,{id:item.id,name:item.name,image:item.image,price:item.price,quanity:1}]);
                }
                else{
                    list.map((e)=>{
                        if(e.id == id){
                            setList(list.filter(item=> item.id !== id));
                        }
                    })
                    
                }
            })

        
    }
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const renderItem= ({item}) =>{
        return(
            <View style={{flex:1,height:300,width:"100%",justifyContent:'center',alignItems:'center'}}>
                <View style={{width:"90%",borderRadius:10,backgroundColor:"#D7D7D7",flex:0.95}}>
                    <View style={{flex:0.6,justifyContent:'center',alignItems:'center'}}>
                        <View style={{height:"80%",width:"80%",}}>
                            <Image source={item.image} style={{height:"100%",width:"100%",borderRadius:10,}}/>
                        </View>
                    </View>
                    <View style={{flex:0.4,marginLeft:10,marginRight:10,}}>
                        <View style={{flex:0.3,justifyContent:'center'}}>
                            <Text style={{fontSize:26,fontWeight:'600'}}>{item.name}</Text>
                        </View>
                        <View style={{flex:0.2,justifyContent:'center'}}>
                            <Text style={{fontSize:18,color:'#898989'}}>High Land Coffee</Text>
                        </View>
                        <View style={{flex:0.5,justifyContent:'space-between',display:'flex',flexDirection:'row',alignItems:"center"}}>
                            <Text style={{fontSize:22,}}>$ {item.price}</Text>
                            <TouchableOpacity onPress={()=>onPressItem(item.id)} style={{height:40,width:40,backgroundColor:'#F5B16D',justifyContent:'center',alignItems:'center',borderRadius:10,}}>
                                <MaterialIcons name="add" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    const hanldPress = ()=>{
        navigation.navigate("Screen3",{list:list})
    }
    const amin = useRef(new Animated.Value(0)).current;
    const rotation = amin.interpolate({
        inputRange:[-1,1],
        outputRange:["-20deg","20deg"]
    });
    const hanldMove = ()=>{
        Animated.sequence([
            Animated.timing(amin,{
                toValue:-1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:-1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:-1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:0,
                duration:300,
                useNativeDriver: true
            }),
        ]).start();
    }
    // console.log('====================================');
    // console.log(list);
    // console.log('====================================');
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:0.1,backgroundColor:'#FFEBCD',borderRadius:20,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:0.15,alignItems:'center'}}>
                    <Feather name="menu" size={32} color="black" />
                </View>
                <View style={{flex:0.6,display:'flex',flexDirection:'row',height:"100%"}}>
                    <View style={{flex:0.2,height:"100%",justifyContent:'center',alignItems:'center'}}>
                        <FontAwesome5 name="map-marker-alt" size={24} color="#F4A460" />
                    </View>
                    <View style={{flex:0.8,height:"100%",justifyContent:'center',}}>
                        <Text style={{fontSize:18,fontWeight:"600"}}>Sukarabad, Dhaka</Text>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <Text style={{fontSize:18,fontWeight:"600",marginRight:10,}}>Bangladesk</Text>
                            <FontAwesome name="caret-down" size={20} color="#F4A460" />
                        </View>
                    </View>
                </View>
                <View style={{flex:0.25,alignItems:'center',display:'flex',flexDirection:'row'}}>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                        <Ionicons name="chatbox-outline" size={24} color="black" />
                    </View>
                    <TouchableOpacity onPress={hanldMove} style={{flex:0.5,justifyContent:'center',alignItems:'center',}}>
                        <Animated.View  style={{alignSelf:'center',transform:[{rotate:rotation}],}}>
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={{flex:0.8,marginLeft:10,marginRight:10,}}>
                <View style={{flex:0.35,justifyContent:'center',height:"100%"}}>
                    <View style={{flex:0.8,height:"100%",borderRadius:20,}}>
                    <FlatList
                            data={slides}
                            renderItem={({ item }) => <OnboardingItem item={item} />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            bounces={false}
                            keyExtractor={(item) => item.id}
                            onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            {
                                useNativeDriver: false,
                            }
                            )}
                            scrollEventThrottle={32}
                            viewabilityConfig={viewConfig}
                            ref={slidesRef}
                        />
                    </View>
                </View>
                <View style={{flex:0.1,display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',}}>
                    <TouchableOpacity style={{height:40,backgroundColor:'#EE7942',justifyContent:'center',alignItems:'center',flex:0.3,borderRadius:30}}>
                        <Text style={{fontSize:20,color:'white'}}>All Coffee</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:40,backgroundColor:'#FFD39B',justifyContent:'center',alignItems:'center',flex:0.3,borderRadius:30}}>
                        <Text style={{fontSize:20}}>Hot Coffees</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:40,backgroundColor:'#FFD39B',justifyContent:'center',alignItems:'center',flex:0.3,borderRadius:30}}>
                        <Text style={{fontSize:20}}>Hot Teas</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.55,}}>
                    <FlatList numColumns={2} data={coffee}  keyExtractor={(item) => item.id} renderItem={renderItem}/>
                </View>
            </View>
            <View style={{flex:0.1,backgroundColor:'#CDC9C9',display:'flex',flexDirection:"row",alignItems:'center',justifyContent:'space-around',borderTopWidth:0.3,}}>
                <View style={{flex:0.2,height:"100%",justifyContent:'center',alignItems:"center"}}>
                    <AntDesign name="home" size={24} color="#CD853F" />
                    <View style={{borderWidth:2,width:"20%",borderColor:'#CD853F'}}></View>
                </View>
                <View style={{flex:0.2,height:"100%",justifyContent:'center',alignItems:"center"}}>
                    <Feather name="search" size={24} color="black" />
                </View>
                <View style={{flex:0.2,height:"100%",justifyContent:'center',alignItems:"center"}}>
                    <AntDesign name="hearto" size={24} color="black" />
                </View>
                <TouchableOpacity onPress={hanldPress} style={{flex:0.2,height:"100%",justifyContent:'center',alignItems:"center"}}>
                    <EvilIcons name="cart" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flex:0.2,height:"100%",justifyContent:'center',alignItems:"center"}}>
                    <AntDesign name="user" size={24} color="black" />
                </View>
            </View>
        </SafeAreaView>
    );    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
   
  });
  
export default Screen2;