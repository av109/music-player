import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
	return <SafeAreaProvider>
		<RootNavigation />

		<StatusBar style='auto'/>
	</SafeAreaProvider>
}

const RootNavigation = () => { 
	<Stack> 
		<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
	</Stack>
 }

