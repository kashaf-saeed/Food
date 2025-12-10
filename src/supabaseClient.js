import { createClient } from '@supabase/supabase-js';

// Apna Supabase URL aur ANON KEY yahan daalo (Supabase dashboard se liya tha)
const supabaseUrl = "https://xzvjuwimgoabnkjsbwqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dmp1d2ltZ29hYm5ranNid3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5NTExNDgsImV4cCI6MjA3OTUyNzE0OH0.ZLyyid_Pn_PtX4c6s15SoaY4mY48xW2cmzl2bnfpC0s";

export const supabase = createClient(supabaseUrl, supabaseKey);
