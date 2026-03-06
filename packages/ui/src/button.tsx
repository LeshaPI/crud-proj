import { Text, TouchableOpacity } from 'react-native';
import { cssInterop } from 'nativewind'; 
import { cn } from './utils/cn';

cssInterop(TouchableOpacity, { className: "style" });
cssInterop(Text, { className: "style" });

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  textClassName?: string;
}

export const SharedButton = ({ title, onPress, className, textClassName }: ButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className={cn("bg-blue-600 p-4 rounded-xl items-center active:opacity-70", className)}
    >
      <Text className={cn("text-white font-bold text-base", textClassName)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};