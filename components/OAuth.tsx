import { View , Text, Image} from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";


const OAuth = () => {


    const handleGoogleSignIn = () => {

    }
    return(
        <View >
            <View className="flex flex-row justify-center items-center">
                <View className="flex h-[1px] bg-general-200" />
                <Text className="text-lg">OR</Text>
                <View className="flex h-[1px] bg-general-200" />

            </View>

            <CustomButton
            title ="Log In with Google"
            className="mt-5 w-full shadow-none"
            iconStyle="w-5 h-5 px-4" // Adjust icon size to match text size

            IconLeft={() => (
                <Image
                source={icons.google}
                resizeMode="contain"
                className="w-5 h-5 mr-2 pr-4" 
                />
            )}
            bgVariant="outline"
            textVariant="primary"
            onPress={handleGoogleSignIn} 
            />
                
            
        </View>
    )
}

export default OAuth;