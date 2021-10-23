import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { Image, TouchableOpacity, PlatformColor } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, FONTS, icons, SIZES } from "../constants";
// screens
import Home from "../screens/View-1/Home";
import ProductList from "../screens/View-1/ListProduct";
import ListProduct from "../screens/View-1/ListProduct";
import Store from "../screens/View-1/Store";
import History from "../screens/View-1/History";
import Profile from "../screens/View-1/Profile";
import Category from "../screens/View-2/Categories";
import DetailProduct from "../screens/View-2/DetailProduct";
import Cart from "../screens/View-2/Cart";
import Splashscreen from "../screens/secret/SplashScreen";
// import Profile from "../screens/Forms/Address";
import {
	HomeBottmTabParamList,
	HomeStackParamList,
} from "../src/types/NavigationTypes";
import AddressNavigator from "./AddressNavigator";

const Stack = createStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<HomeBottmTabParamList>();

function HomeTabs() {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			tabBarOptions={{
				labelStyle: { ...FONTS.home_btm_text },
				inactiveTintColor: COLORS.black,
				activeTintColor: COLORS.light2,
			}}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='home' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='ListProduct'
				component={ListProduct}
				options={{
					// title: "Products List",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='format-list-bulleted-square'
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Store'
				component={Store}
				options={{
					// title: "Store",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='shopping-outline' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='History'
				component={Home}
				options={{
					// title: "History",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='cards-outline' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					// title: "Profile",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='account-circle-outline'
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default function HomeNavigator() {
	const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
	return (
		<Stack.Navigator initialRouteName='Splashscreen'>
			<Stack.Screen
				name='Home'
				component={HomeTabs}
				options={{
					headerShown: false,
					// title: "Makmur Store",
					headerStyle: {
						backgroundColor: "#fafafa",
					},
					headerTintColor: COLORS.lightGray,
					headerTitleStyle: {
						...FONTS.navTitle,
					},
					headerLeft: ({ onPress }) => (
						<TouchableOpacity
							style={{ marginLeft: SIZES.padding }}
							onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
						>
							<Image
								source={icons.menu}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
								}}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name='Splashscreen'
				component={Splashscreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name='ProductList' component={ProductList} />
			<Stack.Screen name='ListProduct' component={ListProduct} />
			<Stack.Screen name='DetailProduct' component={DetailProduct} />
			<Stack.Screen name='Cart' component={Cart} />
		</Stack.Navigator>
	);
}
