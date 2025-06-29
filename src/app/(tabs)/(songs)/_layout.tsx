import { Stack } from "expo-router"
import { View } from "react-native"
import { defaultStyles } from "../../../styles/index";

const SongsScreenLayout = () => { 
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen name="index" options={{ headerTitle: 'Songs' }} />
            </Stack>
        </View>
    )
 }

 export default SongsScreenLayout