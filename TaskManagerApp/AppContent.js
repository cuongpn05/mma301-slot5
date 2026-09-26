import React, { useContext } from "react";

import { View, FlatList, StyleSheet, Button } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import TaskInput from "./components/TaskInput";

import TaskItem from "./components/TaskItem";

import { add, toggle, remove } from "./store/taskSlice";

import { ThemeContext } from "./ThemeContext";

export default function AppContent() {
  // Lấy danh sách task từ Redux Store
  const tasks = useSelector((state) => state.tasks);

  // Dùng để gửi action đến Redux
  const dispatch = useDispatch();

  // Lấy Dark/Light Theme từ Context
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      {/* Nút đổi Light / Dark */}
      <Button title="Toggle Theme" onPress={toggleTheme} />

      {/* Ô nhập Task */}
      <TaskInput onAdd={(text) => dispatch(add(text))} />

      {/* Danh sách Task */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            onToggle={(id) => dispatch(toggle(id))}
            onDelete={(id) => dispatch(remove(id))}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,

    paddingHorizontal: 20,

    flex: 1,

    backgroundColor: "#fff",
  },

  darkContainer: {
    backgroundColor: "#222",
  },

  listContent: {
    paddingTop: 16,
  },
});
