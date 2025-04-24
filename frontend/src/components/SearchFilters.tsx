import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FileFilters } from '../types/file';

interface SearchFiltersProps {
  filters: FileFilters;
  setFilters: (filters: FileFilters) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ 
  filters, 
  setFilters 
}) => {
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FileFilters) => {
    const value = e.target.value ? parseInt(e.target.value) : undefined;
    // Convert MB to KB (1MB = 1024KB)
    const convertedValue = value ? value * 1024 : undefined;
    setFilters({ ...filters, [field]: convertedValue });
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-white">
      <input
        type="text"
        placeholder="Search by filename"
        value={filters.filename || ''}
        onChange={(e) => setFilters({...filters, filename: e.target.value})}
        className="w-full p-2 border rounded"
      />
      
      <div className="grid grid-cols-2 gap-4">
        <DatePicker
          selected={filters.startDate}
          onChange={(date: Date | null) => setFilters({
            ...filters, 
            startDate: date || undefined
          })}
          placeholderText="Uploaded after"
          className="w-full p-2 border rounded"
          maxDate={new Date()}
        />
        <DatePicker
          selected={filters.endDate}
          onChange={(date: Date | null) => setFilters({
  ...filters,
  endDate: date || undefined
})}
          placeholderText="Uploaded before"
          className="w-full p-2 border rounded"
          maxDate={new Date()}
        />
      </div>

      <select 
        value={filters.fileType || ''}
        onChange={(e) => setFilters({...filters, fileType: e.target.value})}
        className="w-full p-2 border rounded"
      >
        <option value="">All file types</option>
        <option value="image/png">PNG</option>
        <option value="image/jpeg">JPEG</option>
        <option value="application/pdf">PDF</option>
        <option value="application/json">JSON</option>
        <option value="text/csv">CSV</option>
        <option value="text/plain">Log/TXT</option>
        <option value="application/zip">ZIP</option>
        <option value="application/xml">XML</option>
        <option value="application/msword">DOC</option>
        <option value="application/vnd.openxmlformats-officedocument.wordprocessingml.document">DOCX</option>
        <option value="application/vnd.ms-excel">XLS</option>
        <option value="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">XLSX</option>
        <option value="text/html">HTML</option>
      </select>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Min size (MB)"
          value={filters.minSize ? Math.round(filters.minSize / 1024) : ''}
          onChange={(e) => handleNumberChange(e, 'minSize')}
          className="p-2 border rounded"
          min="0"
          max="10"
        />
        <input
          type="number"
          placeholder="Max size (MB)"
          value={filters.maxSize ? Math.round(filters.maxSize / 1024) : ''}
          onChange={(e) => handleNumberChange(e, 'maxSize')}
          className="p-2 border rounded"
          min="0"
          max="10"
        />
      </div>
      
      <div className="text-sm text-gray-500">
        <p>Max file size: 10MB</p>
        <p>Allowed formats: Security logs, documents, images</p>
      </div>
    </div>
  );
};