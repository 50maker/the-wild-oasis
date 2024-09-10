import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gbtcuveojqlpmbmpbocq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdidGN1dmVvanFscG1ibXBib2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NDkzMTUsImV4cCI6MjA0MTUyNTMxNX0.PNqhbbUueeHaRxtzuQkcdVuQlR4Fnl24eFm-0kxkK78";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
