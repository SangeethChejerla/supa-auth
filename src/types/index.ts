// lib/db/types.ts
export type Database = {
    public: {
      Tables: {
        users: {
          Row: {
            id: string;
            email: string;
            created_at: string;
            updated_at: string;
          };
          Insert: {
            id?: string;
            email: string;
            created_at?: string;
            updated_at?: string;
          };
          Update: {
            id?: string;
            email?: string;
            created_at?: string;
            updated_at?: string;
          };
        };
      };
    };
  };