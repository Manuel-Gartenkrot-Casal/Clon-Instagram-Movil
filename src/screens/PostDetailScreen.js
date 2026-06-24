import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { comments } from '../constants/data';

export default function PostDetailScreen({ route }) {
  const { post } = route.params;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: post.image }} style={styles.image} />
      </View>

      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={toggleLike} style={styles.actionBtn}>
            <Ionicons name={liked ? 'heart' : 'heart-outline'} size={28} color={liked ? COLORS.red : COLORS.darkGray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="chatbubble-outline" size={26} color={COLORS.darkGray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="send-outline" size={26} color={COLORS.darkGray} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={28} color={COLORS.darkGray} />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <Text style={styles.likes}>{likes.toLocaleString()} Me gusta</Text>
        <View style={styles.captionRow}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.caption}> {post.caption}</Text>
        </View>
      </View>

      <View style={styles.commentsSection}>
        <Text style={styles.commentsTitle}>Comentarios</Text>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.commentRow}>
              <Text style={styles.commentUser}>{item.username}</Text>
              <Text style={styles.commentText}> {item.text}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  imageWrap: { width: '100%', aspectRatio: 1 },
  image: { width: '100%', height: '100%' },
  actions: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 14, paddingTop: 12,
  },
  leftActions: { flexDirection: 'row', alignItems: 'center' },
  actionBtn: { marginRight: 16 },
  info: { paddingHorizontal: 14, paddingTop: 8 },
  likes: { fontWeight: '600', fontSize: 14, color: COLORS.darkGray, marginBottom: 4 },
  captionRow: { flexDirection: 'row', flexWrap: 'wrap' },
  username: { fontWeight: '600', fontSize: 13, color: COLORS.darkGray },
  caption: { fontSize: 13, color: COLORS.darkGray, flexShrink: 1 },
  commentsSection: { flex: 1, paddingHorizontal: 14, paddingTop: 12 },
  commentsTitle: { fontWeight: '600', fontSize: 14, color: COLORS.darkGray, marginBottom: 8 },
  commentRow: { flexDirection: 'row', marginBottom: 8 },
  commentUser: { fontWeight: '600', fontSize: 13, color: COLORS.darkGray },
  commentText: { fontSize: 13, color: COLORS.darkGray, flexShrink: 1 },
});
