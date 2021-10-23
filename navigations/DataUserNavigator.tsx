import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { icons, COLORS, FONTS, SIZES } from "../constants";
import { MenuAndProductListStackParamList } from "../src/types/NavigationTypes";
// screens
import Address from "../screens/Forms/__Address";
import Cart from "../screens/View-2/Cart";
import Category from "../screens/View-2/Categories";
import Product from "../screens/View-2/DetailProduct";
import ListProduct from "../screens/View-1/ListProduct";

const Stack = createStackNavigator<MenuAndProductListStackParamList>();

export default function MenuNavigator() {
	const navigation =
		useNavigation<StackNavigationProp<MenuAndProductListStackParamList>>();
	return (
		<Stack.Navigator initialRouteName={"Category"}>
			<Stack.Screen
				name='Category'
				component={Category}
				options={{
					title: "Categories",
					headerStyle: {
						//backgroundColor: '#f4511e',
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
					headerRight: () => (
						<TouchableOpacity
							style={{ marginRight: SIZES.padding }}
							onPress={() => console.log("Pressed")}
						>
							<Image
								source={icons.search}
								resizeMode='contain'
								style={{
									width: 30,
									height: 30,
								}}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen name='ListProduct' component={ListProduct} />
			<Stack.Screen name='Product' component={Product} />
			<Stack.Screen name='Cart' component={Cart} />
			<Stack.Screen name='Address' component={Address} />
		</Stack.Navigator>
	);
}