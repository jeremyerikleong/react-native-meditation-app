import { View, Text } from 'react-native';
import { Meditation } from '../types';
import FontAwesome from '@expo/vector-icons/FontAwesome6';

const SIZES = 16;

export default function MeditationListItem({ meditation }: { meditation: Meditation }) {
    return (
        <View className="flex-row items-center gap-5">
            <View className="p-2 bg-orange-300 rounded-full">
                <FontAwesome name="check" size={SIZES} color="white" />
            </View>

            <View className="flex-1 p-5 py-8 border border-gray-400 rounded-lg">
                <Text className="text-2xl font-semibold">{meditation.title}</Text>

                <View className="flex-row items-center gap-2 mt-2">
                    <FontAwesome name="clock" size={SIZES} color="dimgray" />
                    <Text className="text-gray-600">{meditation.duration} min</Text>
                </View>
            </View>
        </View>
    )
}