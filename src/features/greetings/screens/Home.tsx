import React, { FC, useState } from "react";
import { StatusBar as ExpoStatus } from "expo-status-bar";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

const Home: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <ExpoStatus style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
