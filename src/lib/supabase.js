import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gszwwzmqohjmojylslej.supabase.co';
const supabaseAnonKey = 'sb_publishable_fQI4Xwm39b7d5pXMuid8Ng_clowsC7R';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
