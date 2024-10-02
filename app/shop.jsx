import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product

  const productList = [
    { 
      id: 1, 
      name: 'Oregano', 
      price: '$25', 
      image: require('../assets/icons/oregano.png'),
      description: 'Oregano is a popular herb known for its strong flavor, often used in Italian cuisine.'
    },
    { 
      id: 2, 
      name: 'Lemon Balm', 
      price: '$30', 
      image: require('../assets/icons/lemonbalm.png'),
      description: 'Lemon Balm is a fragrant herb known for its lemon scent and calming properties.'
    },
    { 
      id: 3, 
      name: 'Basil', 
      price: '$15', 
      image: require('../assets/icons/basil.png'),
      description: 'Basil is a key ingredient in many dishes, especially in Mediterranean cooking.'
    },
    { 
      id: 4, 
      name: 'Thyme', 
      price: '$20', 
      image: require('../assets/icons/thyme.png'),
      description: 'Thyme adds depth of flavor to soups, stews, and meats.'
    },
    { 
      id: 5, 
      name: 'Mint', 
      price: '$10', 
      image: require('../assets/icons/mint.png'),
      description: 'Mint is refreshing and often used in beverages, desserts, and salads.'
    },
    { 
      id: 6, 
      name: 'Rosemary', 
      price: '$18', 
      image: require('../assets/icons/rosemary.png'),
      description: 'Rosemary is an aromatic herb that pairs well with roasted meats and vegetables.'
    },
    // Add more products here
  ];

  // Function to open the selected product details
  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the product details modal
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  // Render function for each product
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      onPress={() => openProductDetails(item)}
      className="flex-1 m-2 items-center bg-white rounded-lg p-3 shadow-md"
    >
      <Image source={item.image} className="w-24 h-24" />
      <Text className="text-center mt-2 font-medium">{item.name}</Text>
      <Text className="text-center text-gray-500">{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-[#E6FAF0]">
      <FlatList
        data={productList}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        ListHeaderComponent={
          <View>
            <Text className="text-2xl font-bold p-5">EcoStore 🛒</Text>
            <Text className="text-lg font-bold p-5">Popular items</Text>
          </View>
        }
      />

      {/* Modal for Product Details */}
      <Modal
        visible={!!selectedProduct}
        transparent={true}
        animationType="slide"
      >
        <View className="flex-1 bg-black bg-opacity-50 justify-center items-center">
          <View className="w-11/12 bg-white bg-opacity-90 rounded-lg p-5 items-center">
          <TouchableOpacity onPress={closeProductDetails} className="absolute top-2 right-2 bg-red-500 p-2 rounded-full">
          <Text className="text-white text-lg font-bold">X</Text>
          </TouchableOpacity>
            {selectedProduct && (
              <>
                <Image source={selectedProduct.image} className="w-32 h-32 mb-4" />
                <Text className="text-2xl font-bold mb-2">{selectedProduct.name}</Text>
                <Text className="text-lg text-gray-600 mb-4">Herb • {selectedProduct.price}</Text>
                <Text className="text-sm text-gray-500 text-center mb-4">
                  {selectedProduct.description}
                </Text>
                <TouchableOpacity className="bg-green-600 p-3 rounded-lg">
                  <Text className="text-white font-bold">Add to Cart</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Shop;
