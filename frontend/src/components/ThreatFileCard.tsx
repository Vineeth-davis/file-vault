// components/ThreatFileCard.tsx
import { File as FileType } from '../types/file';

interface ThreatFileCardProps {
  file: FileType;
  onAnalyze: () => void;
}

export default function ThreatFileCard({ file, onAnalyze }: ThreatFileCardProps) {
  return (
    <div className="p-4 border rounded">
      <h3 className="font-medium">{file.original_filename}</h3>
      <button 
        onClick={onAnalyze}
        className="mt-2 text-sm text-blue-600 hover:underline"
      >
        Analyze File
      </button>
    </div>
  );
}