import { StyleSheet, Text, View,Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Screen1(){
    const navigation = useNavigation();
    const hanldPress = ()=>{
        navigation.navigate("Screen2");
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:0.6,justifyContent:'center'}}>
                <View style={{flex:0.8,marginLeft:40,marginRight:40,}}>
                    <Image source={require('../images/background_Screen1.jpg')} style={{height:"100%",width:"100%",borderRadius:100,}}/>
                </View>
            </View>
            <View style={{flex:0.4,marginLeft:20,marginRight:20,}}>
                    <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:35,textAlign:'center',fontWeight:'700'}}>Coffee so good, your taste buds will love it</Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center',marginRight:70,marginLeft:70,}}>
                        <Text style={{fontSize:20,textAlign:'center',}}>The best grain, the finest roast, the powerful flavor</Text>
                    </View>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center',}}>
                        <TouchableOpacity onPress={hanldPress}  style={{backgroundColor:"#99CC00",width:"100%",height:50,justifyContent:'center',borderRadius:20,}}>
                            <Text style={{fontSize:28,textAlign:'center',fontWeight:'500'}}>Get started</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </SafeAreaView>
    );    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#FFFFCC"
    },
   
  });
  
export default Screen1;