export declare interface EditorType {
  id: string;
  label: string;
  title: string;
}
export declare type allowedEditors = 'raw' | 'urlEncode' | 'multipart' | 'file';

export interface MonacoSchema {
  uri: string;
  schema: any;
}
