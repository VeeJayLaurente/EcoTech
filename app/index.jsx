import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 justify-start items-center bg-[#0C9359] pt-12 relative px-6">
      {/* Background Circles */}
      <View className="absolute top-[-40px] left-[-320px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      <View className="absolute bottom-[-100px] right-[-250px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      <View className="absolute top-[-130px] right-[-320px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-strong" />
      <View className="absolute top-[400px] left-[-200px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-medium" />

      {/* Main Content */}
      <Image style={{ width: 200, height: 200, marginBottom: 20 }} source={require("../assets/icons/EcoTech.png")} />
      <Text className="text-5xl font-jesus text-white text-shadow-lg text-center">
        Welcome to EcoTech!
      </Text>

      {/* Register Button */}
      <Link
        href="./register"
        className="text-2xl font-nestor text-black mt-8 bg-white px-12 py-3 rounded-full shadow-lg hover:bg-[#0C9359] hover:text-white transition-all duration-300 ease-in-out">
        Register
      </Link>

      {/* Login Button */}
      <Link
        href="./login"
        className="text-2xl font-nestor text-black mt-4 border-2 border-black px-12 py-3 rounded-full shadow-lg hover:bg-[#0C9359] hover:text-white transition-all duration-300 ease-in-out">
        Login
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}
