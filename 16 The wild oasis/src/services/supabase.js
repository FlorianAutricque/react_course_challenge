import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lmhtxikijpdbmnnbxstu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtaHR4aWtpanBkYm1ubmJ4c3R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NjIxNTIsImV4cCI6MjAwODAzODE1Mn0.g1WR3ugzBTtNTNClR-jPFfLzLgAw4sG1wwCEkA1OaDk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
