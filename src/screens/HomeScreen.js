import { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Stories from '../components/Stories';
import PostCard from '../components/PostCard';
import { fetchCatImages } from '../services/api';
import { users, locations, captions } from '../constants/data';
import { COLORS } from '../constants/theme';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const images = await fetchCatImages(15);
    const mapped = images.map((img, i) => {
      const user = users[i % users.length];
      return {
        id: img.id || String(i),
        image: img.url,
        username: user.username,
        userAvatar: user.avatar,
        location: locations[i % locations.length],
        caption: captions[i % captions.length],
        likes: Math.floor(Math.random() * 150) + 20,
        comments: Math.floor(Math.random() * 20) + 3,
        timeAgo: `${Math.floor(Math.random() * 24) + 1} HORAS ATRÁS`,
      };
    });
    setPosts(mapped);
    setLoading(false);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.screen}>
        <Header />
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onPress={() => navigation.navigate('PostDetail', { post: item })}
          />
        )}
        ListHeaderComponent={<Stories />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.white },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
