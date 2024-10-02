import React from 'react'
import {View, Image} from 'react-native'
import {Tabs} from 'expo-router'
import { home, plant, profile } from '../../assets/constants/icons';


const TabIcon =({icon, color, name, focused}) => {
    return (
        <View>
            <Image 
            source={icon}
            resizeMode ="contain"
             className="w-6 h-6"
             tintColor= {color}
            />
        </View>
        );
};


const TabLayout = () => {
  return (
        <Tabs>
            <Tabs.Screen
            name="home"
            options ={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({color,focused}) =>(
                    <TabIcon
                    icon ={home}
                    color ={color}
                    focused ={focused}
                    />

                )
            }}
            /> //End of Home Icon
            <Tabs.Screen
            name="plant"
            options ={{
                title: 'Plant',
                headerShown: false,
                tabBarIcon: ({color,focused}) =>(
                    <TabIcon
                    icon ={plant}
                    color ={color}
                    focused ={focused}
                    />
                )
            }}
            /> //End of Plant Icon

<Tabs.Screen
            name="profile"
            options ={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({color,focused}) =>(
                    <TabIcon
                    icon ={profile}
                    color ={color}
                    focused ={focused}
                    />
                ),
            }}
            /> //End of Profile Icon

    </Tabs>
  )
}

export default TabLayout