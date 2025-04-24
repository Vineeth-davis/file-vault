import { useQuery} from '@tanstack/react-query';
import axios from 'axios';

const bytesToMB = (bytes: number) => (bytes / 1024 / 1024).toFixed(2);

export const StorageSavings = () => {
    const { data: savings } = useQuery({
      queryKey: ['storage-savings'],
      queryFn: () => axios.get('/api/storage-savings/')
      .then((res: { data: { total: number } }) => res.data)
    });
  
    return (
      <div className="p-4 bg-blue-50 rounded-lg">
        <p className="text-sm">
          Total storage saved: {bytesToMB(savings?.total || 0)} MB
        </p>
      </div>
    );
  };