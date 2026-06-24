import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

export default function PostCard({ post, onPress }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userRow}>
          <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
          <View>
            <Text style={styles.username}>{post.username}</Text>
            {post.location && <Text style={styles.location}>{post.location}</Text>}
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.darkGray} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.95} onPress={onPress}>
        <Image source={{ uri: post.image }} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={toggleLike} style={styles.actionBtn}>
            <Ionicons name={liked ? 'heart' : 'heart-outline'} size={24} color={liked ? COLORS.red : COLORS.darkGray} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.actionBtn}>
            <Ionicons name="chatbubble-outline" size={22} color={COLORS.darkGray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="send-outline" size={22} color={COLORS.darkGray} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color={COLORS.darkGray} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.likesCount}>{likes.toLocaleString()} Me gusta</Text>
        <View style={styles.captionRow}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.caption}> {post.caption}</Text>
        </View>
        {post.comments > 0 && (
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.viewComments}>Ver los {post.comments} comentarios</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.time}>{post.timeAgo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 10, backgroundColor: COLORS.white },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 12, paddingVertical: 10,
  },
  userRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 32, height: 32, borderRadius: 16, marginRight: 10 },
  username: { fontWeight: '600', fontSize: 13, color: COLORS.darkGray },
  location: { fontSize: 11, color: COLORS.textGray, marginTop: 1 },
  image: { width: '100%', aspectRatio: 1 },
  actions: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 12, paddingTop: 10,
  },
  leftActions: { flexDirection: 'row', alignItems: 'center' },
  actionBtn: { marginRight: 14 },
  footer: { paddingHorizontal: 12, paddingTop: 6, paddingBottom: 10 },
  likesCount: { fontWeight: '600', fontSize: 13, color: COLORS.darkGray, marginBottom: 4 },
  captionRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 2 },
  caption: { fontSize: 13, color: COLORS.darkGray, flexShrink: 1 },
  viewComments: { fontSize: 13, color: COLORS.textGray, marginTop: 2 },
  time: { fontSize: 10, color: COLORS.textGray, marginTop: 4, letterSpacing: 0.2 },
});
