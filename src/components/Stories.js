import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import { currentUser } from '../constants/data';

const stories = [
  { id: '0', username: 'Tu historia', avatar: currentUser.avatar, isFirst: true },
  { id: '1', username: 'maria_dev', avatar: 'https://i.pravatar.cc/150?u=maria' },
  { id: '2', username: 'carlos_art', avatar: 'https://i.pravatar.cc/150?u=carlos' },
  { id: '3', username: 'luna_photos', avatar: 'https://i.pravatar.cc/150?u=luna' },
  { id: '4', username: 'juan_99', avatar: 'https://i.pravatar.cc/150?u=juan' },
  { id: '5', username: 'ana_creativa', avatar: 'https://i.pravatar.cc/150?u=ana' },
  { id: '6', username: 'pedro_lens', avatar: 'https://i.pravatar.cc/150?u=pedro' },
  { id: '7', username: 'sofia_nature', avatar: 'https://i.pravatar.cc/150?u=sofia' },
];

export default function Stories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story) => (
          <TouchableOpacity key={story.id} style={styles.storyItem}>
            <View style={[styles.avatarBorder, story.isFirst && styles.firstBorder]}>
              <Image source={{ uri: story.avatar }} style={styles.avatar} />
              {story.isFirst && (
                <View style={styles.addBadge}>
                  <Text style={styles.addText}>+</Text>
                </View>
              )}
            </View>
            <Text style={styles.username} numberOfLines={1}>{story.username}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.borderGray,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 14,
    width: 66,
  },
  avatarBorder: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: '#E03F5E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  firstBorder: {
    borderColor: COLORS.borderGray,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  addBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: COLORS.blue,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  addText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16,
  },
  username: {
    fontSize: 11,
    color: COLORS.darkGray,
  },
});
