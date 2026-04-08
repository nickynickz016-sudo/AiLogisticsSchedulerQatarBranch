import { createClient } from '@supabase/supabase-js';
import { Job, Personnel, SystemSettings, UserProfile, Vehicle, InventoryItem, JobCostSheet } from './types';

// Provided Supabase project details
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase URL and Anon Key are missing. The app will run in disconnected mode.");
}

// Define the database schema based on types
export type Database = {
  public: {
    Tables: {
      jobs: {
        Row: Job;
        Insert: Job;
        Update: Partial<Job>;
      };
      personnel: {
        Row: Personnel;
        Insert: Omit<Personnel, 'id'>;
        Update: Partial<Personnel>;
      };
      vehicles: {
        Row: Vehicle;
        Insert: Omit<Vehicle, 'id'>;
        Update: Partial<Vehicle>;
      };
      system_users: {
        Row: UserProfile;
        Insert: Omit<UserProfile, 'id'>;
        Update: Partial<UserProfile>;
      };
      system_settings: {
        Row: SystemSettings & { id: number };
        Insert: SystemSettings & { id: number };
        Update: Partial<SystemSettings>;
      };
      inventory_items: {
        Row: InventoryItem;
        Insert: Omit<InventoryItem, 'id'>;
        Update: Partial<InventoryItem>;
      };
      job_cost_sheets: {
        Row: JobCostSheet;
        Insert: JobCostSheet;
        Update: Partial<JobCostSheet>;
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};

// Use <any> generic to bypass strict type inference that is causing 'never' type errors
export const supabase = createClient<any>(supabaseUrl, supabaseAnonKey);
