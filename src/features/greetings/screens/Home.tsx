import React, { FC, useState } from "react";
import { StatusBar as ExpoStatus } from "expo-status-bar";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/SafeArea";

const Home: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <SafeArea>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <ExpoStatus style="auto" />
      </View>
    </SafeArea>
  );
};

export default Home;
