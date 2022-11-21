import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useNavigation } from "@react-navigation/native";
import MPesa from "../../assets/svg/mpesa.svg";

const PaymentChoice = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  const MpesaPay = () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer O3vf8rW39tW3mkbzznLIKDzYtUfE");
    fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: "POST",
      headers,
      body: JSON.stringify({
        BusinessShortCode: 174379,
        Password:
          "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIxMTIxMTE0NzIz",
        Timestamp: "20221121114723",
        TransactionType: "CustomerPayBillOnline",
        Amount: 1,
        PartyA: 254708374149,
        PartyB: 174379,
        PhoneNumber: 254757478812,
        CallBackURL: "https://mydomain.com/path",
        AccountReference: "CompanyXLTD",
        TransactionDesc: "Payment of X",
      }),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <MainLayout>
      <Text className="text-center text-white  text-xl font-bold">
        Mode of Payment
      </Text>
      <View className="mt-10">
        <TouchableOpacity
          className="w-[100%] rounded-lg border-white border-2 p-2 h-auto"
          onPress={MpesaPay}
        >
          <MPesa height={50} />
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default PaymentChoice;
