
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import OAuth from "@/components/OAuth";


const SignUp = () => {

  

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter name"
            labelStyle="text-lg font-JakartaSemiBold mb-3"
            iconStyle="w-6 h-6 ml-2"
            containerStyle="mb-2 bg-neutral-100 border border-neutral-100 focus:border-primary-500 rounded-full"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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
            title="Sign Up"
            onPress={() => {}}
            className="mt-6 p-6 mb-4"
          />
          <OAuth/>
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
  
        
      </View>
    </ScrollView>
  );
};
export default SignUp;