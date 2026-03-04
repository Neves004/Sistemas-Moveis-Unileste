import { FilterStatus } from "@/types/FilterStatus";  
import { CircleCheck, CircleDashed } from 'lucide-react-native';

export function StatusIcon({ status }: { status: FilterStatus }) {
    return status === FilterStatus.RASCUNHO ? (
        <CircleDashed size={18} color="#000000" />
    ) : (
        <CircleCheck size={18} color="#2c46b1" />
    );
} 
 