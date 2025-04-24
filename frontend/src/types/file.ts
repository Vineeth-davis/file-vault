export interface File {
  id: string;
  original_filename: string;
  file_type: string;
  size: number;
  uploaded_at: string;
  file: string;
  content_hash: string;
}

export interface FileFilters {
  filename?: string;
  fileType?: string;
  minSize?: number;
  maxSize?: number;
  startDate?: Date;
  endDate?: Date;
}
