import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aquehqrgdzbgexbqkztq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxdWVocXJnZHpiZ2V4YnFrenRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NjY4MjQsImV4cCI6MTk5MzQ0MjgyNH0.vRRqlYZ5o-KX3vDK921M_JZDp1CriTHJ2dImiiu7POQ';

export const supabase = createClient(supabaseUrl, supabaseKey)