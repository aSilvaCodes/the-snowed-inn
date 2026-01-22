import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dlfuneefyakgbphchoij.supabase.co";
const supabaseKey = "sb_publishable_yARnu_OYPPcQkd172C15rQ_Hy47vUnn";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
