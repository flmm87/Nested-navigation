import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen() {
  function renderedCategoryItem(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        id={itemData.item.id}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderedCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
