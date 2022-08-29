export interface IEntry {
  type: string;
  message: string;
  image: string[];
  video?: any;
}

export interface IAccount {
  name: string;
  username: string;
  image: string;
  link: string;
  channel: string;
}

export interface IDateType {
  published_at: string;
  is_published: boolean;
  status: number;
  entry: IEntry;
  updated_at: string;
  created_at: string;
  link: string;
  account: IAccount;
}

export interface IPostsByDate {
  [key: string]: IDateType[];
}

export interface IRecord {
  posts_by_date: IPostsByDate;
}

export interface IMetadata {
  id: string;
  private: boolean;
  createdAt: string;
}

export interface IDataType {
  record: IRecord;
  metadata: IMetadata;
}
