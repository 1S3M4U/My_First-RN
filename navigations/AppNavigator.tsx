import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppDrawerParamList } from "../src/types/NavigationTypes";
// navigators
import DataUserNavigator from "./DataUserNavigator";
import HomeNavigator from "./HomeNavigator";
import MenuNavigator from "./MenuNavigator";
import ProductListNavigator from "./ProductListNavigator";
import AddressNavigator from "./AddressNavigator";
import {} from "module";
const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: "transparent",
	},
};

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppNavigator() {
	return (
		<NavigationContainer theme={theme}>
			<Drawer.Navigator
				drawerContentOptions={{
					activeTintColor: "#e91e63",
					itemStyle: { marginVertical: 5 },
				}}
			>
				<Drawer.Screen
					name='HomePage'
					options={{ drawerLabel: "Back" }}
					component={HomeNavigator}
				/>
				<Drawer.Screen
					name='Address'
					options={{ drawerLabel: "Address" }}
					component={AddressNavigator}
				/>
				<Drawer.Screen
					name='ProductList'
					options={{ drawerLabel: "Product List" }}
					component={ProductListNavigator}
				/>
				<Drawer.Screen
					name='Categories'
					options={{ drawerLabel: "Categories" }}
					component={MenuNavigator}
				/>
				<Drawer.Screen
					name='DataUser'
					options={{ drawerLabel: "Account" }}
					component={DataUserNavigator}
				/>
				<Drawer.Screen
					name='Dokumentasi'
					options={{ drawerLabel: "Dokumentasi" }}
					component={AddressNavigator}
				/>
				<Drawer.Screen
					name='About'
					options={{ drawerLabel: "Tentang" }}
					component={HomeNavigator}
				/>

				{/* <Drawer.Screen
					name='Signin'
					options={{ drawerLabel: "Login" }}
					component={SigninNavigator}
				/> */}
				{/* <Drawer.Screen
					name='Signup'
					options={{ drawerLabel: "Logout" }}
					component={SignupNavigator}
				/> */}
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
