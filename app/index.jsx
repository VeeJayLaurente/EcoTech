import { Text, View, Image} from 'react-native';
import { router } from 'expo-router';
import CustomButton from '../components/CustomButtons';

export default function App() {
  return (
    <View className="flex-1 justify-start items-center bg-[#0C9359] pt-12 relative px-6 ">
      <View className ="top-20 items-center">
      {/* Background Circles */}
      <View className="absolute top-[-120px] left-[-320px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      <View className="absolute bottom-[-100px] right-[-250px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      <View className="absolute top-[-130px] right-[-320px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-strong" />
      <View className="absolute top-[400px] left-[-200px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-medium" />

      {/* Main Content */}
      <Image style={{ width: 200, height: 200, marginBottom: 20 }} source={require("../assets/icons/EcoTech.png")} />
      <Text className="text-5xl font-jesus text-white text-shadow-lg text-center">
        Welcome to EcoTech!
      </Text>

      {/* Register Button */}
      <CustomButton 
      title ="Login"
      containerStyles= "mt-4 items-center"
      handlePress={()=> router.push('/login')}
      >
      </CustomButton>

      <CustomButton 
      title ="Register"
      containerStyles= "mt-4 items-center"
      handlePress={()=> router.push('/register')}
      >
      </CustomButton>

      </View>
    </View>
  );
}
