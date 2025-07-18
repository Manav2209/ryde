import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Image, Alert } from "react-native";
import { useCallback, useState } from "react";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { Link, router } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";

const SignIn = () => {

    const { signIn, setActive, isLoaded } = useSignIn();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
      });
      const onSignInPress = useCallback(async () => {
        if (!isLoaded) return;
    
        try {
          const signInAttempt = await signIn.create({
            identifier: form.email,
            password: form.password,
          });
    
          if (signInAttempt.status === "complete") {
            await setActive({ session: signInAttempt.createdSessionId });
            router.replace("/(root)/(tabs)/home");
          } else {
            // See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
            console.log(JSON.stringify(signInAttempt, null, 2));
            Alert.alert("Error", "Log in failed. Please try again.");
          }
        } catch (err: any) {
          console.log(JSON.stringify(err, null, 2));
          Alert.alert("Error", err.errors[0].longMessage);
        }
      }, [isLoaded, form]);
    
      return (
        <ScrollView className="flex-1 bg-white">
          <View className="flex-1 bg-white">
            <View className="relative w-full h-[250px]">
              <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
              <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                Welcome 
              </Text>
            </View>
            <View className="p-5">
             
              <InputField
                label="Email"
                placeholder="Enter email"
                icon={icons.email}
                labelStyle="text-lg font-JakartaSemiBold mb-3"
                iconStyle="w-6 h-6 ml-2"
                containerStyle="mb-2 bg-neutral-100 border border-neutral-100 focus:border-primary-500 rounded-full"
                textContentType="emailAddress"
                value={form.email}
                onChangeText={(value) => setForm({ ...form, email: value })}
              />
              <InputField
                label="Password"
                placeholder="Enter password"
                labelStyle="text-lg font-JakartaSemiBold mb-3"
                iconStyle="w-6 h-6 ml-2"
                containerStyle="mb-2 bg-neutral-100 border border-neutral-100 focus:border-primary-500 rounded-full"
                icon={icons.lock}
                secureTextEntry={true}
                textContentType="password"
                value={form.password}
                onChangeText={(value) => setForm({ ...form, password: value })}
              />
              <CustomButton
                title="Sign In"
                onPress={onSignInPress}
                className="mt-6 p-6 mb-4"
              />
              <OAuth/>
              <Link
                href="/sign-up"
                className="text-lg text-center text-general-200 mt-10"
              >
                Don't have an Account{" "}
                <Text className="text-primary-500">Sign Up</Text>
              </Link>
            </View>
      
            
          </View>
        </ScrollView>
      )
}

export default SignIn;