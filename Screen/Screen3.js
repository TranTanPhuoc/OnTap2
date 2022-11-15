import { StyleSheet, Text, View,Image, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useState } from 'react';
function Screen3({route}){
    const navigation = useNavigation();
    const { list } = route.params;
    const hanldPress = ()=>{
        navigation.navigate("Screen2");
    }
    
    const renderItem= ({item}) =>{
        return(
            <View style={{flex:1,height:110,display:'flex',flexDirection:"row",alignItems:'center'}}>
                <View style={{flex:0.25,height:"100%",justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:"red",height:80,width:80}}>
                        <Image source={item.image} style={{height:"100%", width:"100%"}}/>
                    </View>
                </View>
                <View style={{flex:0.45,height:"100%",height:"100%",justifyContent:'center',}}>
                    <Text style={{fontSize:22,fontWeight:"600"}}>{item.name}</Text>
                    <Text style={{fontSize:16,color:"#B7B7B7"}}>HighLand Coffee</Text>
                </View>
                <View style={{flex:0.3,height:"100%",justifyContent:'space-around',alignItems:'center',display:'flex',flexDirection:"row"}}>
                        <TouchableOpacity style={{height:30,width:30,borderRadius:100,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                            <AntDesign name="minus" size={24} color="black" />
                        </TouchableOpacity>
                        <Text>{item.quanity}</Text>
                        <TouchableOpacity style={{height:30,width:30,borderRadius:100,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                            <AntDesign name="plus" size={24} color="black" />
                        </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:0.1,display:'flex',flexDirection:'row'}}>
                <TouchableOpacity onPress={hanldPress} style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Entypo name="chevron-left" size={32} color="black" />
                </TouchableOpacity>
                <View style={{flex:0.6,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:28,fontWeight:"600"}}>Order</Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                </View>
            </View>
            <View style={{flex:0.75,}}>
                <View style={{flex:0.6,borderBottomWidth:5,borderColor:"#C2C2C2"}}>
                    <View style={{flex:0.2,marginLeft:20,marginRight:20,alignItems:"center"}}>
                        <View style={{flex:0.8,backgroundColor:'#D7D7D7',width:"100%",borderRadius:20,display:'flex',flexDirection:'row'}}>
                            <View style={{flex:0.5,backgroundColor:"#EE7942",borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:22,fontWeight:"600",color:'white'}}>Deliver</Text>
                            </View>
                            <View style={{flex:0.5,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:22,}}>Pick Up</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:0.45,marginLeft:20,marginRight:20,}}>
                        <View style={{flex:0.3,}}>
                            <Text style={{fontSize:22,fontWeight:"600",}}>Delivery Address</Text>
                        </View>
                        <View style={{flex:0.15,}}>
                            <Text style={{fontSize:20,}}>JL, Kpg Sotoyo</Text>
                        </View>
                        <View style={{flex:0.1,}}>
                            <Text style={{fontSize:16,fontWeight:"600",color:'#B7B7B7'}}>Kpg Sotoyo No.620, Bilzen,Tajungbalai</Text>
                        </View>
                        <View style={{flex:0.4,justifyContent:'space-between',display:'flex',flexDirection:'row',alignItems:'center',width:"80%"}}>
                            <TouchableOpacity style={{flex:0.45,justifyContent:'center',borderRadius:10,borderWidth:1,height:40}}>
                                    <View style={{marginLeft:10,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                        <FontAwesome5 name="edit" size={18} color="black" />
                                        <Text style={{fontSize:20}}>Edit Address</Text>
                                    </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:0.45,justifyContent:'center',borderRadius:10,borderWidth:1,height:40}}>
                                    <View style={{marginLeft:10,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                        <FontAwesome5 name="edit" size={18} color="black" />
                                        <Text style={{fontSize:20}}>Edit Address</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={{flex:0.35,marginLeft:10,marginRight:10,borderTopWidth:0.5,borderColor:"grey",justifyContent:'center',}}>
                        <FlatList data={list} renderItem={renderItem}/>
                    </View>
                </View>
                <View style={{flex:0.4,}}>
                    <View style={{flex:0.3,justifyContent:'center',alignItems:'center',marginLeft:20,marginRight:20,}}>
                        <View style={{width:"100%",flex:0.9,borderRadius:20,borderWidth:1,borderColor:"grey",display:'flex',flexDirection:'row'}}>
                            <View style={{flex:0.7,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:"row"}}>
                                <Foundation name="burst-sale" size={32} color="#EE7942"/>
                                <Text style={{fontSize:22,marginLeft:10,fontWeight:"600"}}>1 Discount is applied</Text>
                            </View>
                            <View style={{flex:0.2}}>

                            </View>
                            <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                    <View style={{flex:0.7,marginRight:30,marginLeft:30,}}>
                        <View style={{flex:0.3,justifyContent:'center'}}>
                            <Text style={{fontSize:22,fontWeight:"600",}}>Payment Summary</Text>
                        </View>
                        <View style={{flex:0.2,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={{fontSize:20,}}>Price</Text>
                            <Text style={{fontSize:20,}}>$ 4.53</Text>
                        </View>
                        <View style={{flex:0.2,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:1,}}>
                            <Text style={{fontSize:20,}}>Delivery Fee</Text>
                            <Text style={{fontSize:20,}}>$ 1.0</Text>
                        </View>
                        <View style={{flex:0.3,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                            <Text style={{fontSize:20,}}>Total</Text>
                            <Text style={{fontSize:20,}}>$ 5.53</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
            <View style={{flex:0.15,justifyContent:'space-between',alignItems:'center',display:'flex',flexDirection:'row'}}>
                <View style={{flex:0.4,height:"100%",justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20,}}>Total Price</Text>
                    <Text style={{fontSize:24,color:"#EE7942",fontWeight:"600"}}>22 $</Text>
                </View>
                <View style={{flex:0.6,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{height:60,width:"80%",backgroundColor:"#EE7942",justifyContent:'center',alignItems:'center',borderRadius:20,}}>
                        <Text style={{fontSize:25,fontWeight:"600",color:'white'}}>Order</Text>
                    </TouchableOpacity>
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
  
export default Screen3;