import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://colcpyodjxqzqiulbmrj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvbGNweW9kanhxenFpdWxibXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5MjM4NjksImV4cCI6MjAzMDQ5OTg2OX0.PdHdHyRHNZGt1DnTAOqH0ycrUzGHsU2dNYxvboK6gFI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
